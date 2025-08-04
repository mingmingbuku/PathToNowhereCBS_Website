const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// 密码验证接口
app.post('/check-password', (req, res) => {
  const { password } = req.body;
  res.json({ valid: password === '666' });
});

// 排行榜 HTML iframe 代理接口（成功验证后前端加载）
app.get('/secure-sheet', (req, res) => {
  const iframeHTML = `
    <iframe src="https://docs.qq.com/document/DZVpCTkZ0aHVvWEtX?tab=000002"
            width="100%" height="600" frameborder="0"></iframe>
  `;
  res.setHeader('Content-Type', 'text/html');
  res.send(iframeHTML);
});

app.listen(PORT, () => {
  console.log(`✅ 后端已运行：http://localhost:${PORT}`);
});
