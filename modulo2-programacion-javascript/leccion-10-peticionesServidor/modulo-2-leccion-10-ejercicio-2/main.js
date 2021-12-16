'use strict';

// Vamos a pedir fotos de perros de la raza Chihuahua
const btn = document.querySelector(".js-dog");
const img = document.querySelector("img");

function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then(response => response.json())
    .then(data => {
      img.src = data.message;
      img.alt = "Un perro";
      // Imprimo por consola los datos de mi img (el src va cambiando!!!)
      console.log(img);
    });
}

btn.addEventListener("click", getDogImage);
