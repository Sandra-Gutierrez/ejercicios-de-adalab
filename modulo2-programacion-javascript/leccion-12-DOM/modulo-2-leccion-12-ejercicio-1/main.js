'use strict';

// Crear una página HTML con una lista ul vacía. 
// const numbers = [1, 2, 3]. 
// Vamos a añadir a la lista tres elementos li, que corresponden al array. 
// Usaremos los métodos avanzados del DOM, no innerHTML.

const ulElement = document.querySelector('.js-ulList');
const numbers = [1, 2, 3];

for( let i = 0 ; i < numbers.length ; i++){
  //creo la etiqueta li
  let newItem = document.createElement('li');
  //creo el contenido
  let item = numbers[i];
  //convertimos la variable item en un nodo
  let newContent = document.createTextNode(item);
  //meto el nodo contenido dentro del nodo li
  newItem.appendChild(newContent);
  //meto el nodo li dentro del nodo ul
  ulElement.appendChild(newItem);
}