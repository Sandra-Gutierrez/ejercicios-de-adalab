'use strict';

function getEl( a ){

  let elementHtml = document.querySelector( a )
  if (elementHtml === null){
    console.error (`No existe ningún elemento con clase, id o tag llamado ${a} `);
  } else{
    return elementHtml;
  }
 
}

const btnEl = getEl(".u");
console.log (btnEl);