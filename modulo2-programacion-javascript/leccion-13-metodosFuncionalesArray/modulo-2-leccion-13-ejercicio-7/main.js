'use strict';

// Tiempos en este array y nos gustaría conocer la media

const times = [56, 9, 45, 28, 35];

const sumTimes = times.reduce( ( acc , num ) => acc + num );
const mediaTimes = sumTimes / times.length;
console.log(mediaTimes);