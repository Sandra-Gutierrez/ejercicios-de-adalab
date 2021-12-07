'use strict';

let ingredient = 'Espinacas';

switch (ingredient) {
  case 'Pollo':
    console.log('Tu ingrediente es: ' + ingredient + ". Puedes hacer pollo al horno con limón.");
    break;
  case 'Merluza':
    console.log('Tu ingrediente es: ' + ingredient + ". Puedes hacer merluza en salsa verde.");
    break;
  case 'Espinacas':
    console.log('Tu ingrediente es: ' + ingredient + ". Puedes hacer crema de espinacas.");
    break;
  default:
    console.log('No tienes nada en la nevera, vete al mercadona YA!');
}