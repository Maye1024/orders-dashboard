/**
 * 接单助手 - 多人共享后端
 * 部署: npm install && npm start
 */
const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3456;
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const TOKENS_FILE = path.join(DATA_DIR, 'tokens.json');
const SCREENSHOTS_DIR = path.join(DATA_DIR, 'screenshots');

// ============================
// INIT
// ============================
[DATA_DIR, SCREENSHOTS_DIR].forEach(d => { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); });
['users','orders','tokens'].forEach(name => {
  const f = path.join(DATA_DIR, name + '.json');
  if (!fs.existsSync(f)) fs.writeFileSync(f, name === 'orders' ? '[]' : name === 'tokens' ? '{}' : '{}');
});

app.use(express.json({ limit: '50mb' }));
app.use(express.static(__dirname));
app.use('/api/screenshots', express.static(SCREENSHOTS_DIR));

// File upload
const upload = multer({ storage: multer.diskStorage({
  destination: SCREENSHOTS_DIR,
  filename: (req, file, cb) => cb(null, Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname)),
}), limits: { fileSize: 10 * 1024 * 1024 } });

// ============================
// HELPERS
// ============================
function readJSON(file) { try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return file.endsWith('orders.json') ? [] : {}; } }
function writeJSON(file, data) { fs.writeFileSync(file, JSON.stringify(data, null, 2)); }

function hashPassword(pw) { return crypto.createHmac('sha256', 'orders-salt').update(pw).digest('hex'); }
function genToken() { return crypto.randomUUID(); }
function genOrderId() { const d = new Date(); return 'ORD-' + d.getFullYear() + String(d.getMonth()+1).padStart(2,'0') + String(d.getDate()).padStart(2,'0') + '-' + String(Math.floor(Math.random()*9000+1000)); }

// ============================
// AUTH MIDDLEWARE
// ============================
function auth(req, res, next) {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!token) return res.status(401).json({ ok: false, message: '未登录' });
  const tokens = readJSON(TOKENS_FILE);
  const email = tokens[token];
  if (!email) return res.status(401).json({ ok: false, message: '登录已过期' });
  const users = readJSON(USERS_FILE);
  req.user = users[email];
  if (!req.user) return res.status(401).json({ ok: false, message: '用户不存在' });
  req.userEmail = email;
  next();
}

function adminOnly(req, res, next) {
  if (!req.user || !req.user.isAdmin) return res.status(403).json({ ok: false, message: '仅管理员可操作' });
  next();
}

// ============================
// AUTH ROUTES
// ============================

// Register
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password || password.length < 6) return res.json({ ok: false, message: '参数不完整或密码过短' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.json({ ok: false, message: '邮箱格式无效' });

  const users = readJSON(USERS_FILE);
  if (users[email]) return res.json({ ok: false, message: '该邮箱已被注册' });

  const colors = ['#4f6ef7','#f59e0b','#22c55e','#ef4444','#8b5cf6','#ec4899','#06b6d4'];
  users[email] = {
    name, email, password: hashPassword(password),
    avatar: name.charAt(0), color: colors[Object.keys(users).length % colors.length],
    phone: '', location: '', skills: ['Web开发'], isAdmin: false,
    createdAt: new Date().toISOString(),
  };
  writeJSON(USERS_FILE, users);
  res.json({ ok: true, message: '注册成功' });
});

// Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const users = readJSON(USERS_FILE);
  const user = users[email];
  if (!user || user.password !== hashPassword(password)) return res.json({ ok: false, message: '邮箱或密码错误' });

  const tokens = readJSON(TOKENS_FILE);
  const token = genToken();
  tokens[token] = email;
  writeJSON(TOKENS_FILE, tokens);

  const { password: _, ...safeUser } = user;
  res.json({ ok: true, token, user: safeUser });
});

// Get current user
app.get('/api/me', auth, (req, res) => {
  const { password: _, ...safeUser } = req.user;
  res.json({ ok: true, user: safeUser });
});

// Logout
app.post('/api/logout', auth, (req, res) => {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const tokens = readJSON(TOKENS_FILE);
  delete tokens[token];
  writeJSON(TOKENS_FILE, tokens);
  res.json({ ok: true });
});

// ============================
// ORDER ROUTES
// ============================

// Get orders (admin = all, user = own)
app.get('/api/orders', auth, (req, res) => {
  const orders = readJSON(ORDERS_FILE);
  if (req.user.isAdmin) return res.json({ ok: true, orders });
  res.json({ ok: true, orders: orders.filter(o => o.userEmail === req.userEmail) });
});

