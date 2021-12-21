'use strict';

// Página con 3 imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
// Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
// Haz lo mismo para París y Nueva York

// Crear element img, añadir setAttribute con 2 parametros (src y alt)

const optionSelect = document.querySelector('.js-select');
const divImg = document.querySelector('.js-div');

/* const imgCity1 = document.querySelector('.js-imgCity1');
const imgCity2 = document.querySelector('.js-imgCity2');
const imgCity3 = document.querySelector('.js-imgCity3'); */

function selectCity(){
  const citySelect = optionSelect.value;
  console.log(citySelect);
  return citySelect;
}



function renderImg( city ){

  img.setAttribute('src', ``);
  
  if( city === 'madrid'){
    for(let i = 1 ; i <= 3 ; i++){
      const img = document.createElement('img');
      divImg.appendChild(img);
      img.setAttribute('src', `./img/madrid${i}.jpg`);
    }
  }else if( city === 'paris'){
    for(let i = 1 ; i <= 3 ; i++){
      const img = document.createElement('img');
      divImg.appendChild(img);
      img.setAttribute('src', `./img/paris${i}.jpg`);
    }
  }else if( city === 'nueva york'){
    for(let i = 1 ; i <= 3 ; i++){
      const img = document.createElement('img');
      divImg.appendChild(img);
      img.setAttribute('src', `./img/ny${i}.jpg`);
    }
  }
}

function handlerClickSelect(){
  
  const city = selectCity();
  renderImg(city);
  
}

optionSelect.addEventListener('click', handlerClickSelect)