const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// 使用 body-parser middleware 解析 JSON 请求体
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://gitstars.raye.wiki'
  }));
  
app.post('/api/oauth/access_token', async (req, res) => {
  const code = req.body.code;
  const client_id = req.body.client_id;
  // 从环境变量或其他安全存储中获取 client_secret
  const client_secret = process.env.CLIENT_SECRET;

  try {
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id,
      client_secret,
      code,
    }, {
      headers: {
        'Accept': 'application/json'
      }
    });

    // 发送包含 access_token 的 JSON 数据给客户端
    res.json(response.data);
  } catch (error) {
    console.error(error);
    // 发送错误响应
    res.status(500).send('Error during GitHub OAuth');
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));