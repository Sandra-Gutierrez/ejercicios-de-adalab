'use strict';

// Elemento de HTML
const inputName = document.querySelector('.js-inputName');
const textArea = document.querySelector('.js-textArea');

// Usando currentTarget, uso keyup (no keydown) 
// para asegurarme de recoger el valor del imput solo cuando ya este definido

function writeLetter(event){

   const inputValue = event.currentTarget.value;
   textArea.innerHTML = inputValue;

}

inputName.addEventListener('keyup', writeLetter);
