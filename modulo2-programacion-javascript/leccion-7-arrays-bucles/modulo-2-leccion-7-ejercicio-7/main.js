'use strict';

// Crear estructura de datos usando arrays y objetos.

const adalabers = [
  {
    nombre: 'María',
    age: 29,
    job: 'diseñadora',
  },
  {
    nombre: 'Lucía',
    age: 31,
    job: 'ingeniera química',
  },
  {
    nombre: 'Susana',
    age: 34,
    job: 'periodista',
  },
  {
    nombre: 'Rocío',
    age: 25,
    job: 'actriz',
  },
  {
    nombre: 'Inmaculada',
    age: 21,
    job: 'diseñadora',
  },
]


// 1) Función countAdalabers: devuelve el número de adalabers.

function countAdalabers( arrAdalabers ){

  const numAdalabers = arrAdalabers.length;
  return `El número total de adalabers es: ${numAdalabers}`

}
console.log(countAdalabers( adalabers ));


// 2) Función averageAge: devuelve la media de edad.

function averageAge( arrAdalabers ){

  let media = 0;
  let num = 0;

  for (let i = 0; i < arrAdalabers.length; i++) {
    num += arrAdalabers[i].age;
    media = num / arrAdalabers.length;
  }

  return `La media de edad de las adalabers es: ${media} años`
}
console.log(averageAge( adalabers ));


// 3) Función theYoungest: devuelve el nombre de la más joven.

// Utilizando un bucle for:

function theYoungestFor( arrAdalabers ){

  let youngest = arrAdalabers[0].nombre;
  let ageRef = arrAdalabers[0].age;

  for (let i = 0; i < arrAdalabers.length; i++) {
    if(arrAdalabers[i].age < ageRef){
      ageRef = arrAdalabers[i].age;
      youngest = arrAdalabers[i].nombre;
    }
  }

  return `BUCLE FOR - La adalaber mas joven es: ${youngest}.`;
} 

console.log(theYoungestFor( adalabers ));


// Utilizando un bucle for of:

function theYoungestForOf( arrAdalabers ){

  let youngest = arrAdalabers[0].nombre;
  let ageRef = arrAdalabers[0].age;

  for (const student of arrAdalabers) {
    if(student.age < ageRef){
      ageRef = student.age;
      youngest = student.nombre;
    }
  }

  return `BUCLE FOR OF - La adalaber mas joven es: ${youngest}.`;
}

console.log(theYoungestForOf( adalabers ));



// 4) Función countDesigners: devuelve el número de las diseñadoras.

function countDesigners( arrAdalabers ){

  const designers = [];
  let num = 0;

  for (let i = 0; i < arrAdalabers.length; i++) {

    if(arrAdalabers[i].job === 'diseñadora'){
      designers[num] = arrAdalabers[i].nombre;
      num++;
    }
  }

  return `Hay un total de ${designers.length} adalabers diseñadoras.`;
}

console.log(countDesigners( adalabers ));

