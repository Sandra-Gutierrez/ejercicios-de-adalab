'use strict';

// Elemento de HTML
const body = document.querySelector('.js-body');

// Listener sobre el elemento, con tipo de evento y handler

function changeColor(event){

   console.log(event.key);
   const letter = event.key;

   if (letter === "r"){
    body.classList.remove('colorMorado');
    body.classList.add('colorRed');
   } else if (letter === "m"){
    body.classList.remove('colorRed');
    body.classList.add('colorMorado');
   }else{
    body.classList.remove('colorMorado');
    body.classList.remove('colorRed');
   }
}


window.addEventListener('keydown', changeColor);
