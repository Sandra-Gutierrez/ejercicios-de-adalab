'use strict';

function calcularPar(a){
  
  if( a % 2 === 0 ){
    return `El numero ${a} es par`;
  } else{
    return `El numero ${a} es impar`;
  }

}

console.log( calcularPar(20));
