'use strict';

const yearDog = 3;

if ( yearDog <= 1){
  let years = yearDog * 15;
  console.log("Tu perro tiene " + years)
} else if ( yearDog === 2){
  let years = 15 + 9;
  console.log("Tu perro tiene " + years)
} else {
  let restYears = yearDog - 2;
  let years = 15 + 9 + restYears * 5;
  console.log("Tu perro tiene " + years)
}