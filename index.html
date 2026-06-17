<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>接单助手 · 多人共享接单管理</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root {
  --bg:#f5f6fa;--surface:#fff;--border:#e8ecf1;--text:#1a1d26;--text-secondary:#6b7280;
  --primary:#4f6ef7;--primary-dark:#3d56d4;--primary-light:#eef1fe;
  --success:#22c55e;--success-light:#ecfdf5;--warning:#f59e0b;--warning-light:#fffbeb;
  --danger:#ef4444;--danger-light:#fef2f2;--radius:10px;
  --shadow:0 1px 3px rgba(0,0,0,.06);--shadow-lg:0 4px 12px rgba(0,0,0,.08);
  --sidebar-w:220px;--transition:0.2s ease;
}
[data-theme="dark"] {
  --bg:#0f1117;--surface:#1a1d27;--border:#2a2d3a;--text:#e4e6eb;--text-secondary:#8b8fa3;
  --primary:#6b84ff;--primary-dark:#5a6fe8;--primary-light:#1e2440;
  --success:#34d399;--success-light:#0f2b22;--warning:#fbbf24;--warning-light:#2b2410;
  --danger:#f87171;--danger-light:#2b1515;--shadow:0 1px 3px rgba(0,0,0,.3);--shadow-lg:0 4px 12px rgba(0,0,0,.4);
}
[data-theme="dark"] .auth-wrapper{background:linear-gradient(135deg,#1a1d2e 0%,#0f1117 50%,#0f1f1a 100%)}
[data-theme="dark"] input,[data-theme="dark"] select,[data-theme="dark"] textarea{background:#1e2230;color:var(--text)}
[data-theme="dark"] th{background:#1e2230}
[data-theme="dark"] tr:hover td{background:#1e2230}
[data-theme="dark"] .expand-row td{background:#1a1d27}
[data-theme="dark"] .search-box{background:#1e2230}
[data-theme="dark"] .btn-outline:hover{background:#1e2230}
[data-theme="dark"] .filter-tab:hover{background:#1e2230}
[data-theme="dark"] .rank-num.normal{background:#1e2230}
[data-theme="dark"] .ud-stat{background:#1e2230}
[data-theme="dark"] .modal-overlay{background:rgba(0,0,0,.7)}

html,body{height:100%}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;background:var(--bg);color:var(--text)}

/* ==== Auth ==== */
.auth-wrapper{display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px;background:linear-gradient(135deg,#eef1fe 0%,#f5f6fa 50%,#ecfdf5 100%)}
.auth-card{background:var(--surface);border-radius:16px;box-shadow:0 8px 30px rgba(0,0,0,.1);width:100%;max-width:420px;padding:40px 36px}
.auth-card .logo{text-align:center;margin-bottom:28px}
.auth-card .logo .icon{width:48px;height:48px;background:var(--primary);border-radius:14px;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:22px}
.auth-card .logo h1{font-size:20px;font-weight:700;margin-top:12px;color:var(--text)}
.auth-card .logo p{font-size:13px;color:var(--text-secondary);margin-top:4px}

.form-group{margin-bottom:14px}
.form-group label{display:block;font-size:13px;font-weight:600;margin-bottom:5px}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:8px;font-size:14px;outline:none;transition:all var(--transition);background:#fafbfc;font-family:inherit}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--primary);box-shadow:0 0 0 3px var(--primary-light);background:#fff}
.form-group input.error,.form-group select.error{border-color:var(--danger)}
.form-group .hint{font-size:11px;color:var(--text-secondary);margin-top:4px}
.form-group .error-msg{font-size:11px;color:var(--danger);margin-top:4px;display:none}
.form-group .error-msg.show{display:block}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.form-row-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px}

.btn-full{width:100%;padding:11px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;border:none;transition:all var(--transition)}
.btn-full.primary{background:var(--primary);color:#fff}
.btn-full.primary:hover{background:var(--primary-dark)}
.btn-full.loading{pointer-events:none;opacity:.7}
.btn-full.loading::after{content:'';width:14px;height:14px;border:2px solid #fff;border-top-color:transparent;border-radius:50%;margin-left:8px;animation:spin .6s linear infinite;display:inline-block}
@keyframes spin{to{transform:rotate(360deg)}}

.auth-footer{text-align:center;margin-top:22px;font-size:13px;color:var(--text-secondary)}
.auth-footer a{color:var(--primary);text-decoration:none;font-weight:600}
.auth-footer a:hover{text-decoration:underline}
.auth-footer span{color:var(--border);margin:0 8px}

.alert{padding:10px 14px;border-radius:8px;font-size:13px;margin-bottom:16px;display:none;text-align:center}
.alert.show{display:block}
.alert.success{background:var(--success-light);color:var(--success);border:1px solid var(--success)}
.alert.error{background:var(--danger-light);color:var(--danger);border:1px solid var(--danger)}
.alert.info{background:var(--primary-light);color:var(--primary);border:1px solid var(--primary)}

.pw-strength{display:flex;gap:4px;margin-top:6px}
.pw-strength .bar{flex:1;height:4px;border-radius:2px;background:var(--border)}
.pw-strength .bar.weak{background:var(--danger)}
.pw-strength .bar.medium{background:var(--warning)}
.pw-strength .bar.strong{background:var(--success)}
.pw-strength-label{font-size:11px;margin-top:4px}

/* ==== App ==== */
.app-container{display:flex;min-height:100vh}
.sidebar{width:var(--sidebar-w);background:var(--surface);border-right:1px solid var(--border);display:flex;flex-direction:column;position:fixed;top:0;left:0;bottom:0;z-index:100;transition:transform var(--transition);overflow-y:auto}
.sidebar-brand{padding:18px 24px;font-size:18px;font-weight:700;color:var(--primary);display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--border);cursor:pointer}
.sidebar-brand .icon{width:32px;height:32px;background:var(--primary);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;flex-shrink:0}
.sidebar-brand small{font-size:11px;color:var(--text-secondary);font-weight:400}
.sidebar-nav{flex:1;padding:16px 12px;display:flex;flex-direction:column;gap:2px}
.sidebar-nav a{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;color:var(--text-secondary);text-decoration:none;font-size:14px;font-weight:500;transition:all var(--transition)}
.sidebar-nav a:hover{background:var(--primary-light);color:var(--primary)}
.sidebar-nav a:focus-visible{outline:2px solid var(--primary);outline-offset:2px}
.sidebar-nav a:active{transform:scale(.97)}
.sidebar-nav a.active{background:var(--primary-light);color:var(--primary);font-weight:600}
.sidebar-nav .divider{height:1px;background:var(--border);margin:8px 12px}
.sidebar-nav .section-label{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--text-secondary);padding:8px 12px 4px}
.sidebar-nav .logout-btn{color:var(--danger)}
.sidebar-nav .logout-btn:hover{background:var(--danger-light);color:var(--danger)}
.sidebar-footer{padding:16px 24px;border-top:1px solid var(--border)}
.sidebar-footer .user-card{display:flex;align-items:center;gap:10px}
.sidebar-footer .avatar{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;color:#fff;flex-shrink:0}
.sidebar-footer .name{font-size:13px;font-weight:600}
.sidebar-footer .role{font-size:11px;color:var(--text-secondary)}

.theme-toggle{display:flex;align-items:center;gap:10px;padding:10px 12px;margin:0 12px 12px;border-radius:8px;cursor:pointer;border:1px solid var(--border);background:transparent;color:var(--text-secondary);font-size:13px;font-weight:500;width:calc(100% - 24px);transition:all var(--transition)}
.theme-toggle:hover{background:var(--primary-light);color:var(--primary)}
.theme-toggle .toggle-track{width:38px;height:20px;border-radius:10px;background:var(--border);position:relative;transition:background var(--transition);margin-left:auto}
.theme-toggle .toggle-thumb{width:16px;height:16px;border-radius:50%;background:#fff;position:absolute;top:2px;left:2px;transition:transform var(--transition);box-shadow:0 1px 3px rgba(0,0,0,.2)}
[data-theme="dark"] .theme-toggle .toggle-track{background:var(--primary)}
[data-theme="dark"] .theme-toggle .toggle-thumb{transform:translateX(18px)}

.main{margin-left:var(--sidebar-w);flex:1;padding:28px 32px;overflow-x:hidden}
.page-header{margin-bottom:24px;display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px}
.page-header h1{font-size:22px;font-weight:700}
.page-header p{font-size:14px;color:var(--text-secondary);margin-top:4px}

.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}
.stat-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px 22px;box-shadow:var(--shadow);transition:box-shadow var(--transition)}
.stat-card:hover{box-shadow:var(--shadow-lg)}
.stat-card .stat-icon{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;margin-bottom:10px}
.stat-card .stat-label{font-size:12px;color:var(--text-secondary)}
.stat-card .stat-value{font-size:24px;font-weight:700;margin-top:2px}
.stat-card .stat-change{font-size:11px;margin-top:4px}

.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px}
.panel{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden}
.panel-header{padding:14px 20px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center}
.panel-header h2{font-size:15px;font-weight:600}
.panel-body{padding:20px}
.panel-body.no-padding{padding:0}

table{width:100%;border-collapse:collapse;font-size:13px}
th{text-align:left;padding:10px 16px;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--text-secondary);font-weight:600;background:#fafbfc;border-bottom:1px solid var(--border)}
td{padding:10px 16px;border-bottom:1px solid var(--border)}
tr:last-child td{border-bottom:none}
tr:hover td{background:#fafbfc}

.badge{display:inline-block;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:500}
.badge.completed{background:var(--success-light);color:var(--success)}
.badge.pending-confirm{background:#fef3c7;color:#b45309}
.badge.pending{background:var(--warning-light);color:var(--warning)}
.badge.cancelled{background:var(--danger-light);color:var(--danger)}
.badge.in-progress{background:var(--primary-light);color:var(--primary)}
.badge.admin{background:#fef3c7;color:#b45309}
.badge.user{background:#ecfdf5;color:#059669}

.btn{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;border:none;transition:all var(--transition);text-decoration:none}
.btn-primary{background:var(--primary);color:#fff}
.btn-primary:hover{opacity:.9}
.btn-primary:focus-visible{outline:2px solid var(--primary);outline-offset:2px}
.btn-primary:active{transform:scale(.96)}
.btn-outline{background:transparent;border:1px solid var(--border);color:var(--text-secondary)}
.btn-outline:hover{background:#f5f6fa}
.btn-outline:focus-visible{outline:2px solid var(--primary);outline-offset:2px}
.btn-sm{padding:5px 12px;font-size:12px}
.btn-danger{background:var(--danger);color:#fff}
.btn-danger:hover{opacity:.9}
.btn-xs{padding:3px 8px;font-size:11px}

.search-box{display:flex;align-items:center;gap:8px;background:var(--bg);border-radius:8px;padding:8px 14px}
.search-box input{border:none;background:transparent;outline:none;font-size:13px;width:160px}
.search-box:focus-within{box-shadow:0 0 0 2px var(--primary)}
.filter-tabs{display:flex;gap:4px;flex-wrap:wrap}
.filter-tab{padding:6px 14px;border-radius:6px;font-size:12px;font-weight:500;cursor:pointer;border:none;background:transparent;color:var(--text-secondary);transition:all var(--transition)}
.filter-tab:hover{background:var(--bg)}
.filter-tab:focus-visible{outline:2px solid var(--primary);outline-offset:2px}
.filter-tab.active{background:var(--primary-light);color:var(--primary)}

.pagination{display:flex;align-items:center;justify-content:center;gap:8px;padding:16px;font-size:13px}
.pagination button{padding:6px 14px;border:1px solid var(--border);border-radius:6px;background:var(--surface);cursor:pointer;font-size:13px;color:var(--text)}
.pagination button:hover{background:var(--primary-light);color:var(--primary)}
.pagination button:disabled{opacity:.4;cursor:not-allowed}
.pagination .page-info{color:var(--text-secondary);margin:0 8px}

.rank-list{list-style:none}
.rank-item{display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--border)}
.rank-item:last-child{border-bottom:none}
.rank-num{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0}
.rank-num.gold{background:#fef3c7;color:#b45309}
.rank-num.silver{background:#f1f5f9;color:#64748b}
.rank-num.bronze{background:#fef2f2;color:#b91c1c}
.rank-num.normal{background:var(--bg);color:var(--text-secondary)}
.rank-avatar{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:#fff;flex-shrink:0}
.rank-info{flex:1;min-width:0}
.rank-name{font-size:14px;font-weight:600}
.rank-sub{font-size:12px;color:var(--text-secondary)}
.rank-value{font-size:15px;font-weight:700;text-align:right}
.rank-label{font-size:11px;color:var(--text-secondary);text-align:right}

.profile-header{display:flex;align-items:center;gap:20px;margin-bottom:24px}
.profile-avatar{width:72px;height:72px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;flex-shrink:0}
.profile-name{font-size:20px;font-weight:700}
.profile-role{font-size:13px;color:var(--text-secondary);margin-top:2px}
.profile-meta{display:flex;gap:16px;margin-top:8px;font-size:13px;color:var(--text-secondary);flex-wrap:wrap}
.profile-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:24px}
.profile-stat{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 18px;text-align:center}
.profile-stat .val{font-size:22px;font-weight:700}
.profile-stat .lbl{font-size:12px;color:var(--text-secondary);margin-top:2px}

.expand-row{display:none}
.expand-row.open{display:table-row}
.expand-row td{background:#fafbfc;padding:18px 20px}
.detail-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.detail-grid.cols-2{grid-template-columns:repeat(2,1fr)}
.detail-item .label{font-size:11px;color:var(--text-secondary);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px}
.detail-item .value{font-size:14px;font-weight:500}
.order-row{cursor:pointer}
.order-row:focus-visible{outline:2px solid var(--primary);outline-offset:-2px;background:var(--primary-light)}

.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:500;align-items:flex-start;justify-content:center;padding:40px 20px;overflow-y:auto}
.modal-overlay.show{display:flex}
.modal{background:var(--surface);border-radius:16px;box-shadow:0 8px 30px rgba(0,0,0,.2);width:100%;max-width:640px;margin:auto}
.modal-header{padding:16px 24px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center}
.modal-header h2{font-size:16px;font-weight:600}
.modal-close{width:32px;height:32px;border-radius:8px;border:none;background:transparent;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center}
.modal-close:hover{background:var(--bg)}
.modal-body{padding:20px 24px}
.modal-body .section-title{font-size:13px;font-weight:600;color:var(--text-secondary);margin:16px 0 10px;padding-top:16px;border-top:1px solid var(--border)}
.modal-body .section-title:first-child{margin-top:0;padding-top:0;border-top:none}

.screenshot-preview{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}
.screenshot-preview .thumb{width:80px;height:80px;border-radius:8px;border:1px solid var(--border);object-fit:cover;cursor:pointer;transition:transform var(--transition)}
.screenshot-preview .thumb:hover{transform:scale(1.05)}
.screenshot-full{max-width:100%;max-height:400px;border-radius:8px;margin-top:8px}

.calculated{font-size:24px;font-weight:700;padding:8px 0}
.calculated.income{color:var(--success)}
.calculated.total{color:var(--primary)}

.user-card-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px}
.user-detail-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:18px;box-shadow:var(--shadow)}
.user-detail-card:hover{box-shadow:var(--shadow-lg)}
.user-detail-card .ud-header{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.user-detail-card .ud-avatar{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;font-weight:700;flex-shrink:0}
.user-detail-card .ud-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.user-detail-card .ud-stat{text-align:center;background:var(--bg);border-radius:6px;padding:10px 6px}
.user-detail-card .ud-stat .val{font-size:15px;font-weight:700}
.user-detail-card .ud-stat .lbl{font-size:10px;color:var(--text-secondary)}
.user-detail-card .ud-meta{font-size:12px;color:var(--text-secondary);margin-top:10px;line-height:1.8}

.mobile-toggle{display:none;position:fixed;top:12px;left:12px;z-index:200;width:36px;height:36px;border-radius:8px;background:var(--surface);border:1px solid var(--border);align-items:center;justify-content:center;cursor:pointer;box-shadow:var(--shadow)}
.page{display:none}
.page.active{display:block}
.empty{text-align:center;padding:48px 20px;color:var(--text-secondary)}
.empty .empty-icon{font-size:40px;margin-bottom:12px;opacity:.5}
.empty p{font-size:14px;margin-bottom:12px}

.chart-bars{display:flex;align-items:flex-end;gap:12px;height:160px;padding:0 4px}
.chart-bar-wrap{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end}
.chart-bar{width:100%;max-width:40px;background:var(--primary);border-radius:6px 6px 0 0;transition:height .4s ease;min-height:4px}
.chart-bar-label{font-size:11px;color:var(--text-secondary)}

/* ==== Category Management ==== */
.category-row{display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--border)}
.category-row:last-child{border-bottom:none}
.category-row .name{flex:1;font-size:14px}
.category-row .price{width:80px;text-align:right;font-weight:600;font-size:14px}

.toast{position:fixed;top:20px;right:20px;z-index:999;padding:12px 20px;border-radius:8px;font-size:13px;font-weight:500;box-shadow:var(--shadow-lg);animation:slideIn .3s ease;max-width:360px}
.toast.success{background:var(--success);color:#fff}
.toast.error{background:var(--danger);color:#fff}
.toast.info{background:var(--primary);color:#fff}
@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}

/* ==== Responsive ==== */
@media(max-width:1024px){
  .stats{grid-template-columns:repeat(2,1fr)}.grid-2{grid-template-columns:1fr}
  .detail-grid{grid-template-columns:repeat(2,1fr)}.profile-stats{grid-template-columns:repeat(2,1fr)}
  .user-card-grid{grid-template-columns:1fr}
}
@media(max-width:768px){
  .sidebar{transform:translateX(-100%)}.sidebar.open{transform:translateX(0)}
  .main{margin-left:0;padding:16px 10px}.stats{grid-template-columns:1fr 1fr}
  .form-row,.form-row-3{grid-template-columns:1fr}
  .profile-header{flex-direction:column;text-align:center}
  .mobile-toggle{display:flex!important}
  .page-header{flex-direction:column}
  .page-header .btn{width:100%}
  .pagination{flex-wrap:wrap}
  .modal{max-width:95vw;margin:10px}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{transition-duration:0s!important;animation-duration:0s!important}
}
</style>
</head>
<body>

<!-- ===== AUTH ===== -->
<div id="auth-container" class="auth-wrapper">
  <div class="auth-card" id="auth-login">
    <div class="logo"><div class="icon">📋</div><h1>登录接单助手</h1><p>管理你的接单记录和收入</p></div>
    <div class="alert" id="login-alert" role="alert"></div>
    <form id="login-form" autocomplete="on">
      <div class="form-group"><label for="login-email">邮箱地址</label><input type="email" id="login-email" placeholder="请输入邮箱" required autocomplete="email"><div class="error-msg" id="login-email-error"></div></div>
      <div class="form-group"><label for="login-password">密码</label><input type="password" id="login-password" placeholder="请输入密码" required autocomplete="current-password"><div class="error-msg" id="login-pw-error"></div></div>
      <button type="submit" class="btn-full primary">登 录</button>
    </form>
    <div class="auth-footer"><a href="#" data-auth="register">没有账号？立即注册</a><span>|</span><a href="#" data-auth="forgot">忘记密码？</a></div>
  </div>

  <div class="auth-card" id="auth-register" style="display:none;">
    <div class="logo"><div class="icon">📋</div><h1>创建账号</h1><p>开始管理你的接单记录</p></div>
    <div class="alert" id="register-alert" role="alert"></div>
    <form id="register-form" autocomplete="on">
      <div class="form-group"><label for="reg-name">姓名</label><input type="text" id="reg-name" placeholder="你的姓名" required autocomplete="name"><div class="error-msg" id="reg-name-error"></div></div>
      <div class="form-group"><label for="reg-email">邮箱地址</label><input type="email" id="reg-email" placeholder="你的邮箱" required autocomplete="email"><div class="error-msg" id="reg-email-error"></div></div>
      <div class="form-group"><label for="reg-password">设置密码（至少6位）</label><input type="password" id="reg-password" placeholder="至少6位" required autocomplete="new-password" minlength="6"><div class="pw-strength"><span class="bar"></span><span class="bar"></span><span class="bar"></span><span class="bar"></span></div><div class="pw-strength-label" id="pw-label" aria-live="polite"></div><div class="error-msg" id="reg-pw-error"></div></div>
      <div class="form-group"><label for="reg-confirm">确认密码</label><input type="password" id="reg-confirm" placeholder="再次输入密码" required autocomplete="new-password"><div class="error-msg" id="reg-confirm-error"></div></div>
      <button type="submit" class="btn-full primary">注 册</button>
    </form>
    <div class="auth-footer"><a href="#" data-auth="login">已有账号？返回登录</a></div>
  </div>

  <div class="auth-card" id="auth-forgot" style="display:none;">
    <div class="logo"><div class="icon">🔑</div><h1>重置密码</h1><p>输入邮箱和新密码直接重置</p></div>
    <div class="alert" id="forgot-alert" role="alert"></div>
    <form id="forgot-form">
      <div class="form-group"><label for="forgot-email">邮箱地址</label><input type="email" id="forgot-email" placeholder="注册邮箱" required autocomplete="email"><div class="error-msg" id="forgot-email-error"></div></div>
      <div class="form-group"><label for="forgot-password">新密码</label><input type="password" id="forgot-password" placeholder="至少6位" required minlength="6"><div class="error-msg" id="forgot-pw-error"></div></div>
      <button type="submit" class="btn-full primary">重置密码</button>
    </form>
    <div class="auth-footer"><a href="#" data-auth="login">想起密码了？返回登录</a></div>
  </div>
</div>

<!-- ===== APP ===== -->
<div id="app-container" class="app-container" style="display:none;">
  <button class="mobile-toggle" aria-label="菜单" onclick="document.querySelector('.sidebar').classList.toggle('open')">☰</button>
  <aside class="sidebar">
    <div class="sidebar-brand"><div class="icon">📋</div><div><span>接单助手</span><br><small id="sidebar-badge"></small></div></div>
    <nav class="sidebar-nav" id="sidebar-nav" aria-label="主导航">
      <a href="#" data-page="dashboard" class="active" role="tab">📊 工作台</a>
      <a href="#" data-page="orders" role="tab">📦 订单管理</a>
      <a href="#" data-page="leaderboard" role="tab">🏆 接单排行</a>
      <a href="#" data-page="profile" role="tab">👤 个人资料</a>
      <span id="admin-nav"></span>
      <a href="#" class="logout-btn" role="button">🚪 退出登录</a>
    </nav>
    <button class="theme-toggle" id="theme-toggle" aria-label="切换夜间模式"><span id="theme-icon">🌙</span> <span id="theme-label">夜间模式</span><span class="toggle-track"><span class="toggle-thumb"></span></span></button>
    <div class="sidebar-footer">
      <div class="user-card">
        <div class="avatar" id="sidebar-avatar">---</div>
        <div><div class="name" id="sidebar-name">---</div><div class="role" id="sidebar-email">---</div></div>
      </div>
    </div>
  </aside>

  <main class="main">
    <section class="page active" id="page-dashboard"><div class="page-header"><div><h1 id="dashboard-greeting">工作台</h1><p>你的接单概览</p></div></div><div class="stats" id="dashboard-stats"></div><div class="grid-2"><div class="panel"><div class="panel-header"><h2>最近订单</h2><a href="#" class="btn btn-outline btn-sm" data-page="orders">查看全部</a></div><div class="panel-body no-padding" id="recent-orders-table"></div></div><div class="panel"><div class="panel-header"><h2>收入趋势</h2></div><div class="panel-body" id="chart-container"></div></div></div></section>

    <section class="page" id="page-orders">
      <div class="page-header"><div><h1>订单管理</h1><p>管理和查看接单记录</p></div><button class="btn btn-primary" id="btn-create-order">＋ 创建订单</button></div>
      <div class="panel"><div class="panel-header"><div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;"><div class="search-box"><span>🔍</span><input type="text" id="order-search" placeholder="搜索..."></div><div class="filter-tabs" id="order-filters"><button class="filter-tab active" data-filter="all">全部</button><button class="filter-tab" data-filter="pending-confirm">待确认</button><button class="filter-tab" data-filter="completed">已完成</button><button class="filter-tab" data-filter="pending">待处理</button><button class="filter-tab" data-filter="in-progress">进行中</button><button class="filter-tab" data-filter="cancelled">已取消</button></div></div></div><div class="panel-body no-padding" id="orders-table"></div><div id="orders-pagination"></div></div>
    </section>

    <section class="page" id="page-leaderboard"><div class="page-header"><div><h1>接单排行</h1><p>团队统计排名</p></div></div><div class="grid-2"><div class="panel"><div class="panel-header"><h2>🏅 接单数量</h2></div><div class="panel-body" id="rank-by-count"></div></div><div class="panel"><div class="panel-header"><h2>💰 收入金额</h2></div><div class="panel-body" id="rank-by-revenue"></div></div></div></section>

    <section class="page" id="page-profile"><div class="page-header"><div><h1>个人资料</h1></div><button class="btn btn-outline btn-sm" id="btn-edit-profile">✏️ 编辑资料</button><button class="btn btn-outline btn-sm" id="btn-change-pw">🔒 修改密码</button></div>
      <div class="profile-header"><div class="profile-avatar" id="profile-avatar">---</div><div><div class="profile-name" id="profile-name">---</div><div class="profile-role" id="profile-role-text">---</div><div class="profile-meta"><span>📧 <span id="profile-email">---</span></span><span>📱 <span id="profile-phone">---</span></span><span>📍 <span id="profile-location">---</span></span></div></div></div>
      <div class="profile-stats" id="profile-stats"></div>
      <div class="panel"><div class="panel-header"><h2>技能标签</h2></div><div class="panel-body" id="profile-skills"></div></div>
    </section>

    <section class="page" id="page-admin-users"><div class="page-header"><div><h1>👥 用户管理</h1></div></div><div class="panel"><div class="panel-header"><h2>注册用户（<span id="admin-user-count">0</span>人）</h2></div><div class="panel-body" id="admin-users-list"></div></div></section>

    <section class="page" id="page-admin-orders"><div class="page-header"><div><h1>📋 全部订单</h1></div><button class="btn btn-sm btn-outline" onclick="window.open('/api/export?token='+getToken())">📥 导出CSV</button></div><div class="panel"><div class="panel-header"><div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;"><h2>全部订单</h2><select id="admin-order-user-filter" style="padding:6px 12px;border:1px solid var(--border);border-radius:6px;font-size:13px;"><option value="all">所有用户</option></select></div></div><div class="panel-body no-padding" id="admin-orders-table"></div></div></section>

    <section class="page" id="page-admin-overview"><div class="page-header"><div><h1>📊 数据概览</h1></div><div style="display:flex;gap:8px;"><button class="btn btn-sm btn-outline" id="btn-manage-categories">📂 品类管理</button></div></div><div class="stats" id="admin-overview-stats"></div><div class="grid-2"><div class="panel"><div class="panel-header"><h2>用户收入占比</h2></div><div class="panel-body" id="admin-revenue-chart"></div></div><div class="panel"><div class="panel-header"><h2>订单状态分布</h2></div><div class="panel-body" id="admin-status-chart"></div></div></div></section>
  </main>
</div>

<!-- ===== MODALS ===== -->
<!-- Create/Edit Order -->
<div class="modal-overlay" id="order-modal"><div class="modal"><div class="modal-header"><h2 id="order-modal-title">📦 创建订单</h2><button class="modal-close" onclick="closeOrderModal()">✕</button></div><div class="modal-body"><form id="order-form">
  <input type="hidden" id="of-id"><input type="hidden" id="of-edit">
  <div class="form-row-3"><div class="form-group"><label for="of-cs">客服</label><input type="text" id="of-cs" required></div><div class="form-group"><label for="of-boss">老板ID</label><input type="text" id="of-boss" required></div><div class="form-group"><label for="of-player">陪玩</label><input type="text" id="of-player" required></div></div>
  <div class="form-row"><div class="form-group"><label for="of-category">品类</label><select id="of-category" required></select></div><div class="form-group"><label for="of-duration">时长</label><input type="number" id="of-duration" min="1" step="1" value="1" required></div></div>
  <div class="form-row"><div class="form-group"><label>折后总计</label><div class="calculated total" id="of-total-display">¥0</div><input type="hidden" id="of-total"></div><div class="form-group"><label>陪玩收入<small style="font-weight:400;color:var(--text-secondary)">(80%)</small></label><div class="calculated income" id="of-income-display">¥0</div><input type="hidden" id="of-income"></div></div>
  <div class="form-group"><label>备注</label><textarea id="of-note"></textarea></div>
  <div class="form-group"><label>报单截图</label><label class="btn btn-outline btn-sm" style="cursor:pointer;">📷 选择截图<input type="file" id="of-screenshots" accept="image/*" multiple style="display:none;"></label><div class="screenshot-preview" id="of-screenshot-preview"></div></div>
  <button type="submit" class="btn-full primary" style="margin-top:8px;">确 认</button>
</form></div></div></div>

<!-- View Order -->
<div class="modal-overlay" id="view-order-modal"><div class="modal"><div class="modal-header"><h2 id="view-order-title">订单详情</h2><button class="modal-close" onclick="closeViewOrderModal()">✕</button></div><div class="modal-body" id="view-order-body"></div></div></div>

<!-- Change Password -->
<div class="modal-overlay" id="pw-modal"><div class="modal" style="max-width:420px;"><div class="modal-header"><h2>🔒 修改密码</h2><button class="modal-close" onclick="closePwModal()">✕</button></div><div class="modal-body"><form id="pw-form">
  <div class="form-group"><label for="pw-old">旧密码</label><input type="password" id="pw-old" required></div>
  <div class="form-group"><label for="pw-new">新密码（至少6位）</label><input type="password" id="pw-new" required minlength="6"></div>
  <div class="form-group"><label for="pw-confirm">确认新密码</label><input type="password" id="pw-confirm" required></div>
  <div class="error-msg" id="pw-error"></div>
  <button type="submit" class="btn-full primary">修改密码</button>
</form></div></div></div>

<!-- Edit Profile -->
<div class="modal-overlay" id="profile-modal"><div class="modal" style="max-width:480px;"><div class="modal-header"><h2>✏️ 编辑资料</h2><button class="modal-close" onclick="closeProfileModal()">✕</button></div><div class="modal-body"><form id="profile-form">
  <div class="form-group"><label for="pf-name">姓名</label><input type="text" id="pf-name" required></div>
  <div class="form-group"><label for="pf-phone">手机号</label><input type="text" id="pf-phone"></div>
  <div class="form-group"><label for="pf-location">地址</label><input type="text" id="pf-location"></div>
  <div class="form-group"><label for="pf-skills">技能标签（用逗号分隔）</label><input type="text" id="pf-skills" placeholder="React,Vue,Node.js,..."></div>
  <button type="submit" class="btn-full primary">保存</button>
</form></div></div></div>

<!-- Category Management -->
<div class="modal-overlay" id="category-modal"><div class="modal" style="max-width:480px;"><div class="modal-header"><h2>📂 品类管理</h2><button class="modal-close" onclick="closeCategoryModal()">✕</button></div><div class="modal-body">
  <div id="category-list"></div>
  <form id="category-add-form" style="display:flex;gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid var(--border);">
    <input type="text" id="cat-name" placeholder="品类名称" required style="flex:1;padding:8px 12px;border:1px solid var(--border);border-radius:6px;font-size:13px;">
    <input type="number" id="cat-price" placeholder="价格" required min="0" style="width:80px;padding:8px 12px;border:1px solid var(--border);border-radius:6px;font-size:13px;">
    <button type="submit" class="btn btn-sm btn-primary">添加</button>
  </form>
</div></div></div>

<div id="toast-container"></div>

<script>
// ============================
// API & State
// ============================
var TOKEN_KEY='od_token_v2',THEME_KEY='od_theme',CATEGORIES_KEY='od_categories_v2';
function getToken(){return localStorage.getItem(TOKEN_KEY)}
function setToken(t){localStorage.setItem(TOKEN_KEY,t)}
function clearToken(){localStorage.removeItem(TOKEN_KEY)}

var CATEGORIES = JSON.parse(localStorage.getItem(CATEGORIES_KEY)) || [
  {id:'wzry_pw',name:'王者荣耀 排位',price:50},{id:'wzry_df',name:'王者荣耀 巅峰',price:80},{id:'lol_pw',name:'英雄联盟 排位',price:40},{id:'lol_pp',name:'英雄联盟 匹配',price:30},{id:'hpjy',name:'和平精英 排位',price:45},{id:'ys',name:'原神 代练',price:60},{id:'bhsr',name:'崩坏星穹铁道',price:50},{id:'wjdr',name:'无尽冬日',price:35},{id:'other',name:'其他服务',price:0}
];

async function api(method, path, body) {
  var opts={method:method,headers:{'Content-Type':'application/json'}};
  var token=getToken(); if(token) opts.headers['Authorization']='Bearer '+token;
  if(body) opts.body=JSON.stringify(body);
  try{var resp=await fetch(path,opts); var data=await resp.json();
    if(!data.ok&&(resp.status===401||resp.status===403)){if(resp.status===401){clearToken();showAuth();showToast('登录已过期，请重新登录','error')}else showToast(data.message,'error')}
    return data;
  }catch(err){return{ok:false,message:'网络连接失败，请稍后重试'}}
}

var currentUser=null,currentOrders=[],allUsers=[],orderFilter='all',pendingUploadFiles=[],ordersPage=1,pageSize=12;
var fmt=function(n){return '¥'+n.toLocaleString('zh-CN')};
var statusText={'pending-confirm':'待确认','completed':'已完成','pending':'待处理','in-progress':'进行中','cancelled':'已取消'};
function showToast(m,t){var c=document.getElementById('toast-container');var el=document.createElement('div');el.className='toast '+(t||'info');el.textContent=m;c.appendChild(el);setTimeout(function(){el.remove()},3000)}
function showAlert(id,m,t){var el=document.getElementById(id);el.textContent=m;el.className='alert '+(t||'error')+' show';setTimeout(function(){el.classList.remove('show')},4000)}

// Theme
function getTheme(){return localStorage.getItem(THEME_KEY)||'light'}
function setTheme(t){document.documentElement.setAttribute('data-theme',t);localStorage.setItem(THEME_KEY,t);var i=document.getElementById('theme-icon'),l=document.getElementById('theme-label');if(i&&l){if(t==='dark'){i.textContent='☀️';l.textContent='日间模式'}else{i.textContent='🌙';l.textContent='夜间模式'}}}
function toggleTheme(){setTheme(getTheme()==='dark'?'light':'dark')}

// ===== AUTH =====
function showAuth(){document.getElementById('app-container').style.display='none';document.getElementById('auth-container').style.display='flex';document.getElementById('auth-login').style.display='';document.getElementById('auth-register').style.display='none';document.getElementById('auth-forgot').style.display='none';document.getElementById('login-email').value='';document.getElementById('login-password').value='';currentUser=null;currentOrders=[]}
document.querySelectorAll('[data-auth]').forEach(function(l){l.addEventListener('click',function(e){e.preventDefault();document.querySelectorAll('#auth-container .auth-card').forEach(function(c){c.style.display='none'});document.getElementById('auth-'+this.dataset.auth).style.display='';document.querySelectorAll('.alert').forEach(function(a){a.classList.remove('show')})})});

document.getElementById('login-form').addEventListener('submit',async function(e){e.preventDefault();var btn=this.querySelector('button');btn.classList.add('loading');btn.textContent='登录中…';var email=document.getElementById('login-email').value.trim().toLowerCase(),pw=document.getElementById('login-password').value,valid=true;document.querySelectorAll('#login-form .error-msg').forEach(function(el){el.classList.remove('show')});if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){document.getElementById('login-email-error').textContent='请输入有效邮箱';document.getElementById('login-email-error').classList.add('show');valid=false}if(!pw||pw.length<6){document.getElementById('login-pw-error').textContent='密码至少6位';document.getElementById('login-pw-error').classList.add('show');valid=false}if(!valid){btn.classList.remove('loading');btn.textContent='登 录';return}
  var data=await api('POST','/api/login',{email:email,password:pw});if(!data.ok){btn.classList.remove('loading');btn.textContent='登 录';showAlert('login-alert',data.message,'error');return}
  setToken(data.token);currentUser=data.user;await loadData();showApp();showToast('登录成功！','success')});

document.getElementById('reg-password').addEventListener('input',function(){var pw=this.value,bars=document.querySelectorAll('#pw-strength .bar'),label=document.getElementById('pw-label');bars.forEach(function(b){b.className='bar'});var s=0;if(pw.length>=6)s++;if(pw.length>=8)s++;if(/[a-zA-Z]/.test(pw)&&/[0-9]/.test(pw))s++;if(/[^a-zA-Z0-9]/.test(pw))s++;var cls=s<=1?'weak':s<=2?'medium':'strong',txt=s<=1?'弱':s<=2?'中等':s<=3?'强':'非常强',tc=s<=1?'var(--danger)':s<=2?'var(--warning)':'var(--success)';bars.forEach(function(b,i){if(i<s)b.classList.add(cls)});label.textContent='密码强度：'+txt;label.style.color=tc});

document.getElementById('register-form').addEventListener('submit',async function(e){e.preventDefault();var btn=this.querySelector('button');btn.classList.add('loading');btn.textContent='注册中…';var name=document.getElementById('reg-name').value.trim(),email=document.getElementById('reg-email').value.trim().toLowerCase(),pw=document.getElementById('reg-password').value,cfm=document.getElementById('reg-confirm').value,valid=true;document.querySelectorAll('#register-form .error-msg').forEach(function(el){el.classList.remove('show')});document.querySelectorAll('#register-form input').forEach(function(el){el.classList.remove('error')});if(!name||name.length<2){document.getElementById('reg-name-error').textContent='姓名至少2个字符';document.getElementById('reg-name-error').classList.add('show');valid=false}if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){document.getElementById('reg-email-error').textContent='请输入有效邮箱';document.getElementById('reg-email-error').classList.add('show');valid=false}if(!pw||pw.length<6){document.getElementById('reg-pw-error').textContent='密码至少6位';document.getElementById('reg-pw-error').classList.add('show');valid=false}if(pw!==cfm){document.getElementById('reg-confirm-error').textContent='两次密码不一致';document.getElementById('reg-confirm-error').classList.add('show');valid=false}if(!valid){btn.classList.remove('loading');btn.textContent='注 册';return}
  var data=await api('POST','/api/register',{name:name,email:email,password:pw});if(!data.ok){btn.classList.remove('loading');btn.textContent='注 册';showAlert('register-alert',data.message,'error');return}
  showAlert('register-alert','注册成功！请登录','success');document.getElementById('register-form').reset();document.querySelectorAll('#pw-strength .bar').forEach(function(b){b.className='bar'});document.getElementById('pw-label').textContent='';
  setTimeout(function(){document.getElementById('auth-register').style.display='none';document.getElementById('auth-login').style.display='';document.getElementById('login-email').value=email},1500)});

// Forgot Password
document.getElementById('forgot-form').addEventListener('submit',async function(e){e.preventDefault();var email=document.getElementById('forgot-email').value.trim().toLowerCase(),pw=document.getElementById('forgot-password').value;if(!email||!pw||pw.length<6){showAlert('forgot-alert','请填写完整信息，密码至少6位','error');return}
  var data=await api('POST','/api/forgot-password',{email:email,newPassword:pw});if(!data.ok){showAlert('forgot-alert',data.message,'error');return}
  showAlert('forgot-alert','密码重置成功！请登录','success');setTimeout(function(){document.getElementById('auth-forgot').style.display='none';document.getElementById('auth-login').style.display='';document.getElementById('login-email').value=email},1500)});

// ===== DATA =====
async function loadData(){var orderData=await api('GET','/api/orders');currentOrders=orderData.ok?(orderData.orders||[]):[];if(currentUser&&currentUser.isAdmin){var userData=await api('GET','/api/users');allUsers=userData.ok?(userData.users||[]):[]}}

function showApp(){document.getElementById('auth-container').style.display='none';document.getElementById('app-container').style.display='flex';var u=currentUser;document.getElementById('sidebar-avatar').textContent=u.avatar;document.getElementById('sidebar-avatar').style.background=u.color;document.getElementById('sidebar-name').textContent=u.name;document.getElementById('sidebar-email').textContent=u.email;document.getElementById('sidebar-badge').textContent=u.isAdmin?'管理员':'';
  var adminNav=document.getElementById('admin-nav');if(u.isAdmin)adminNav.innerHTML='<div class="divider"></div><div class="section-label">管理员</div><a href="#" data-page="admin-overview" role="tab">📊 数据概览</a><a href="#" data-page="admin-users" role="tab">👥 用户管理</a><a href="#" data-page="admin-orders" role="tab">📋 全部订单</a>';else adminNav.innerHTML='';
  document.getElementById('profile-avatar').textContent=u.avatar;document.getElementById('profile-avatar').style.background=u.color;document.getElementById('profile-name').textContent=u.name;document.getElementById('profile-email').textContent=u.email;document.getElementById('profile-phone').textContent=u.phone||'未设置';document.getElementById('profile-location').textContent=u.location||'未设置';document.getElementById('profile-role-text').textContent=(u.skills&&u.skills.length>0?u.skills[0]:'自由职业者')+(u.isAdmin?' · 管理员':' · 自由职业者');document.getElementById('dashboard-greeting').textContent='你好，'+u.name+(u.isAdmin?'（管理员）':'');
  renderAll()}

// ===== STATS =====
function calcStats(l){l=l||currentOrders;var t=l.length,c=l.filter(function(o){return o.status==='completed'}).length,pc=l.filter(function(o){return o.status==='pending-confirm'}).length,p=l.filter(function(o){return o.status==='pending'}).length,ip=l.filter(function(o){return o.status==='in-progress'}).length,r=l.filter(function(o){return o.status==='completed'}).reduce(function(s,o){return s+(o.total||0)},0),pr=l.filter(function(o){return o.status==='pending'||o.status==='in-progress'||o.status==='pending-confirm'}).reduce(function(s,o){return s+(o.total||0)},0);return{total:t,completed:c,pendingConfirm:pc,pending:p,inProgress:ip,revenue:r,pendingRevenue:pr}}

// ===== RENDER =====
function renderAll(){renderDashboardStats();renderRecentOrders();renderChart();renderLeaderboard();renderProfile();if(currentUser&&currentUser.isAdmin){renderAdminUsers();renderAdminOrders();renderAdminOverview()}}

function renderDashboardStats(){var s=calcStats();var cards=[{icon:'📦',label:'总订单数',value:s.total,bg:'#eef1fe',ic:'#4f6ef7'},{icon:'✅',label:'已完成',value:s.completed,change:'完成率 '+Math.round(s.total>0?s.completed/s.total*100:0)+'%',bg:'#ecfdf5',ic:'#22c55e'},{icon:'⏳',label:'待确认',value:s.pendingConfirm,change:'进行中 '+s.inProgress+' · 待处理 '+s.pending,bg:'#fffbeb',ic:'#f59e0b'},{icon:'💰',label:'已完成收入',value:fmt(s.revenue),change:s.pendingRevenue>0?'待确认收入 '+fmt(s.pendingRevenue):'',bg:'#fef2f2',ic:'#ef4444'}];document.getElementById('dashboard-stats').innerHTML=cards.map(function(c){return'<div class="stat-card"><div class="stat-icon" style="background:'+c.bg+';color:'+c.ic+'">'+c.icon+'</div><div class="stat-label">'+c.label+'</div><div class="stat-value">'+c.value+'</div>'+(c.change?'<div class="stat-change">'+c.change+'</div>':'')+'</div>'}).join('')}

function renderRecentOrders(){var recent=currentOrders.slice().sort(function(a,b){return b.date.localeCompare(a.date)}).slice(0,5);if(recent.length===0){document.getElementById('recent-orders-table').innerHTML='<div class="empty"><div class="empty-icon">📭</div><p>暂无订单</p></div>';return}document.getElementById('recent-orders-table').innerHTML='<table><thead><tr><th>订单号</th><th>陪玩</th><th>品类</th><th>金额</th><th>状态</th></tr></thead><tbody>'+recent.map(function(o){return'<tr class="order-row" data-id="'+o.id+'" tabindex="0"><td style="font-weight:600;color:var(--primary)">'+o.id+'</td><td>'+o.player+'</td><td>'+(o.categoryName||'---')+'</td><td style="font-weight:600">'+fmt(o.total||0)+'</td><td><span class="badge '+o.status+'">'+(statusText[o.status]||o.status)+'</span></td></tr>'}).join('')+'</tbody></table>';document.querySelectorAll('#recent-orders-table .order-row').forEach(function(r){r.addEventListener('click',function(){viewOrderDetail(r.dataset.id)})})}

function renderChart(){var months=['1月','2月','3月','4月','5月','6月'];var data=months.map(function(m){return currentOrders.filter(function(o){var mo=parseInt(o.date.split('-')[1]);return months[mo-1]===m&&o.status==='completed'}).reduce(function(s,o){return s+(o.total||0)},0)});var max=Math.max.apply(Math,data.concat([1]));document.getElementById('chart-container').innerHTML='<div class="chart-bars">'+data.map(function(v,i){return'<div class="chart-bar-wrap"><span style="font-size:11px;color:var(--text-secondary)">'+fmt(v)+'</span><div class="chart-bar" style="height:'+(v/max*140)+'px"></div><span class="chart-bar-label">'+months[i]+'</span></div>'}).join('')+'</div>'}

// ===== PAGINATION =====
function paginate(list){var start=(ordersPage-1)*pageSize;return list.slice(start,start+pageSize)}
function renderPagination(total){var pages=Math.ceil(total/pageSize);if(pages<=1){document.getElementById('orders-pagination').innerHTML='';return}
  var html='<div class="pagination"><button '+(ordersPage<=1?'disabled':'')+' onclick="ordersPage=1;renderOrdersTable()">«</button><button '+(ordersPage<=1?'disabled':'')+' onclick="ordersPage--;renderOrdersTable()">‹</button><span class="page-info">第 '+ordersPage+'/'+pages+' 页 · 共 '+total+' 条</span><button '+(ordersPage>=pages?'disabled':'')+' onclick="ordersPage++;renderOrdersTable()">›</button><button '+(ordersPage>=pages?'disabled':'')+' onclick="ordersPage='+pages+';renderOrdersTable()">»</button></div>';document.getElementById('orders-pagination').innerHTML=html}

// ===== ORDERS TABLE =====
function renderOrdersTable(){var search=(document.getElementById('order-search')?.value||'').toLowerCase();var filtered=currentOrders.slice();if(orderFilter!=='all')filtered=filtered.filter(function(o){return o.status===orderFilter});if(search)filtered=filtered.filter(function(o){return(o.id||'').toLowerCase().indexOf(search)!==-1||(o.player||'').toLowerCase().indexOf(search)!==-1||(o.cs||'').toLowerCase().indexOf(search)!==-1||(o.boss||'').toLowerCase().indexOf(search)!==-1});renderPagination(filtered.length);var paged=paginate(filtered);if(paged.length===0){document.getElementById('orders-table').innerHTML='<div class="empty"><div class="empty-icon">📭</div><p>没有匹配的订单</p></div>';return}
  document.getElementById('orders-table').innerHTML='<table><thead><tr><th>订单号</th><th>客服</th><th>老板ID</th><th>陪玩</th><th>品类</th><th>时长</th><th>总计</th><th>收入</th><th>状态</th><th></th></tr></thead><tbody>'+paged.map(function(o){return'<tr data-id="'+o.id+'" tabindex="0"><td style="font-weight:600;color:var(--primary);cursor:pointer" onclick="viewOrderDetail(\''+o.id+'\')">'+o.id+'</td><td>'+o.cs+'</td><td>'+o.boss+'</td><td>'+o.player+'</td><td>'+o.categoryName+'</td><td>'+o.duration+'</td><td style="font-weight:600">'+fmt(o.total||0)+'</td><td style="color:var(--success);font-weight:600">'+fmt(o.income||0)+'</td><td><span class="badge '+o.status+'">'+(statusText[o.status]||o.status)+'</span></td><td><button class="btn btn-xs btn-outline" onclick="editOrder(\''+o.id+'\')">✏️</button></td></tr>'}).join('')+'</tbody></table>'}

// ===== VIEW / EDIT / DELETE ORDER =====
function viewOrderDetail(orderId){var o=currentOrders.find(function(x){return x.id===orderId});if(!o)return;document.getElementById('view-order-title').textContent='订单详情 · '+o.id;var ss='';if(o.screenshots&&o.screenshots.length>0)ss='<div class="section-title">报单截图</div><div style="display:flex;gap:8px;flex-wrap:wrap;">'+o.screenshots.map(function(s){return'<img src="'+s+'" class="screenshot-full" style="max-width:200px;cursor:pointer;" onclick="window.open(this.src)" alt="截图">'}).join('')+'</div>';
  document.getElementById('view-order-body').innerHTML='<div class="detail-grid">'+'<div class="detail-item"><div class="label">订单号</div><div class="value">'+o.id+'</div></div><div class="detail-item"><div class="label">客服</div><div class="value">'+o.cs+'</div></div><div class="detail-item"><div class="label">老板ID</div><div class="value">'+o.boss+'</div></div><div class="detail-item"><div class="label">陪玩</div><div class="value">'+o.player+'</div></div><div class="detail-item"><div class="label">品类</div><div class="value">'+o.categoryName+'</div></div><div class="detail-item"><div class="label">时长</div><div class="value">'+o.duration+'</div></div><div class="detail-item"><div class="label">折后总计</div><div class="value" style="color:var(--primary);font-weight:700">'+fmt(o.total||0)+'</div></div><div class="detail-item"><div class="label">陪玩收入(80%)</div><div class="value" style="color:var(--success);font-weight:700">'+fmt(o.income||0)+'</div></div><div class="detail-item"><div class="label">状态</div><div class="value"><span class="badge '+o.status+'">'+(statusText[o.status]||o.status)+'</span></div></div><div class="detail-item"><div class="label">创建者</div><div class="value">'+o.userName+'</div></div><div class="detail-item"><div class="label">日期</div><div class="value">'+o.date+'</div></div><div class="detail-item"><div class="label">备注</div><div class="value">'+(o.note||'无')+'</div></div></div>'+ss+
  '<div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap;">'+(currentUser&&currentUser.isAdmin?'<button class="btn btn-sm btn-primary" onclick="updateOrderStatus(\''+o.id+'\',\'completed\')">✅ 确认完成</button><button class="btn btn-sm btn-outline" onclick="editOrder(\''+o.id+'\');closeViewOrderModal()">✏️ 编辑</button>':'<button class="btn btn-sm btn-outline" onclick="editOrder(\''+o.id+'\');closeViewOrderModal()">✏️ 编辑</button>')+'<button class="btn btn-sm btn-outline" onclick="updateOrderStatus(\''+o.id+'\',\'in-progress\')">进行中</button><button class="btn btn-sm btn-outline" onclick="updateOrderStatus(\''+o.id+'\',\'pending\')">待处理</button><button class="btn btn-sm btn-outline" onclick="updateOrderStatus(\''+o.id+'\',\'cancelled\')">取消</button><button class="btn btn-sm btn-danger" style="margin-left:auto;" onclick="deleteOrder(\''+o.id+'\')">删除</button></div>';document.getElementById('view-order-modal').classList.add('show')}
function closeViewOrderModal(){document.getElementById('view-order-modal').classList.remove('show')}

async function updateOrderStatus(orderId,status){var data=await api('PUT','/api/orders/'+orderId,{status:status});if(!data.ok){showToast(data.message,'error');return}await loadData();closeViewOrderModal();renderAll();showToast('状态更新成功','success')}

async function deleteOrder(orderId){if(!confirm('确定删除 '+orderId+'？'))return;var data=await api('DELETE','/api/orders/'+orderId);if(!data.ok){showToast(data.message,'error');return}await loadData();closeViewOrderModal();renderAll();showToast('已删除','info')}

async function adminConfirmOrder(orderId){var data=await api('PUT','/api/orders/'+orderId,{status:'completed'});if(!data.ok){showToast(data.message,'error');return}await loadData();renderAll();showToast('已确认完成','success')}

// ===== CREATE / EDIT ORDER =====
function populateCatSelect(selId){var sel=document.getElementById(selId);sel.innerHTML='<option value="">请选择品类</option>'+CATEGORIES.map(function(c){return'<option value="'+c.id+'" data-price="'+c.price+'">'+c.name+(c.price>0?' (¥'+c.price+')':' (自定义)')+'</option>'}).join('')}
function calcTotal(prefix){var sel=document.getElementById(prefix+'-category');var opt=sel.options[sel.selectedIndex];var price=opt?parseInt(opt.dataset.price||'0'):0;var dur=parseInt(document.getElementById(prefix+'-duration').value)||1;if(dur<1)dur=1;var t=price*dur,i=Math.round(t*0.8);document.getElementById(prefix+'-total-display').textContent=fmt(t);document.getElementById(prefix+'-income-display').textContent=fmt(i);document.getElementById(prefix+'-total').value=t;document.getElementById(prefix+'-income').value=i}
var ofPrefix='of';['of-category','of-duration'].forEach(function(id){document.getElementById(id).addEventListener('change',function(){calcTotal(ofPrefix)});document.getElementById(id).addEventListener('input',function(){calcTotal(ofPrefix)})});

document.getElementById('of-screenshots').addEventListener('change',function(){pendingUploadFiles=Array.from(this.files);var p=document.getElementById('of-screenshot-preview');p.innerHTML='';pendingUploadFiles.forEach(function(f,i){var r=new FileReader();r.onload=function(e){var img=document.createElement('img');img.src=e.target.result;img.className='thumb';img.title='截图'+(i+1);img.onclick=function(){window.open(e.target.result)};p.appendChild(img)};r.readAsDataURL(f)})});

function openOrderModal(editMode,order){document.getElementById('of-edit').value=editMode?'1':'';document.getElementById('of-id').value=editMode?order.id:'';populateCatSelect('of-category');document.getElementById('of-cs').value=editMode?order.cs:'';document.getElementById('of-boss').value=editMode?order.boss:'';document.getElementById('of-player').value=editMode?order.player:'';document.getElementById('of-duration').value=editMode?order.duration:'1';document.getElementById('of-note').value=editMode?(order.note||''):'';document.getElementById('of-total-display').textContent='¥0';document.getElementById('of-income-display').textContent='¥0';document.getElementById('of-screenshot-preview').innerHTML='';document.getElementById('of-screenshots').value='';pendingUploadFiles=[];if(editMode){setTimeout(function(){if(order.categoryId)document.getElementById('of-category').value=order.categoryId;calcTotal(ofPrefix)},100);if(order.screenshots&&order.screenshots.length>0){document.getElementById('of-screenshot-preview').innerHTML=order.screenshots.map(function(s,i){return'<img src="'+s+'" class="thumb" onclick="window.open(this.src)" alt="截图'+(i+1)+'" title="已有截图（点击查看）">'}).join('')+''}}document.getElementById('order-modal-title').textContent=editMode?'✏️ 编辑订单':'📦 创建订单';document.getElementById('order-modal').classList.add('show')}

function editOrder(orderId){var o=currentOrders.find(function(x){return x.id===orderId});if(o)openOrderModal(true,o)}
document.getElementById('btn-create-order').addEventListener('click',function(){openOrderModal(false)})

function closeOrderModal(){document.getElementById('order-modal').classList.remove('show')}

document.getElementById('order-form').addEventListener('submit',async function(e){e.preventDefault();var btn=this.querySelector('button[type="submit"]');btn.classList.add('loading');btn.textContent='保存中…';var isEdit=document.getElementById('of-edit').value==='1';var orderId=document.getElementById('of-id').value;var cs=document.getElementById('of-cs').value.trim(),boss=document.getElementById('of-boss').value.trim(),player=document.getElementById('of-player').value.trim();var sel=document.getElementById('of-category'),catId=sel.value,catName=sel.options[sel.selectedIndex]?sel.options[sel.selectedIndex].text.replace(/\(¥\d+\)/,'').trim():'';var dur=parseInt(document.getElementById('of-duration').value)||1,total=parseInt(document.getElementById('of-total').value)||0,income=parseInt(document.getElementById('of-income').value)||0,note=document.getElementById('of-note').value.trim();if(!cs||!boss||!player||!catId){showToast('请填写客服、老板ID、陪玩和品类','error');btn.classList.remove('loading');btn.textContent='确 认';return}if(total<=0){showToast('总计不能为0','error');btn.classList.remove('loading');btn.textContent='确 认';return}
  var ssUrls=[];var existingSS=isEdit?(currentOrders.find(function(x){return x.id===orderId})?.screenshots||[]):[];if(pendingUploadFiles.length>0){var fd=new FormData();pendingUploadFiles.forEach(function(f){fd.append('screenshots',f)});var token=getToken();var ur=await fetch('/api/upload',{method:'POST',headers:{'Authorization':'Bearer '+token},body:fd});var ud=await ur.json();if(ud.ok)ssUrls=ud.urls}
  var allSS=existingSS.concat(ssUrls);var body={cs:cs,boss:boss,player:player,categoryId:catId,categoryName:catName,duration:dur,total:total,income:income,note:note,screenshots:allSS};
  var data;if(isEdit){data=await api('PUT','/api/orders/'+orderId,body)}else{data=await api('POST','/api/orders',body)}
  if(!data.ok){showToast(data.message,'error');btn.classList.remove('loading');btn.textContent='确 认';return}await loadData();closeOrderModal();renderAll();showToast(isEdit?'订单已更新':'订单创建成功','success')});

// ===== CHANGE PASSWORD =====
document.getElementById('btn-change-pw').addEventListener('click',function(){document.getElementById('pw-modal').classList.add('show')})
function closePwModal(){document.getElementById('pw-modal').classList.remove('show');document.getElementById('pw-form').reset()}
document.getElementById('pw-form').addEventListener('submit',async function(e){e.preventDefault();var o=document.getElementById('pw-old').value,n=document.getElementById('pw-new').value,c=document.getElementById('pw-confirm').value;document.getElementById('pw-error').classList.remove('show');if(!o||!n||n.length<6){document.getElementById('pw-error').textContent='新密码至少6位';document.getElementById('pw-error').classList.add('show');return}if(n!==c){document.getElementById('pw-error').textContent='两次密码不一致';document.getElementById('pw-error').classList.add('show');return}
  var data=await api('PUT','/api/me/password',{oldPassword:o,newPassword:n});if(!data.ok){document.getElementById('pw-error').textContent=data.message;document.getElementById('pw-error').classList.add('show');return}
  showToast('密码已修改，请重新登录','success');setTimeout(function(){clearToken();showAuth()},1000)});

// ===== EDIT PROFILE =====
document.getElementById('btn-edit-profile').addEventListener('click',function(){if(!currentUser)return;document.getElementById('pf-name').value=currentUser.name||'';document.getElementById('pf-phone').value=currentUser.phone||'';document.getElementById('pf-location').value=currentUser.location||'';document.getElementById('pf-skills').value=(currentUser.skills||[]).join(',');document.getElementById('profile-modal').classList.add('show')})
function closeProfileModal(){document.getElementById('profile-modal').classList.remove('show')}
document.getElementById('profile-form').addEventListener('submit',async function(e){e.preventDefault();var name=document.getElementById('pf-name').value.trim(),phone=document.getElementById('pf-phone').value.trim(),location=document.getElementById('pf-location').value.trim(),skills=document.getElementById('pf-skills').value.split(',').map(function(s){return s.trim()}).filter(Boolean);var data=await api('PUT','/api/me',{name:name,phone:phone,location:location,skills:skills});if(!data.ok){showToast(data.message,'error');return}currentUser=data.user;showApp();closeProfileModal();showToast('资料已更新','success')});

// ===== LEADERBOARD =====
function renderLeaderboard(){var users=allUsers.length>0?allUsers:(currentUser?[currentUser]:[]);var list=users.filter(function(u){return!u.isAdmin});if(list.length===0){document.getElementById('rank-by-count').innerHTML='<div class="empty"><p>暂无数据</p></div>';document.getElementById('rank-by-revenue').innerHTML='<div class="empty"><p>暂无数据</p></div>';return}
  var bc=list.slice().sort(function(a,b){return(b._orderCount||0)-(a._orderCount||0)}),br=list.slice().sort(function(a,b){return(b._totalRevenue||0)-(a._totalRevenue||0)});function rc(i){return i===0?'gold':i===1?'silver':i===2?'bronze':'normal'}
  function rl(ll,fn,lb){return'<ul class="rank-list">'+ll.map(function(m,i){return'<li class="rank-item"><div class="rank-num '+rc(i)+'">'+(i+1)+'</div><div class="rank-avatar" style="background:'+m.color+'">'+m.avatar+'</div><div class="rank-info"><div class="rank-name">'+m.name+'</div><div class="rank-sub">'+(m.skills?m.skills[0]:'自由职业者')+'</div></div><div><div class="rank-value">'+fn(m)+'</div><div class="rank-label">'+lb+'</div></div></li>'}).join('')+'</ul>'}
  document.getElementById('rank-by-count').innerHTML=rl(bc,function(m){return m._orderCount||0},'单');document.getElementById('rank-by-revenue').innerHTML=rl(br,function(m){return fmt(m._totalRevenue||0)},'总收入')}

// ===== PROFILE =====
function renderProfile(){var u=currentUser;if(!u)return;var c=currentOrders.filter(function(o){return o.status==='completed'}).length,r=currentOrders.filter(function(o){return o.status==='completed'}).reduce(function(s,o){return s+(o.total||0)},0);document.getElementById('profile-stats').innerHTML='<div class="profile-stat"><div class="val">'+currentOrders.length+'</div><div class="lbl">总接单数</div></div><div class="profile-stat"><div class="val">'+fmt(r)+'</div><div class="lbl">总收入</div></div><div class="profile-stat"><div class="val">'+(currentOrders.length>0?Math.round(c/currentOrders.length*100):0)+'%</div><div class="lbl">完成率</div></div>';document.getElementById('profile-skills').innerHTML=(u.skills&&u.skills.length>0?u.skills:['Web开发']).map(function(s){return'<span style="display:inline-block;padding:6px 14px;background:var(--primary-light);color:var(--primary);border-radius:20px;font-size:13px;font-weight:500;margin:0 8px 8px 0">'+s+'</span>'}).join('')}

// ===== ADMIN =====
function renderAdminUsers(){var users=allUsers;document.getElementById('admin-user-count').textContent=users.length;if(users.length===0){document.getElementById('admin-users-list').innerHTML='<div class="empty"><p>暂无用户</p></div>';return}
  document.getElementById('admin-users-list').innerHTML='<div class="user-card-grid">'+users.map(function(u){return'<div class="user-detail-card"><div class="ud-header"><div class="ud-avatar" style="background:'+u.color+'">'+u.avatar+'</div><div><div style="font-weight:600;font-size:15px;">'+u.name+' <span class="badge '+(u.isAdmin?'admin':'user')+'">'+(u.isAdmin?'管理员':'用户')+'</span></div><div style="font-size:12px;color:var(--text-secondary)">'+u.email+'</div></div></div><div class="ud-stats"><div class="ud-stat"><div class="val">'+(u._orderCount||0)+'</div><div class="lbl">总订单</div></div><div class="ud-stat"><div class="val">'+(u._completedCount||0)+'</div><div class="lbl">已确认</div></div><div class="ud-stat"><div class="val">'+(u._pendingConfirmCount||0)+'</div><div class="lbl">待确认</div></div><div class="ud-stat"><div class="val">'+fmt(u._totalRevenue||0)+'</div><div class="lbl">累计收入</div></div></div><div class="ud-meta">📧 '+u.email+'<br>📱 '+(u.phone||'未设置')+'<br>📍 '+(u.location||'未设置')+'<br>🕐 '+(u.createdAt?u.createdAt.slice(0,10):'未知')+'</div></div>'}).join('')+'</div>'}

function renderAdminOrders(userFilter){userFilter=userFilter||'all';var ao=currentOrders.slice();if(userFilter!=='all')ao=ao.filter(function(o){return o.userEmail===userFilter});ao.sort(function(a,b){return b.date.localeCompare(a.date)});if(ao.length===0){document.getElementById('admin-orders-table').innerHTML='<div class="empty"><p>暂无订单</p></div>';return}
  document.getElementById('admin-orders-table').innerHTML='<table><thead><tr><th>订单号</th><th>用户</th><th>客服</th><th>老板ID</th><th>陪玩</th><th>品类</th><th>总计</th><th>收入</th><th>状态</th><th>操作</th></tr></thead><tbody>'+ao.map(function(o){return'<tr><td style="font-weight:600;color:var(--primary);cursor:pointer" onclick="viewOrderDetail(\''+o.id+'\')">'+o.id+'</td><td>'+o.userName+'</td><td>'+o.cs+'</td><td>'+o.boss+'</td><td>'+o.player+'</td><td>'+o.categoryName+'</td><td>'+fmt(o.total||0)+'</td><td style="color:var(--success);font-weight:600">'+fmt(o.income||0)+'</td><td><span class="badge '+o.status+'">'+(statusText[o.status]||o.status)+'</span></td><td>'+(o.status==='pending-confirm'?'<button class="btn btn-sm btn-primary" onclick="adminConfirmOrder(\''+o.id+'\')">✅ 确认完成</button>':'<button class="btn btn-sm btn-outline" onclick="viewOrderDetail(\''+o.id+'\')">查看</button>')+'</td></tr>'}).join('')+'</tbody></table>'}

function renderAdminOverview(){var s=calcStats(currentOrders);var ul=allUsers.length;
  document.getElementById('admin-overview-stats').innerHTML='<div class="stat-card"><div class="stat-icon" style="background:#eef1fe;color:#4f6ef7">👥</div><div class="stat-label">注册用户</div><div class="stat-value">'+ul+'</div></div><div class="stat-card"><div class="stat-icon" style="background:#ecfdf5;color:#22c55e">📦</div><div class="stat-label">全部订单</div><div class="stat-value">'+s.total+'</div><div class="stat-change">已完成 '+s.completed+' · 待确认 '+s.pendingConfirm+'</div></div><div class="stat-card"><div class="stat-icon" style="background:#fffbeb;color:#f59e0b">💰</div><div class="stat-label">已完成收入</div><div class="stat-value">'+fmt(s.revenue)+'</div></div><div class="stat-card"><div class="stat-icon" style="background:#fef2f2;color:#ef4444">📈</div><div class="stat-label">平均单值</div><div class="stat-value">'+fmt(s.completed>0?Math.round(s.revenue/s.completed):0)+'</div></div>';
  var ur=allUsers.filter(function(u){return!u.isAdmin}).map(function(u){return{name:u.name,rev:u._totalRevenue||0,color:u.color}}).sort(function(a,b){return b.rev-a.rev});var mr=Math.max.apply(Math,ur.map(function(u){return u.rev}).concat([1]));document.getElementById('admin-revenue-chart').innerHTML=ur.length>0?ur.map(function(u){var p=Math.round(u.rev/mr*100);return'<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><div style="width:80px;font-size:13px;font-weight:500;text-align:right;">'+u.name+'</div><div style="flex:1;background:var(--bg);border-radius:6px;height:24px;overflow:hidden;"><div style="height:100%;width:'+p+'%;background:'+u.color+';border-radius:6px;display:flex;align-items:center;padding-left:10px;font-size:11px;color:#fff;font-weight:600;">'+fmt(u.rev)+'</div></div></div>'}).join(''):'<div class="empty"><p>暂无数据</p></div>';
  function sp(st){var c=currentOrders.filter(function(o){return o.status===st}).length;return s.total>0?Math.round(c/s.total*100):0}var sts=[{k:'pending-confirm',l:'待确认',cl:'#b45309',bg:'#fef3c7'},{k:'completed',l:'已完成',cl:'var(--success)',bg:'var(--success-light)'},{k:'in-progress',l:'进行中',cl:'var(--primary)',bg:'var(--primary-light)'},{k:'pending',l:'待处理',cl:'var(--warning)',bg:'var(--warning-light)'},{k:'cancelled',l:'已取消',cl:'var(--danger)',bg:'var(--danger-light)'}];document.getElementById('admin-status-chart').innerHTML='<div style="display:flex;gap:12px;flex-wrap:wrap;">'+sts.map(function(st){return'<div style="flex:1;min-width:90px;text-align:center;padding:16px;background:'+st.bg+';border-radius:var(--radius);"><div style="font-size:24px;font-weight:700;color:'+st.cl+';">'+sp(st.k)+'%</div><div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">'+st.l+'</div></div>'}).join('')+'</div>'}

// ===== CATEGORY MANAGEMENT =====
function renderCategoryList(){var list=document.getElementById('category-list');list.innerHTML=CATEGORIES.map(function(c,i){return'<div class="category-row"><span class="name">'+c.name+'</span><span class="price">¥'+c.price+'</span><button class="btn btn-xs btn-outline" onclick="editCategory('+i+')">✏️</button><button class="btn btn-xs btn-danger" onclick="deleteCategory('+i+')">✕</button></div>'}).join('')}
function editCategory(i){var c=CATEGORIES[i];var nn=prompt('品类名称',c.name);if(nn===null)return;var np=prompt('价格',c.price);if(np===null)return;np=parseInt(np)||0;CATEGORIES[i]={id:c.id,name:nn.trim(),price:np};saveCategories();renderCategoryList();populateCatSelect('of-category')}
function deleteCategory(i){if(!confirm('删除品类 "'+CATEGORIES[i].name+'"? 已有订单不受影响。'))return;CATEGORIES.splice(i,1);saveCategories();renderCategoryList();populateCatSelect('of-category')}
function saveCategories(){localStorage.setItem(CATEGORIES_KEY,JSON.stringify(CATEGORIES))}
document.getElementById('category-add-form').addEventListener('submit',function(e){e.preventDefault();var n=document.getElementById('cat-name').value.trim(),p=parseInt(document.getElementById('cat-price').value)||0;if(!n)return;CATEGORIES.push({id:'cat_'+Date.now(),name:n,price:p});saveCategories();renderCategoryList();populateCatSelect('of-category');document.getElementById('cat-name').value='';document.getElementById('cat-price').value=''})
document.getElementById('btn-manage-categories').addEventListener('click',function(){renderCategoryList();document.getElementById('category-modal').classList.add('show')})
function closeCategoryModal(){document.getElementById('category-modal').classList.remove('show')}

// ===== NAVIGATION (event delegation) =====
document.getElementById('sidebar-nav').addEventListener('click',function(e){var link=e.target.closest('a[data-page]');if(!link)return;e.preventDefault();var page=link.dataset.page;document.querySelectorAll('#sidebar-nav a[data-page]').forEach(function(a){a.classList.remove('active')});link.classList.add('active');document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active')});var t=document.getElementById('page-'+page);if(t)t.classList.add('active');document.querySelector('.sidebar').classList.remove('open');if(page==='orders')renderOrdersTable();if(page==='admin-orders'&&currentUser&&currentUser.isAdmin){renderAdminOrders();var s=document.getElementById('admin-order-user-filter');s.innerHTML='<option value="all">所有用户</option>'+allUsers.map(function(u){return'<option value="'+u.email+'">'+u.name+'</option>'}).join('')}if(page==='admin-overview'&&currentUser&&currentUser.isAdmin)renderAdminOverview();if(page==='admin-users'&&currentUser&&currentUser.isAdmin)renderAdminUsers()});
document.addEventListener('click',function(e){var btn=e.target.closest('[data-page]');if(!btn||btn.closest('#sidebar-nav'))return;var page=btn.dataset.page;if(!page)return;e.preventDefault();document.querySelectorAll('#sidebar-nav a[data-page]').forEach(function(a){a.classList.remove('active')});var nl=document.querySelector('#sidebar-nav a[data-page="'+page+'"]');if(nl)nl.classList.add('active');document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active')});var t=document.getElementById('page-'+page);if(t)t.classList.add('active');if(page==='orders')renderOrdersTable()});
document.querySelector('.logout-btn').addEventListener('click',function(e){e.preventDefault();clearToken();showAuth();showToast('已安全退出','info')});

// ===== FILTERS =====
document.addEventListener('input',function(e){if(e.target.id==='order-search'){ordersPage=1;renderOrdersTable()}});document.addEventListener('click',function(e){if(e.target.classList.contains('filter-tab')){document.querySelectorAll('#order-filters .filter-tab').forEach(function(t){t.classList.remove('active')});e.target.classList.add('active');orderFilter=e.target.dataset.filter;ordersPage=1;renderOrdersTable()}});document.addEventListener('change',function(e){if(e.target.id==='admin-order-user-filter')renderAdminOrders(e.target.value)});

// ===== MODALS =====
document.querySelectorAll('.modal-overlay').forEach(function(ov){ov.addEventListener('click',function(e){if(e.target===this)this.classList.remove('show')})});

// ===== UPTIME PING =====
setInterval(function(){if(getToken())fetch('/api/ping').catch(function(){})},4*60*1000);fetch('/api/ping').catch(function(){});

// ===== INIT =====
(function init(){setTheme(getTheme());document.getElementById('theme-toggle').addEventListener('click',toggleTheme);var token=getToken();if(!token)return showAuth();api('GET','/api/me').then(async function(data){if(!data.ok){clearToken();showAuth();return}currentUser=data.user;await loadData();showApp()})})();
</script>
</body>
</html>
