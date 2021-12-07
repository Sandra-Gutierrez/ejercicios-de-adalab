'use strict';

// elemento de HTML
const div = document.querySelector('.js-divScroll');


// listener sobre el elemento, con tipo de evento y handler

window.addEventListener('scroll', function addClass(){

  if(window.scrollY < 250){
    div.classList.add('colorPink');
  } else if ( window.scrollY >= 250){
    div.classList.remove('colorPink');
    div.classList.add('colorGreen');
  } else{
    div.classList.remove('colorGreen','colorPink');
  }
  
});
