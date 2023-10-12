const Koa = require('koa');
const routers = require('./router');

const app = new Koa();

app.use(routers.routes());
app.use(routers.allowedMethods());

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
