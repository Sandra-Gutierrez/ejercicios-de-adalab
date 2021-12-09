'use strict';

const button = document.querySelector('.js-button');

function handlerLogClick(event){
  console.log(event);
  // La clave type dentro del event es una propiedad con un valor tipo string
}

button.addEventListener('click', handlerLogClick);
