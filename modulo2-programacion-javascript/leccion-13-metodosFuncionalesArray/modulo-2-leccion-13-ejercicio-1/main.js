'use strict';

// Vamos a modificar las notas de todas para añadirles 1 punto
// Mostraremos en la consola las notas modificadas

const marks = [5, 4, 6, 7, 9];

function addPoint(name) {
  const mark = name + 1;
  return mark;
}

const finalMarks = marks.map(addPoint);
console.log(finalMarks);