const request = require('request');
const fs = require('fs');
// import raw data from the api
const getLaunches = () => {
  let date = new Date();
  let day = date.getDate();
  let month = (date.getMonth())+1;
  let year = date.getFullYear();
  const options = {
    uri: `https://launchlibrary.net/1.2/launch/${year}-${month}-${day}`,
    json: true
  };
  request
    .get(options)
    .on('error', (err) => {
      console.log('there is a error while retriving data', err);
    })
    .on('response', (response) => {
      console.log(response.statusCode)
      console.log(response.headers['content-type'])
      console.log('Successfully request data from api');
    }).pipe(fs.createWriteStream('./launchData/launches.json'));
}
module.exports = getLaunches;
