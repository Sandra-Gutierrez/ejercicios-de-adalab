'use strict';

// Lista de tareas

const taskList = document.querySelector('.js-ulList');
const numTasks = document.querySelector('.js-numTask');
const checkbox = document.querySelectorAll('.js-checkbox');
const tasks = [
  { 
    name: 'Recoger setas en el campo', 
    completed: true 
  },
  { 
    name: 'Comprar pilas', 
    completed: true 
  },
  { 
    name: 'Poner una lavadora de blancos', 
    completed: true 
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

// 1. Mostrar una frase que indique cuántas tareas hay.
numTasks.innerHTML = tasks.length;

// 2. Pintar todas las tareas en pantalla.
// 3. Tachar las ya realizadas.
for( let i = 0 ; i < tasks.length ; i++ ){
  
  if(tasks[i].completed === true){
    taskList.innerHTML += 
    `<li class='js-itemList done'>${tasks[i].name}</li>
    <input
      class="js-checkbox"
      id="itemList"
      type="checkbox"
      value=""
      name=""
      checked
    />`;
  }else if(tasks[i].completed === false){
    taskList.innerHTML += 
    `<li class='js-itemList'>${tasks[i].name}</li>    
    <input
      class="js-checkbox"
      id="itemList"
      type="checkbox"
      value=""
      name=""
    />`;
  }

}


// 4. Permitir marcar una tarea como 'completa' o 'incompleta'.
