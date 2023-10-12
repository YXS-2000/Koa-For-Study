const schedule = require('node-schedule');
const weatherScheduleJob = require('./weatherSchedule');

const scheduleJob = () => {

  schedule.scheduleJob('0 0 8 * * ?', () => {
    // console.log('scheduleCronstyle:' + new Date());
    weatherScheduleJob();
  });
};
module.exports = scheduleJob;