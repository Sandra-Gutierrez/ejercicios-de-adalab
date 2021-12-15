'use strict';

// Función get100Numbers devuelve array con números del 1 al 100
// usaremos un bucle y el método push

const arrNum = [];

function get100Numbers(){
  for( let i = 1 ; i <= 100 ; i++){
    arrNum.push(i);
  }
  return arrNum;
}
console.log(get100Numbers());

// Función getReversed100Numbers que llama a la función get100Numbers y los cambia de orden.

function getReversed100Numbers(){
  arrNum.reverse();
  for( const num of arrNum){
    console.log(num);
  }
  return arrNum;
}

console.log(getReversed100Numbers());