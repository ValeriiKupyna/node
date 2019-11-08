const request = require('request');

const url = 'https://api.darksky.net/forecast/53cb0db2ce34785491e84bb83fbfee4c/37.8267,-122.4233';

request({
  url,
  json: true
}, (error, response) => {

  console.log(response.body.currently);
});