'use strict';
const Movie = require('../models/movie.model');
const fetch = require('node-fetch');

exports.findAll = function(req, res) {
    Movie.findAll(function(err, movie) {
      console.log('controller')
      if (err)
      res.send(err);
      console.log('res', movie);
      res.send(movie);
    });
    };

exports.fetchAll = async function(req, res) {
    const movieObject = await fetchData();
    console.info(movieObject);
    res.send('test')
}

exports.searchByTitle = async function(req, res) {
    const movieObject = await fetchData();
    console.info(req.query.q);
    let found = getTitle(req.query.q)
    console.info(found);
    res.send('test')

    function getTitle(title) {
        return movieObject.filter(
            function(data){ return data.title.includes(title) }
        );
      }
}

async function fetchData() {
    let url = 'https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json'
    let settings = {method: 'Get'}
    const response = await fetch(url, settings)
    const resData = await response.json();
    return resData; 
};


