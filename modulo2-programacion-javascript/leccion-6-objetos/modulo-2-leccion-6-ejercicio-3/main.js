'use strict';

const adalaber1 = {
  nombre: 'Susana',
  age: 34,
  job: 'periodista',
  run: () => console.log('Estoy corriendo'),
  runAMarathon: distance => console.log(`Estoy corriendo un maratón de ${distance} kilómetros.`),
  showBio: function(){
    console.log(`Mi nombre es ${this.nombre}, tengo ${this.age} años y soy ${this.job}`);
  } 
};

const adalaber2 = {
  nombre: 'Rocio',
  age: 25,
  job: 'actriz',
  run: () => console.log('Estoy corriendo'),
  runAMarathon: distance => console.log(`Estoy corriendo un maratón de ${distance} kilómetros.`),
  showBio: function(){
    console.log(`Mi nombre es ${this.nombre}, tengo ${this.age} años y soy ${this.job}`);
  } 
};

adalaber1.run();
adalaber1.runAMarathon(50);
adalaber1.showBio();
adalaber2.showBio();