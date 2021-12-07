'use strict';

function getEl( a ){

  let elementHtml = document.querySelector( a )
  return elementHtml;
 
}

const btnEl = getEl(".btn1");
console.log (btnEl);