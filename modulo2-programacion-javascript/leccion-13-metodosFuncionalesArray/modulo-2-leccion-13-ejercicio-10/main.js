'use strict';

// a) Incidencia asociada al PIN 5232. 
// Encontrar a su usuario correspondiente.
// Usa el método find.

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];
console.log(users);

const userIncidence = users.find( user => user.pin === 5232);
console.log(userIncidence);

// b) El usuario se ha dado de baja por la incidencia
// Borrarlo del array de usuarios
// Usa el método findIndex para encontrar su posición y bórralo usando splice.

const indexIncidence = users.findIndex( user => user.pin === 5232);
console.log(indexIncidence);
users.splice(indexIncidence, 1);
console.log(users);