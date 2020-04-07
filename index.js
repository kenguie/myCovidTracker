const fetch = require("node-fetch");

fetch('https://covidtracking.com/api/v1/states/daily.json')
  .then((response) => {
    return response.json();
  })
  .then((datas) => {
    const stateData = datas.filter((data) => {
      return data.state === 'NY';
    })
    console.log(stateData);
  });