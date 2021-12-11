'use strict';

// 3 botones, al pulsar en cualquiera el fondo de la pantalla se pondra rojo,
// si volvemos a pulsar en cualquiera, el fondo se pondrá blanco. Y así sucesivamente. 
// Usaremos querySelectorAll.

const buttonAlarm = document.querySelectorAll('.js-button');
const body = document.querySelector('.js-body');

function handlerClickAlarm(){
  body.classList.toggle('bodyRed');
}

for( let i = 0; i < buttonAlarm.length ; i++){
  buttonAlarm[i].addEventListener('click', handlerClickAlarm);
}

