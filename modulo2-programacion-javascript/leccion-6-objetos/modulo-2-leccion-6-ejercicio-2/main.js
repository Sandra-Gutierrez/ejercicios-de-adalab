'use strict';

const adalaber1 = {
  nombre: 'Susana',
  age: 34,
  job: 'periodista',
  run: () => console.log('Estoy corriendo'),
  runAMarathon: distance => console.log(`Estoy corriendo un maratón de ${distance} kilómetros.`)
};

adalaber1.run();
adalaber1.runAMarathon(50);