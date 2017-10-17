const express = require('express');
const app = express();
const getLaunches = require('./helper-functions/getLaunches');
const fs = require('fs');

let obj = JSON.parse(fs.readFileSync('./launchData/launches.json', 'utf8'));
const filteredData = (obj) => {
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
  console.log(missions);
  return missions;
}

app.get('/', (req, res) => {
  filteredData(obj);
  res.status(200).send('done');

})

app.listen(8080, getLaunches);
