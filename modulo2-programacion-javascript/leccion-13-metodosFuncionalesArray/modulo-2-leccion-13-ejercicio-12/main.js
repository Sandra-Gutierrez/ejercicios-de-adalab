'use strict';

// Ordenarlos por orden alfabético.
// Ordenarlos por su número de PIN.

const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
  ];

const alfabeticOrder = users.sort();
const pinOrder = users.sort((a, b) => a.pin - b.pin);

console.log(alfabeticOrder);
console.log(pinOrder);