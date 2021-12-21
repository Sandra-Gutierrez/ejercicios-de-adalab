'use strict';

// Página con 3 imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
// Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
// Haz lo mismo para París y Nueva York


const optionSelect = document.querySelector('.js-select');
const imgCity1 = document.querySelector('.js-imgCity1');
const imgCity2 = document.querySelector('.js-imgCity2');
const imgCity3 = document.querySelector('.js-imgCity3');

function selectCity(){
  const citySelect = optionSelect.value;
  console.log(citySelect);
  return citySelect;
}

function renderImg( city ){
  if( city === 'madrid'){
    imgCity1.src = "./img/madrid1.jpg";
    imgCity2.src = "./img/madrid2.jpg";
    imgCity3.src = "./img/madrid3.jpg";
  }else if( city === 'paris'){
    imgCity1.src = "./img/paris1.jpg";
    imgCity2.src = "./img/paris2.jpg";
    imgCity3.src = "./img/paris3.jpg";
  }else if( city === 'nueva york'){
    imgCity1.src = "./img/ny1.jpg";
    imgCity2.src = "./img/ny2.jpg";
    imgCity3.src = "./img/ny3.jpg";
  }
}

function handlerClickSelect(){
  
  const city = selectCity();
  renderImg(city);
  
}

optionSelect.addEventListener('click', handlerClickSelect)