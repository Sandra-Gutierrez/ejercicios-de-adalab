'use strict';

// 1ª Parte del ejercicio

const buttonStart = document.querySelector('.js_start');
const ulFilms = document.querySelector('.js-films');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


function createListFilms(){
  ulFilms.innerHTML = `<li>${inception}</li><li>${theButterFlyEffect}</li><li>${eternalSunshineOfTheSM}</li><li>${blueVelvet}</li><li>${split}</li>`;
  
}

buttonStart.addEventListener('click', createListFilms);

// 2ª Parte del ejercicio
// NO FUNCIONA ->

/* function consoleLogFilm(event){
  console.log(ulFilms.querySelector(event.currentTarget));
}

ulFilms.addEventListener('click', consoleLogFilm) */
