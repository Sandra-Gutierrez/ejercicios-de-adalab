'use strict';

// Crea un arbol de navidad por consola indicandole la altura


function navTree(height) {
  for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
      row = row + '▲';
    }
    console.log(row)
  }
}
console.log('★');
navTree(5);
console.log('|');