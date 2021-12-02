'use strict';

function getEl( a ){

  let elementHtml = document.querySelector( a )
  return elementHtml;
 
}

const btnEl = getEl(".ul");
console.log (btnEl);