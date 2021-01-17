const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response) => {
    if (err) {
      return err;
    } else {
      let catDescript = JSON.parse(response.body)[0]['description'];
      callback(err, catDescript); 
    }
  });
};


module.exports = { fetchBreedDescription };