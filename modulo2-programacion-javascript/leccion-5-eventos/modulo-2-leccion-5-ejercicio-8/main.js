'use strict';

// Elemento de HTML
const buttonHello = document.querySelector('.js-buttonHello');
const buttonBye = document.querySelector('.js-buttonBye');

function changeColor(event){

  const selectedButton = event.currentTarget;
  selectedButton.classList.toggle("buttonPurple")

}

buttonHello.addEventListener('click', changeColor);
buttonBye.addEventListener('click', changeColor);