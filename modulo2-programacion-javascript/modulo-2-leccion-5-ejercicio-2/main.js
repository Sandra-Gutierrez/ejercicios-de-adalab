'use strict';

// elemento de HTML
const inputButton = document.querySelector('.js-button');


// listener sobre el elemento, con tipo de evento y handler

inputButton.addEventListener('click', function hello() { 
  const inputName = document.querySelector('.js-inputName').value;
  console.log (`Hola ${inputName}`) 
}); 
