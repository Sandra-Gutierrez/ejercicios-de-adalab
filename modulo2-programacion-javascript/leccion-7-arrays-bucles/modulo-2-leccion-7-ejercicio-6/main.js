'use strict';

// Script que pregunte sus dos películas/libros favoritos mediante un formulario.
// Al pulsar "enviar" guardaremos la información en un array
// recorreremos el array y logearemos un mensaje por cada obra.

const inputFilm = document.querySelector('.js-inputFilm');
const inputBook = document.querySelector('.js-inputBook');
const buttonSend = document.querySelector('.js-button');

function handlerButtonSend(){

  const favoriteWorks = [ inputFilm.value , inputBook.value ];
  
  for (const works of favoriteWorks) {
    console.log(`A mi tambien me encanto ${works}! Tenemos mucho en común, humana.`);
  }

}

buttonSend.addEventListener('click', handlerButtonSend);