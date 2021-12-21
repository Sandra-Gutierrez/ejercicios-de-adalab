'use strict';

// Caja de texto donde escribimos el nombre de un personaje y un botón, 
// al hacer click, listado con los personajes que coinciden indicando nombre y género.

const inputName = document.querySelector('.js-inputText');
const btnSearch = document.querySelector('.js-btn');
const listCharacters = document.querySelector('.js-ulList');

function handlerClickSearch(){
  const nameCharacter = inputName.value.toLowerCase();
  console.log(nameCharacter);

  // fetch(`https://swapi.py4e.com/api/people/?search=${nameCharacter}`)

  fetch("https://swapi.py4e.com/api/people/") // Solo busca en la primera pag del array, en COUNT te dice el nº de resultados y en NEXT te da la siguiente url en la que buscar
  .then(response => response.json())
  .then(data => {
    const allCharacters = data.results;
    console.log(allCharacters);
    for(let i = 0 ; i < allCharacters.length ; i++ ){
      let nom = allCharacters[i].name;
      let nomItem = nom.toLowerCase();
      if(nomItem.includes(nameCharacter)){
        listCharacters.innerHTML += `<li>Nombre: ${nom}, Género: ${allCharacters[i].gender}</li>`
      }
    }
  })
}

btnSearch.addEventListener('click', handlerClickSearch);
