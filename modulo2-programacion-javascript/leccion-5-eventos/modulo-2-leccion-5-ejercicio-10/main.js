'use strict';

const buttonStart = document.querySelector('.js_start');
const ulFilms = document.querySelector('.js-films');
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


function createListFilms(){

  //Parte 1 del ej: Renderizar lista de peliculas al hacer clic en el boton
  const item1 = `<li class='js-item1'>${inception}</li>`;
  const item2 = `<li class='js-item2'>${theButterFlyEffect}</li>`;
  const item3 = `<li class='js-item3'>${eternalSunshineOfTheSM}</li>`;
  const item4 = `<li class='js-item4'>${blueVelvet}</li>`;
  const item5 = `<li class='js-item5'>${split}</li>`;

  ulFilms.innerHTML = item1 + item2 + item3 + item4 + item5;
  
  //Parte 2 del ej: Imprimir por consola la pelicula al hacer clic sobre ella
  const item1Element = document.querySelector('.js-item1');
  const item2Element = document.querySelector('.js-item2');
  const item3Element = document.querySelector('.js-item3');
  const item4Element = document.querySelector('.js-item4');
  const item5Element = document.querySelector('.js-item5');

  function printFilm(event){
    console.log(event.target.innerHTML);
  }

  item1Element.addEventListener('click', printFilm);
  item2Element.addEventListener('click', printFilm);
  item3Element.addEventListener('click', printFilm);
  item4Element.addEventListener('click', printFilm);
  item5Element.addEventListener('click', printFilm);

}

buttonStart.addEventListener('click', createListFilms);
