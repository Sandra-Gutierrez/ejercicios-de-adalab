'use strict';

// Vamos a pedir un numero aleatorio
// Raza aleatoria
const buttonNum = document.querySelector('.js-num');
const resultText = document.querySelector('.js-result');
const img = document.querySelector("img");

function getDogImage() {
  let randomNum = 0;
  let nameRaza = '';
  fetch("https://api.rand.fun/number/integer?max=95/")
    .then(response => response.json())
    .then( data => {
      randomNum = data.result; 
      console.log(randomNum);
      return randomNum;
    })
    fetch("https://dog.ceo/api/breeds/list")
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      console.log(data.message[randomNum]);
      resultText.innerHTML = data.message[randomNum];
      nameRaza = data.message[randomNum];
      return fetch('https://dog.ceo/api/breed/' + nameRaza + '/images/random')
    })
    .then(response => response.json())
    .then(data => {
      img.src = data.message;
    })
}
buttonNum.addEventListener("click", getDogImage);








