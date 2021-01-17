const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response) => {
    if (error) {
      callback(error, null);
    } else if (response) {
      let catDescript = JSON.parse(response.body)[0]['description'];
      callback(error, catDescript);
    }
  });
};


module.exports = { fetchBreedDescription };