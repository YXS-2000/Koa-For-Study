const Router = require('koa-router');
const Init = require('./api/init');
const Weather = require('./api/weather');
const router = new Router();

router.get('/', Init);
router.get('/weather/:weather_type', Weather);

module.exports = router;