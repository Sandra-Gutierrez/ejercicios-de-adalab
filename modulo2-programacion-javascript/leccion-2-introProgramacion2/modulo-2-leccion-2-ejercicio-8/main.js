'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';


const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const dogList = document.querySelector('.js-dogList');
const listFirstDog = `
<li class="popup">
  <img src="${firstDogImage}">
  <h2>${firstDogName}</h2>
</li>`;
const listSecondDog = `
<li class="popup">
  <img src="${secondDogImage}">
  <h2>${secondDogName}</h2>
</li>`;
const listThirdDog = `
<li class="popup">
  <img src="${thirdDogImage}">
  <h2>${thirdDogName}</h2>
</li>`;

dogList.innerHTML = listFirstDog;
dogList.innerHTML += listSecondDog;
dogList.innerHTML += listThirdDog;

