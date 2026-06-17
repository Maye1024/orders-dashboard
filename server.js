/**
 * 接单助手 - 多人共享后端 v3
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
const SCREENSHOTS_DIR = path.join(DATA_DIR, 'screenshots');

[DATA_DIR, SCREENSHOTS_DIR].forEach(d => { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); });
['users','orders'].forEach(name => {
  const f = path.join(DATA_DIR, name + '.json');
  if (!fs.existsSync(f)) fs.writeFileSync(f, name === 'orders' ? '[]' : '{}');
});

app.use(express.json({ limit: '50mb' }));
app.use(express.static(__dirname));
app.use('/api/screenshots', express.static(SCREENSHOTS_DIR));

const upload = multer({ storage: multer.diskStorage({
  destination: SCREENSHOTS_DIR,
  filename: (req, file, cb) => cb(null, Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname)),
}), limits: { fileSize: 10 * 1024 * 1024 } });

// ===== HELPERS =====
function readJSON(file) { try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return file.endsWith('orders.json') ? [] : {}; } }
function writeJSON(file, data) { fs.writeFileSync(file, JSON.stringify(data, null, 2)); }
function hashPassword(pw) { return crypto.createHmac('sha256', 'orders-salt').update(pw).digest('hex'); }
function genOrderId() { const d = new Date(); return 'ORD-' + d.getFullYear() + String(d.getMonth()+1).padStart(2,'0') + String(d.getDate()).padStart(2,'0') + '-' + String(Math.floor(Math.random()*9000+1000)); }

// ===== JWT =====
const JWT_SECRET = 'orders-jwt-' + crypto.randomBytes(16).toString('hex');
function makeToken(email) {
  const h = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const p = Buffer.from(JSON.stringify({ email, iat: Date.now() })).toString('base64url');
  return h + '.' + p + '.' + crypto.createHmac('sha256', JWT_SECRET).update(h + '.' + p).digest('base64url');
}
function verifyToken(token) {
  try { const [h, p, s] = token.split('.'); if (!h || !p || !s) return null;
    if (crypto.createHmac('sha256', JWT_SECRET).update(h + '.' + p).digest('base64url') !== s) return null;
    return JSON.parse(Buffer.from(p, 'base64url').toString()).email; } catch { return null; }
}

// ===== AUTH MIDDLEWARE =====
function auth(req, res, next) {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!token) return res.status(401).json({ ok: false, message: '未登录' });
  const email = verifyToken(token);
  if (!email) return res.status(401).json({ ok: false, message: '登录已过期' });
  const users = readJSON(USERS_FILE);
  req.user = users[email]; req.userEmail = email;
  if (!req.user) return res.status(401).json({ ok: false, message: '用户不存在' });
  next();
}
function adminOnly(req, res, next) {
  if (!req.user || !req.user.isAdmin) return res.status(403).json({ ok: false, message: '仅管理员可操作' });
  next();
}

// ===== AUTH ROUTES =====
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password || password.length < 6) return res.json({ ok: false, message: '参数不完整或密码过短' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.json({ ok: false, message: '邮箱格式无效' });
  const users = readJSON(USERS_FILE);
  if (users[email]) return res.json({ ok: false, message: '该邮箱已被注册' });
  const colors = ['#4f6ef7','#f59e0b','#22c55e','#ef4444','#8b5cf6','#ec4899','#06b6d4'];
  users[email] = { name, email, password: hashPassword(password), avatar: name.charAt(0), color: colors[Object.keys(users).length % colors.length], phone: '', location: '', skills: ['Web开发'], isAdmin: false, createdAt: new Date().toISOString() };
  writeJSON(USERS_FILE, users);
  res.json({ ok: true, message: '注册成功' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const users = readJSON(USERS_FILE);
  const user = users[email];
  if (!user || user.password !== hashPassword(password)) return res.json({ ok: false, message: '邮箱或密码错误' });
  const { password: _, ...safeUser } = user;
  res.json({ ok: true, token: makeToken(email), user: safeUser });
});

app.get('/api/me', auth, (req, res) => {
  const { password: _, ...safeUser } = req.user;
  res.json({ ok: true, user: safeUser });
});

// ===== CHANGE PASSWORD =====
app.put('/api/me/password', auth, (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword || newPassword.length < 6) return res.json({ ok: false, message: '新密码至少6位' });
  const users = readJSON(USERS_FILE);
  if (users[req.userEmail].password !== hashPassword(oldPassword)) return res.json({ ok: false, message: '旧密码错误' });
  users[req.userEmail].password = hashPassword(newPassword);
  writeJSON(USERS_FILE, users);
  res.json({ ok: true, message: '密码修改成功，请重新登录' });
});

// ===== FORGOT PASSWORD =====
app.post('/api/forgot-password', (req, res) => {
  const { email, newPassword } = req.body;
  if (!email || !newPassword || newPassword.length < 6) return res.json({ ok: false, message: '参数不完整或密码过短' });
  const users = readJSON(USERS_FILE);
  if (!users[email]) return res.json({ ok: false, message: '该邮箱未注册' });
  users[email].password = hashPassword(newPassword);
  writeJSON(USERS_FILE, users);
  res.json({ ok: true, message: '密码重置成功，请登录' });
});

// ===== UPDATE PROFILE =====
app.put('/api/me', auth, (req, res) => {
  const { name, phone, location, skills } = req.body;
  const users = readJSON(USERS_FILE);
  if (name) users[req.userEmail].name = name;
  if (phone !== undefined) users[req.userEmail].phone = phone;
  if (location !== undefined) users[req.userEmail].location = location;
  if (skills !== undefined) users[req.userEmail].skills = skills;
  writeJSON(USERS_FILE, users);
  const { password: _, ...safeUser } = users[req.userEmail];
  res.json({ ok: true, user: safeUser, message: '资料已更新' });
});

// ===== ORDER ROUTES =====
app.get('/api/orders', auth, (req, res) => {
  const orders = readJSON(ORDERS_FILE);
  if (req.user.isAdmin) return res.json({ ok: true, orders });
  res.json({ ok: true, orders: orders.filter(o => o.userEmail === req.userEmail) });
});

app.post('/api/orders', auth, (req, res) => {
  const { cs, boss, player, categoryId, categoryName, duration, total, income, note, screenshots } = req.body;
  if (!cs || !boss || !player || !categoryId) return res.json({ ok: false, message: '请填写客服、老板ID、陪玩和品类' });
  const orders = readJSON(ORDERS_FILE);
  const order = { id: genOrderId(), cs, boss, player, categoryId, categoryName, duration: parseInt(duration) || 1, total: parseInt(total) || 0, income: parseInt(income) || 0, note: note || '', screenshots: screenshots || [], status: 'pending-confirm', date: new Date().toISOString().slice(0, 10), userEmail: req.userEmail, userName: req.user.name, updatedAt: new Date().toISOString() };
  orders.unshift(order);
  writeJSON(ORDERS_FILE, orders);
  res.json({ ok: true, order });
});

app.put('/api/orders/:id', auth, (req, res) => {
  const { status, cs, boss, player, categoryId, categoryName, duration, total, income, note, screenshots } = req.body;
  const orders = readJSON(ORDERS_FILE);
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.json({ ok: false, message: '订单不存在' });
  if (status && status === 'completed' && !req.user.isAdmin) return res.json({ ok: false, message: '仅管理员可确认完成' });
  if (!req.user.isAdmin && order.userEmail !== req.userEmail) return res.json({ ok: false, message: '无权修改' });

  // Update fields
  if (status) order.status = status;
  if (cs !== undefined) { order.cs = cs; order.boss = boss; order.player = player; order.categoryId = categoryId; order.categoryName = categoryName; order.duration = parseInt(duration) || 1; order.total = parseInt(total) || 0; order.income = parseInt(income) || 0; order.note = note || ''; }
  if (screenshots !== undefined) order.screenshots = screenshots;
  order.updatedAt = new Date().toISOString();
  writeJSON(ORDERS_FILE, orders);
  res.json({ ok: true, order });
});

app.delete('/api/orders/:id', auth, (req, res) => {
  const orders = readJSON(ORDERS_FILE);
  const idx = orders.findIndex(o => o.id === req.params.id);
  if (idx === -1) return res.json({ ok: false, message: '订单不存在' });
  if (!req.user.isAdmin && orders[idx].userEmail !== req.userEmail) return res.json({ ok: false, message: '无权删除' });
  const [deleted] = orders.splice(idx, 1);
  writeJSON(ORDERS_FILE, orders);
  (deleted.screenshots || []).forEach(url => { try { fs.unlinkSync(path.join(SCREENSHOTS_DIR, path.basename(url))); } catch {} });
  res.json({ ok: true });
});

// ===== UPLOAD =====
app.post('/api/upload', auth, upload.array('screenshots', 10), (req, res) => {
  const urls = (req.files || []).map(f => '/api/screenshots/' + f.filename);
  res.json({ ok: true, urls });
});

// ===== EXPORT CSV =====
app.get('/api/export', auth, adminOnly, (req, res) => {
  const orders = readJSON(ORDERS_FILE);
  const header = '订单号,用户,客服,老板ID,陪玩,品类,时长,折后总计,陪玩收入,状态,日期,备注\n';
  const csv = header + orders.map(o => `"${o.id}","${o.userName}","${o.cs}","${o.boss}","${o.player}","${o.categoryName}",${o.duration},${o.total||0},${o.income||0},"${o.status}","${o.date}","${(o.note||'').replace(/"/g,'""')}"`).join('\n');
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename=orders-export.csv');
  // Add BOM for Excel UTF-8
  res.send('﻿' + csv);
});

// ===== ADMIN ROUTES =====
app.get('/api/users', auth, adminOnly, (req, res) => {
  const users = readJSON(USERS_FILE);
  const orders = readJSON(ORDERS_FILE);
  const list = Object.values(users).map(u => {
    const { password: _, ...safe } = u;
    const userOrders = orders.filter(o => o.userEmail === u.email || o.cs === u.name);
    safe._orderCount = userOrders.length;
    safe._totalRevenue = userOrders.filter(o => o.status === 'completed').reduce((s, o) => s + (o.total || 0), 0);
    safe._completedCount = userOrders.filter(o => o.status === 'completed').length;
    safe._pendingConfirmCount = userOrders.filter(o => o.status === 'pending-confirm').length;
    return safe;
  });
  res.json({ ok: true, users: list });
});

app.get('/api/admin/orders', auth, adminOnly, (req, res) => {
  res.json({ ok: true, orders: readJSON(ORDERS_FILE) });
});

// ===== UPTIME PING (always-on) =====
app.get('/api/ping', (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

// ===== ENSURE ADMIN =====
function ensureAdmin() {
  const users = readJSON(USERS_FILE);
  if (!users['admin@admin.com']) {
    users['admin@admin.com'] = { name: '管理员', email: 'admin@admin.com', password: hashPassword('admin123'), avatar: '管', color: '#b45309', phone: '', location: '系统', skills: ['系统管理', '数据分析', '用户管理'], isAdmin: true, createdAt: new Date().toISOString() };
    writeJSON(USERS_FILE, users);
  }
}
ensureAdmin();

app.listen(PORT, () => console.log('接单助手服务端已启动 端口:' + PORT));
