'use strict';

// Array con los nombres de los competidores y sus tiempos
// Usa reduce para averiguar quién ha ganado.
// No se como usar reduce para calcular esto

const runners = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 }
  ];

const time = runners.reduce( ( acc , num ) => {
  if( num.time < acc){
    acc = num.time;
  }
  return acc
}, 900); 

const winner = runners.filter( runner => runner.time === time);
console.log(winner);