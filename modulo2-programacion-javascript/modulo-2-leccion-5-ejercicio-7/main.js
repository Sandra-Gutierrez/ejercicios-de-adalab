'use strict';

// Elemento de HTML
const button = document.querySelector('.js-button');


function changeColor(){

  button.classList.toggle("buttonPurple")

}

button.addEventListener('click', changeColor);