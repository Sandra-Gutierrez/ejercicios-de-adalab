'use strict';

// Crea un arbol de navidad por consola indicandole la altura

//Creamos una función que realiza dos tareas, que son dos bucles
//El primer bucle general la parte derecha del arbol de navidad
//El segundo bucle genera el lado izquierdo del arbol de navidad

function navTree(height) {

  //seteamos las variables que contendran cada linea del arbol
  let treeRigth = '';
  let treeLeft = '';

  for (let i = 1; i <= height; i++) { //Iteramos con el índice i, una vez por cada unidad de altura que tiene el arbol(heigth)

    /*Primer bucle(r): genera la parte derecha del arbol
    Con cada iteración modificamos el valor de la variable treeRigth*/
    for (let r = 0; r < height; r++) {
      if(r < i){
        treeRigth += '▲';
      }else{
        treeRigth += ' ';
      }
    }

    /*Segundo bucle(l): genera la parte izquierda del arbol
    Con cada iteración modificamos el valor de la variable treeLeft*/
    for (let l = height; l > 0; l--) {
      if(l > i){
        treeLeft += ' ';
      }else{
        treeLeft += '▲';
      }
    }

    //El arbol completo es la concatenación del lado izquierdo con el derecho
    console.log(treeLeft+treeRigth);


    //Finalmente limpiamos las variables de los lados del arbol antes de empezar la siguiente iteración de i
    treeRigth = '';
    treeLeft = '';
  }
}

function addStar(item){
  let star = '';
  for(let i = 1; i <= 1; i++){
    for(let j = 1; j <= item; j++){
      if(j < i){
        star += '';
      }else{
        star += '★';
      }
    }
  }
  console.log(star);
}

function addColumn(item){
  let column = '';
  for(let i = 1; i <= 1; i++){
    for(let j = 1; j <= item; j++){
      if(j < i){
        column += '';
      }else{
        column += '|';
      }
    }
  }
  console.log(column);
}
/* console.log('★'); */
addStar(4);
navTree(5);
addColumn(6);
/* console.log('|'); */

// Falta colocar la estrella y el tronco de forma simetrica ¿? (me explota la cabeza)