// Create order
app.post('/api/orders', auth, async (req, res) => {
  const { cs, boss, player, categoryId, categoryName, duration, total, income, note, screenshots } = req.body;
  if (!cs || !boss || !player || !categoryId) return res.json({ ok: false, message: '请填写客服、老板ID、陪玩和品类' });

  const orders = readJSON(ORDERS_FILE);
  const order = {
    id: genOrderId(), cs, boss, player, categoryId, categoryName,
    duration: parseInt(duration) || 1,
    total: parseInt(total) || 0,
    income: parseInt(income) || 0,
    note: note || '',
    screenshots: screenshots || [],
    status: 'pending-confirm',
    date: new Date().toISOString().slice(0, 10),
    userEmail: req.userEmail,
    userName: req.user.name,
  };
  orders.unshift(order);
  writeJSON(ORDERS_FILE, orders);
  res.json({ ok: true, order });
});

// Upload screenshots
app.post('/api/upload', auth, upload.array('screenshots', 10), (req, res) => {
  const urls = (req.files || []).map(f => '/api/screenshots/' + f.filename);
  res.json({ ok: true, urls });
});

// Update order status
app.put('/api/orders/:id', auth, (req, res) => {
  const { status } = req.body;
  const orders = readJSON(ORDERS_FILE);
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.json({ ok: false, message: '订单不存在' });

  // Only admin can set completed, users can only modify own orders
  if (status === 'completed' && !req.user.isAdmin) return res.json({ ok: false, message: '仅管理员可确认完成' });
  if (!req.user.isAdmin && order.userEmail !== req.userEmail) return res.json({ ok: false, message: '无权修改他人订单' });

  order.status = status;
  writeJSON(ORDERS_FILE, orders);
  res.json({ ok: true, order });
});

// Delete order
app.delete('/api/orders/:id', auth, (req, res) => {
  const orders = readJSON(ORDERS_FILE);
  const idx = orders.findIndex(o => o.id === req.params.id);
  if (idx === -1) return res.json({ ok: false, message: '订单不存在' });
  if (!req.user.isAdmin && orders[idx].userEmail !== req.userEmail) return res.json({ ok: false, message: '无权删除' });

  const [deleted] = orders.splice(idx, 1);
  writeJSON(ORDERS_FILE, orders);
  // Clean up screenshots
  (deleted.screenshots || []).forEach(url => {
    const f = path.join(SCREENSHOTS_DIR, path.basename(url));
    try { fs.unlinkSync(f); } catch {}
  });
  res.json({ ok: true });
});

// ============================
// ADMIN ROUTES
// ============================

// List all users
app.get('/api/users', auth, adminOnly, (req, res) => {
  const users = readJSON(USERS_FILE);
  const orders = readJSON(ORDERS_FILE);
  const list = Object.values(users).map(u => {
    const { password: _, ...safe } = u;
    safe._orderCount = orders.filter(o => o.userEmail === u.email || o.cs === u.name).length;
    safe._totalRevenue = orders.filter(o => (o.userEmail === u.email || o.cs === u.name) && o.status === 'completed').reduce((s, o) => s + (o.total || 0), 0);
    safe._completedCount = orders.filter(o => (o.userEmail === u.email || o.cs === u.name) && o.status === 'completed').length;
    safe._pendingConfirmCount = orders.filter(o => (o.userEmail === u.email || o.cs === u.name) && o.status === 'pending-confirm').length;
    return safe;
  });
  res.json({ ok: true, users: list });
});

// Admin: all orders with user info
app.get('/api/admin/orders', auth, adminOnly, (req, res) => {
  const orders = readJSON(ORDERS_FILE);
  res.json({ ok: true, orders });
});

// ============================
// ENSURE ADMIN
// ============================
function ensureAdmin() {
  const users = readJSON(USERS_FILE);
  if (!users['admin@admin.com']) {
    users['admin@admin.com'] = {
      name: '管理员', email: 'admin@admin.com', password: hashPassword('admin123'),
      avatar: '管', color: '#b45309', phone: '', location: '系统',
      skills: ['系统管理', '数据分析', '用户管理'], isAdmin: true,
      createdAt: new Date().toISOString(),
    };
    writeJSON(USERS_FILE, users);
    console.log('[初始化] 管理员账号已创建: admin@admin.com / admin123');
  }
}
ensureAdmin();

// ============================
// START
// ============================
app.listen(PORT, () => {
  console.log('========================================');
  console.log('  接单助手服务端已启动');
  console.log('  地址: http://localhost:' + PORT);
  console.log('  数据目录: ' + DATA_DIR);
  console.log('========================================');
});
