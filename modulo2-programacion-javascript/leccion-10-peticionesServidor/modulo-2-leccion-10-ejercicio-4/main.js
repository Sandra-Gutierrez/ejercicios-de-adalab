'use strict';

// Vamos a pedir fotos de perros de la raza Chihuahua
const btn = document.querySelector(".js-button");
const inputName = document.querySelector(".js-inputName");
const ulDataList = document.querySelector(".js-ulData");

function handlerClickGetOrgData() {
  const nameOrg = inputName.value;
  console.log(nameOrg);
  fetch(`https://api.github.com/orgs/${nameOrg}`)
    .then(response => response.json())
    .then(orgData => {
      console.log(orgData);
      const repos = orgData.repos_url;
      console.log(repos);
      return fetch(repos);
    })
    .then(reposAdalab => reposAdalab.json())
    .then(repoName => {
      console.log(repoName);
      for(const repo of repoName){
        ulDataList.innerHTML += `<li>${repo.name}</li>`;
      }
    })
}

btn.addEventListener("click", handlerClickGetOrgData);

