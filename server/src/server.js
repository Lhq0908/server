const path = require('path');
const Config = require('./config')
// --------------------------------
// |          koa框架             |
// --------------------------------
const Koa = require('koa');
const static = require("koa-static");
const app = new Koa();

// --------------------------------
// |         开启GZIP压缩          |
// --------------------------------
// const compression = require('compression');
// app.use(compression());
// --------------------------------
// |         WEB目录配置           |
// --------------------------------
app.use(static(path.resolve(__dirname, '../../web')));
// --------------------------------
// |          启动服务器           |
// --------------------------------
const server = app.listen(Config.port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('server is runing at ===> http://%s:%s', host, port);
});
