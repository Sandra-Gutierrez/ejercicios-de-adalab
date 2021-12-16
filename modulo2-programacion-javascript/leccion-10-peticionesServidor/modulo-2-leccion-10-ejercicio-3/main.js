'use strict';

// Vamos a pedir fotos de perros de la raza Chihuahua
const btn = document.querySelector(".js-button");
const inputName = document.querySelector(".js-inputName");
const ulDataList = document.querySelector(".js-ulData");

function handlerClickGetUserData() {
  const nameUser = inputName.value;
  console.log(nameUser);
  fetch(`https://api.github.com/users/${nameUser}`)
    .then(response => response.json())
    .then(data => {
      ulDataList.innerHTML = `
      <li>Nombre de usuario: ${data.login}</li>
      <li>Número de repositorios: ${data.public_repos}</li>
      <img src="${data.avatar_url}" />
      `
      console.log(data);
    });
}

btn.addEventListener("click", handlerClickGetUserData);
