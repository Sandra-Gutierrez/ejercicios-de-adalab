'use strict';


const years = document.querySelector('.js-edad');
const yearsInt = parseInt(years.innerHTML);
const days = 365;
const hours = 24;

const totalHours = yearsInt * days * hours;
console.log('He vivido: ' + totalHours);