'use strict';

// Sobre el ejercicio 4, añadamos un campo más para el apellido.
// Queremos tener nuestros datos en un objeto. 
// El reto es guardar y recoger del localStorage un objeto con dos propiedades, nombre y apellido.



const input = document.querySelectorAll('.js-input');
const parName = document.querySelector('.js-pName');


function handlerKeyupName(event){


  const currentTarget = event.currentTarget;
  console.log(currentTarget);
  parName.innerHTML = currentTarget.value;

  const userName = parName.innerHTML;
  localStorage.setItem("name", `${userName}`); 
  
  // Guarda en localStorage
  //falta recuperar datos y renderizar al actualizar si los hay
}


for( const itemInput of input){
  itemInput.addEventListener('keyup', handlerKeyupName);
}