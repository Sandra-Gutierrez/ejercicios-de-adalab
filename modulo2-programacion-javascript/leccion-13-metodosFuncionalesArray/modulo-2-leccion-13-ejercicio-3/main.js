'use strict';

// Saludar al usuario por su nombre, ej. 'Bienvenida Yolanda'
// Agradecer a nuestros usuarios premium, ej. 'Bienvenida Yolanda. Gracias por confiar en nosotros.'
// Array con los usuarios que incluye nombre y si son usuarios premium o no.
// Crear un nuevo array con los saludos. 

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];

function addWelcome(user) {
  let welcome = '';
  if(user.isPremium){
    welcome = `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;
  }else{
    welcome = `Bienvenida ${user.name}`;
  }
  return welcome;
}

const allWelcome = users.map(addWelcome);
console.log(allWelcome);