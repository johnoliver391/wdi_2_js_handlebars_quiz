'use strict';

var favorites = (function(){

  var _getFavorites = function(){
    $.getJSON( "lib/db.json").success(function(response){
      _renderFoods(response.foods);
      _renderMovies(response.movies);
      _renderSongs(response.songs);
    });
  };

  var _renderFoods = function(foods){
    var template = Handlebars.compile($('#food-template').html());
    $('#foods').html(template({
      foods: foods
    }));
  };

  var _renderMovies = function(movies){
    // your code starts here
    console.log(movies);
  var template = Handlebars.compile($('#movies-index').html());
  $('#movies').html(template({
    movies: movies
  });
    $('#content').html(result);

    // your code ends here
  };

  var _renderSongs = function(songs){
    // your code starts here
    console.log(songs);
  var template = Handlebars.compile($('#songs-index').html());
  $('#songs').html(template({
    songs: songs
  }));
    $('#content').html(result);
    // your code ends here
  };

  var init = function(){
    _getFavorites();
  };

  return {
    init: init
  };

})();

$(document).ready(function(){
  favorites.init();
});
