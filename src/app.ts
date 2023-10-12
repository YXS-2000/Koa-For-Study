const Koa = require('koa');
const routers = require('./router');
const scheduleJobs = require('./schedule');

const app = new Koa();

scheduleJobs();
app.use(routers.routes());
app.use(routers.allowedMethods());

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
