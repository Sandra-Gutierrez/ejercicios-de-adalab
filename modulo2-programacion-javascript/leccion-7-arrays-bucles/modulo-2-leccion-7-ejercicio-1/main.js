'use strict';

function workWithMovies(){
  const movies = ['Dune', 'Blade Runner', 'Interestellar'];
  movies[3] = 'Dumbo';
  console.log(movies);
  movies[3] = 'Canino';
  console.log(movies);
  movies[1] = 'La La Land';
  console.log(movies);
}

workWithMovies();