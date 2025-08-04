const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 静态资源托管（HTML 页面）
app.use(express.static(path.join(__dirname, 'public')));

app.post('/check-password', (req, res) => {
  const { password } = req.body;
  res.json({ valid: password === '666' });
});

app.get('/secure-sheet', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="zh">
    <head><meta charset="UTF-8"><title>排行榜</title></head>
    <body style="margin:0;padding:0;">
      <iframe src="https://docs.qq.com/document/DZVpCTkZ0aHVvWEtX?tab=000002"
              style="width:100%; height:100vh; border:none;"></iframe>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ 后端已运行：http://localhost:${PORT}`);
});
