// 引入 https，querystring 模块
const https = require('https');
const querystring = require('querystring');
// 引入自定义配置文件
const { showapi_appid, showapi_sign } = require('./self.config.js');
// showapi url
const URL = 'https://route.showapi.com/119-42';
// 序列化请求参数
const params = querystring.stringify({
  showapi_appid,
  showapi_sign
});
// 请求 URL
const requestUrl = URL + '?' + params;

// 云函数入口函数
exports.main = async (event, context) => {
  return new Promise((resolve, reject) => {
    const req = https.request(requestUrl, function (res) {
      let resData = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        resData += chunk;
      });
      res.on('end', () => {
        resolve(resData);
      });
    });
    req.end();
  })
}