'use strict';

// Función bestLostNomber que devuelve algunos números del array.
const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNomber(){

  // 1. Nuevo array con los números pares de lostNumbers.
  const numPar = [];
  for ( const num of lostNumbers ){
    if( num % 2 === 0 ){
      numPar.push(num)
    }
  }
  console.log(`Son números pares: ${numPar}`);

  // 2. Nuevo array con los números múltiplos de 3 de lostNumbers.
  const numMult3 = [];
  for ( const num of lostNumbers ){
    if( num % 3 === 0 ){
      numMult3.push(num)
    }
  }
  console.log(`Son números múltiplos de 3: ${numMult3}`);

  // 3. Concatenar los 2 arrays (primero los pares y luego los múltiplos de 3).
  const concatNum = numPar.concat(numMult3);
  console.log(`Concateno nº pares y nº múltiplos de 3: ${concatNum}`);
}

bestLostNomber();
