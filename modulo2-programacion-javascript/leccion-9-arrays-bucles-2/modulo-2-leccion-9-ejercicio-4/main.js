'use strict';

// Lista de tareas

const taskList = document.querySelector('.js-ulList');
const numTasks = document.querySelector('.js-numTask');

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
  },
];

// 1. Mostrar una frase que indique cuántas tareas hay.
numTasks.innerHTML = tasks.length;

// 2. Pintar todas las tareas en pantalla.
// 3. Tachar las ya realizadas.
/* for( let i = 0 ; i < tasks.length ; i++ ){
  
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

}; */

// 4. Permitir marcar una tarea como 'completa' o 'incompleta'.

function render(){
  for( let i = 0 ; i < tasks.length ; i++ ){
    if(tasks[i].completed === true){
      taskList.innerHTML += 
      `<li class='js-itemList done'><input
        class="js-checkbox"
        id="${i}"
        type="checkbox"
        checked/>${tasks[i].name}</li>`;
    }else if(tasks[i].completed === false){
      taskList.innerHTML += 
      `<li class='js-itemList'><input
        class="js-checkbox"
        id="${i}"
        type="checkbox"/>${tasks[i].name}</li>`;
    }
  };
}
render();

const checkbox = document.querySelectorAll('.js-checkbox');

function handlerClickCheckbox(event){

  const itemTask = event.currentTarget.id;
  
  if(tasks[itemTask].completed === true){
    tasks[itemTask].completed = false;
  }else{
    tasks[itemTask].completed = true;
  }

  console.log(tasks)
  render();
}

for(const item of checkbox ){
  item.addEventListener('click', handlerClickCheckbox);
}

