'use strict';

function getEl( a ){

  let elementHtml = document.querySelector( a )
  console.log (a);
  if (elementHtml === null){
    console.error (`No existe ningún elemento con clase, id o tag llamado ${a} `);
  } else{
    return elementHtml;
  }
 
}

const btnEl = getEl(".ul");
console.log (btnEl);