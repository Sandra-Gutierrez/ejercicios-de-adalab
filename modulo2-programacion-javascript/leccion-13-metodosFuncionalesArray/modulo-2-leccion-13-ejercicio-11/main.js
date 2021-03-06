'use strict';

// Array ordenado para poder tener una clasificación de la carrera
// Usa sort

const runners = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 }
  ];

const newOrder = runners.sort((a, b) => a.time - b.time);

console.log(newOrder);