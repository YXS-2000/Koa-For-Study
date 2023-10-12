const request  = require('request');
type WeatherType = 'observe' | 'forecast_1h' | 'forecast_24h' | 'air';

async function otherWeather(type: WeatherType) {
  const url = `https://wis.qq.com/weather/common?weather_type=${type}&source=pc&province=${encodeURI('广东省')}&city=${encodeURI('广州市')}&county=${encodeURI('天河区')}`
  return new Promise((resolve, reject) => {
    request.get(
      url, 
      (error: any, response: any, body: any) => {
        console.log(error, response.statusCode);
        if (!error && response.statusCode == 200) {
          resolve(body);
        } else {
          reject(error);
        }
    })
  })
};

module.exports = async function Weather(ctx: any) {
  const weatherMap = ['observe', 'forecast_1h', 'forecast_24h', 'air'];
  const { weather_type } = ctx.params;

  if (!weatherMap.includes(weather_type)) {
    ctx.throw(418);
    return;
  }

  try {
    const result: any = await otherWeather(weather_type);
    const params = JSON.parse(result);
    console.log(params);
    ctx.status = params.status;
    ctx.body = params;
  } catch  (error) {
    ctx.status = 500;
    ctx.body = {
      message: 'error',
      data: error
    };
  }
};