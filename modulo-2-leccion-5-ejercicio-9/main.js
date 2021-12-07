'use strict';

// Elemento de HTML
const isra = document.querySelector('.teacher--isra');
const nasi = document.querySelector('.teacher--nasi');


function selected(event){

  const selectedValue = event.currentTarget.classList.toggle("teacher--selected");
  
  if(selectedValue === true){
    const statusTrue = event.currentTarget.querySelector('.favorite');
    statusTrue.innerHTML = 'Quitar';
  } else{
    const statusFalse = event.currentTarget.querySelector('.favorite');
    statusFalse.innerHTML = 'Añadir';
  }

}

isra.addEventListener('click', selected);
nasi.addEventListener('click', selected);