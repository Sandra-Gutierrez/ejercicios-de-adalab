'use strict';

let avocados;
const avocadoPrice = 1.5;
const money = 0;

/* if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
} */

avocados = money >= avocadoPrice ? money / avocadoPrice : 0;
console.log("He comprado " + avocados + " aguacates.");
