'use strict';

// Loguear el tipo datos que hay en un array
// Script que recorra este array y loguee por cada elemento: 
// "El dato VALOR está en la posición X y es de tipo TIPO"

const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron'
  }
];


for (let i = 0; i < items.length; i++) {
  let info = items[i];
  let position = i;
  let value = typeof items[i];
  console.log(`El dato ${info} está en la posición ${position} y es de tipo ${value}`);
}
