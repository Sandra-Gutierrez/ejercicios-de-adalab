'use strict';

// 1ª Parte del ejercicio

const item1 = document.querySelector('.js-item1');
const item2 = document.querySelector('.js-item2');
const item3 = document.querySelector('.js-item3');


function scrollNav(event){
  event.preventDefault();
}

item1.addEventListener('click', scrollNav);
item2.addEventListener('click', scrollNav);
item3.addEventListener('click', scrollNav);
