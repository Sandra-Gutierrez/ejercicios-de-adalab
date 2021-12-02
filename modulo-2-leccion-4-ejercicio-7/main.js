'use strict';

// Genera un querySelector y loguea si no existe

function getEl( a ){

  let elementHtml = document.querySelector( a )
  if (elementHtml === null){
    console.error (`No existe ningún elemento con clase, id o tag llamado ${a}` );
  } else{
    return elementHtml.innerHTML;
  }
 
}

const selectorHtml = getEl(".num");
const numHtml = parseInt(selectorHtml);
console.log (numHtml);

// Calcula si un numero es par

function calcularPar(a){
  
  if( a % 2 === 0 ){
    return `El numero ${a} es par`;
  } else{
    return `El numero ${a} es impar`;
  }

}

console.log( calcularPar(numHtml));

