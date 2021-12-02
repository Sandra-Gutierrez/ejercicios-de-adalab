'use strict';

const nameAdalaber = "Victoria";
const nameLength = nameAdalaber.length;
const contentNameLength = `El nombre de mi compañera es ${nameAdalaber} y tiene ${nameLength} letras.`;
const nameMain = document.querySelector('.js-name');
nameMain.innerHTML = contentNameLength;