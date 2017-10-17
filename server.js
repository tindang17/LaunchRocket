const express = require('express');
const app = express();
const getLaunches = require('./helper-functions/getLaunches');
const filterData = require('./helper-functions/filterData');

app.get('/', (req, res) => {
  res.redirect('/launches').end();
})
// Route for all the launches
app.get('/launches', (req, res) => {
  let data = filterData(getLaunches);
  console.log(data);
  // for (let i in data) {
  //   console.log(data[i]);
  // };
  // const jsonData = JSON.stringify(data);
  res.status(200).json(data).end();
})

app.listen(3001, getLaunches);
