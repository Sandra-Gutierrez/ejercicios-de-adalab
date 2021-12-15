'use strict';

// Función get100Numbers devuelve array con números del 1 al 100
// usaremos un bucle y el método push

function get100Numbers(){
  const arrNum = [];
  for( let i = 1 ; i <= 100 ; i++){
    console.log(i);
    arrNum.push(i);
  }
  return arrNum;
}
console.log(get100Numbers());