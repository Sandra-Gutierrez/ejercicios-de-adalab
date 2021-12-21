'use strict';

// Listado de contraseñas (PIN de 4 números) de los usuarios
// Solo puedan entrar los que han elegido una contraseña que es un número par ( num % 2 = 0 )

const pins = [2389, 2384, 2837, 5232, 8998];

const strongPins = pins.filter(num => num % 2 === 0);
console.log(strongPins);