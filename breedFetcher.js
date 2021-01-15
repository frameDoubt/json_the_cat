const request = require('request');

const options = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv.splice(2)}`;

request(options, (error, response, body) => {
  const data = JSON.parse(body);
  if (data[0] == undefined) {
    console.log('nothing found');
  } else {
    console.log(data[0]['description']);
  };
  if (error) throw new Error(error);
});