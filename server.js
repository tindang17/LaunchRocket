const express = require('express');
const app = express();
const getLaunches = require('./helper-functions/getLaunches');
const fs = require('fs');
const jsonfile = require('jsonfile');


// syncrhonous way

const filteredData = (cb) => {
  let obj = jsonfile.readFileSync('./launchData/launches.json', 'utf-8');
  // asynchronous way
  // let obj = fs.readFile('./launchData/launches.json', 'utf8', (err, data) => {
  //   if (err) throw err;
  //   return JSON.parse(data);
  // });
  let missions = {};
  const launches = obj.launches
  launches.forEach((v, i) => {
    missions[launches[i].id] = {
      rocketName: launches[i].rocket.name,
      agencyName: launches[i].rocket.agencies[0].name,
      launchLocation: launches[i].location.name,
      launchTime: launches[i].isostart,
      wikiLinks: {
        launch: launches[i].wikiURL || 'not available',
        agency: launches[i].rocket.agencies[0].wikiURL,
        rocket: launches[i].rocket.wikiURL
      }
    }
  });
  cb();
  return missions;
}

app.get('/launches', (req, res) => {
  let data = filteredData(getLaunches);
  console.log(data);
  // for (let i in data) {
  //   console.log(data[i]);
  // };
  // const jsonData = JSON.stringify(data);
  res.status(200).json(data).end();
})

app.listen(3001, getLaunches);
