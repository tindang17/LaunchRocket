const express = require('express');
const app = express();
const getLaunches = require('./getLaunches');
const fs = require('fs');

let obj = JSON.parse(fs.readFileSync('./launchData/launches.json', 'utf8'));

console.log(obj);
// let obj;
// // Read the file and send it to callback
// fs.readFile('./launchData/launches.json', 'utf8', handleFile);
//
// // Write the callback
// function handleFile (err, data) {
//   console.log('SHOW DATA', data);
//   if(err) throw err;
//   obj = JSON.parse(data);
//   console.log(obj);
// }
// const launches = body.launches;
// launches.forEach((v, i) => {
//   missions[launches[i].id] = {
//     rocketName: launches[i].rocket.name,
//     agencyName: launches[i].rocket.agencies[0].name,
//     launchLocation: launches[i].location.name,
//     launchTime: launches[i].isostart,
//     wikiLinks: {
//         launch: launches[i].wikiURL || 'not available',
//         agency: launches[i].rocket.agencies[0].wikiURL,
//         rocket: launches[i].rocket.wikiURL
//     }
//   }
// });
app.listen(8080, getLaunches);
