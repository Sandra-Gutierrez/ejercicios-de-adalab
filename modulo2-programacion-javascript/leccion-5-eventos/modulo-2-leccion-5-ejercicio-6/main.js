'use strict';

// Elemento de HTML
const inputName = document.querySelector('.js-inputName');
const textArea = document.querySelector('.js-textArea');

// Sin usar currentTarget, es inmediato.

/* function writeLetter(event){
   const letter = event.key;
   textArea.innerHTML += letter;
}

inputName.addEventListener('keydown', writeLetter); */

// Usando currentTarget, no es inmediato.

function writeLetter(event){

   const inputValue = event.currentTarget.value;
   textArea.innerHTML = inputValue;

}

inputName.addEventListener('keydown', writeLetter);