'use strict';

// a) Array numbers con 5 números, bucle para calcular la media de los números.
const numbers = [15, 3, 6, 8, 11];
let num = 0;
let media = 0;

// b) Nuevo número al array y repetir el cálculo de la media.
numbers[5] = 5;

/* for (let i = 0; i < numbers.length; i++) {
  num += numbers[i];
  media = num / numbers.length;
}
console.log(`La suma total es: ${num}`);
console.log(`La media total es: ${media}`); */


// c)  Vamos a generalizar el código anterior creando una función average.
function average( array ){
  for (let i = 0; i < array.length; i++) {
    num += array[i];
  }
  media = num / array.length;
  return media;
}
console.log(average(numbers));