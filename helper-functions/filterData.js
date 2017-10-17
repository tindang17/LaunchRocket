const jsonfile = require('jsonfile');
// Take json date and filtered it.
const filterData = (cb) => {
  let obj = jsonfile.readFileSync('./launchData/launches.json', 'utf-8');
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
  // call getLaunches here to constantly update the launch information
  cb();
  return missions;
}

module.exports = filterData;
