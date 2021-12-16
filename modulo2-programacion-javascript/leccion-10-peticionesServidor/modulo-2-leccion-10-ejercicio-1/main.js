'use strict';

// Vamos a pedir un número entero (integer)

const buttonNum = document.querySelector('.js-num');
const elementNum = document.querySelector('.js-result');

function getNum() {
  fetch("https://api.rand.fun/number/integer")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      elementNum.innerHTML = data.result;
    });
}
buttonNum.addEventListener("click", getNum);

// Añadir parámetros a la URL del tipo clave=valor: NO SE HACERLO