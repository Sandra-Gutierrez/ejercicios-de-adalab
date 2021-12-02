'use strict';

const activableSection = document.querySelector('.div');
const title = document.querySelector('.title');
const text = document.querySelector('.text');

activableSection.classList.add("warning");

if (activableSection.classList.contains('success')) {
  title.innerHTML = "AVISO";
  text.innerHTML = "Tenga cuidado";
} else if (activableSection.classList.contains('error')) {
  title.innerHTML = "ERROR";
  text.innerHTML = "Ha surgido un error";
} else if (activableSection.classList.contains('warning')) {
  title.innerHTML = "CORRECTO";
  text.innerHTML = "Los datos son correctos";
}

