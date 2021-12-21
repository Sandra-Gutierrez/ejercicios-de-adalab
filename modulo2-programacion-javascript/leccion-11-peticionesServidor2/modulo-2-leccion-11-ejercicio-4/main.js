'use strict';

// Input de texto para el nombre y un párrafo vacío
// Cuando la usuaria escriba su nombre (keyup) renderizar el valor en el párrafo y guardarlo en localStorage.
// Al recargar la página, consultar localStorage y, si hay algún nombre guardado, rellenar el input y el párrafo.

const inputName = document.querySelector('.js-inputText');
const parName = document.querySelector('.js-pName');


function handlerKeyupName(){
  parName.innerHTML = inputName.value;
  const userName = parName.innerHTML;
  localStorage.setItem("name", `${userName}`); // Guarda en localStorage
  //falta recuperar datos y renderizar al actualizar si los hay
}

inputName.addEventListener('keyup', handlerKeyupName);
