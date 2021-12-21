'use strict';

// Array con los usuarios que pueden acceder a la aplicación (PIN par)

const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
  ];

const usersStrongPins = users.filter(num => num.pin % 2 === 0);
console.log(usersStrongPins);