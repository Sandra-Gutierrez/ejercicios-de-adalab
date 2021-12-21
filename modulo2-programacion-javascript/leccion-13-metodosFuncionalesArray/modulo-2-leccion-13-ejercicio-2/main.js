'use strict';

// Saludar al usuario por su nombre
// Tenemos un array con el listado de usuarios
// Queremos otro array con los saludos, ej. 'Bienvenida Yolanda'

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

function addWelcome(name) {
  const welcome = `Bienvenida ${name}`;
  return welcome;
}

const allWelcome = names.map(addWelcome);
console.log(allWelcome);