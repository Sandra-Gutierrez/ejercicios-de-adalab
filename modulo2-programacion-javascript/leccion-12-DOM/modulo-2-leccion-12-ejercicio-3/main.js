'use strict';

// Formulario con tres campos: Nombre, Apellidos, Teléfono
// Array de 3 objetos con esa estructura.
// Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre. 
// Al seleccionarlo se rellenará el formulario automáticamente.

const users = [
  {
    name: 'Sandra',
    surname: 'Gutierrez',
    tel: 628930908
  },
  {
    name: 'Jairo',
    surname: 'Albán',
    tel: 646578798
  },
  {
    name: 'Mariana',
    surname: 'Viana',
    tel: 769834210
  }
]

const select = document.querySelector('.js-selectName');
const inputApellido = document.querySelector('.js-inputSurname');
const inputTel = document.querySelector('.js-inputTel');

for( let i = 0; i < users.length ; i++ ){
  console.log(users[i].name);
  let tagOption = document.createElement('option');
  let newContent = document.createTextNode(users[i].name);
  tagOption.appendChild(newContent);
  select.appendChild(tagOption);
}

function handlerClickName(event){
  let optionActual = event.currentTarget.value;
  for( let i = 0; i < users.length ; i++ ){
    if(users[i].name === optionActual){
      inputApellido.value = users[i].surname;
      inputTel.value = users[i].tel;
    }
  }
}

select.addEventListener('change', handlerClickName);