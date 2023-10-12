const schedule = require('node-schedule');

const scheduleJob = () => {
  
  schedule.scheduleJob('0 0 8 * * *', () => {
    console.log('scheduleCronstyle:' + new Date());
  });
};
module.exports = scheduleJob;