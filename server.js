const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// 默认返回首页
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Home.html'));
});

// 密码校验接口
app.post('/check-password', (req, res) => {
  const { password } = req.body;
  res.json({ valid: password === '666' });
});

// 排行榜内容接口（你可以替换为真实的内容或iframe页）
app.get('/secure-sheet', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'rank.html'));
});

// 启动服务
app.listen(PORT, () => {
  console.log(`✅ 服务器运行中：http://localhost:${PORT}`);
});
