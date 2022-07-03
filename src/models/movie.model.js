'use strict';
var dbConn = require('./../../config/db.config');

var Movie = function(movie){
    this.title = movie.title;
    this.year = movie.year;
  };

  Movie.findAll = function (result) {
    dbConn.query("Select * from movies", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('movies : ', res);
      result(null, res);
    }
    });
}

module.exports= Movie;