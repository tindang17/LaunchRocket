const request = require('request');
const fs = require('fs');

const getLaunches = () => {
  // const missions = {};
  const options = {
    uri: 'https://launchlibrary.net/1.2/launch/2017-10-16',
    json: true
  };
  request
    .get(options)
    .on('error', () => {
      console.log('there is a error while retriving data', err);
    })
    .on('response', (response) => {
      console.log(response.statusCode)
      console.log(response.headers['content-type'])
    }).pipe(fs.createWriteStream('./launchData/launches.json'));
  console.log('Successfully request data from api');
}
module.exports = getLaunches;
