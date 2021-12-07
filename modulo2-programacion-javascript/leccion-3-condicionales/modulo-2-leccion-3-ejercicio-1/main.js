'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

const imgAvatar = document.querySelector('.user');
const content = `<img class="user__avatar" src=${userAvatar || DEFAULT_AVATAR}/> `;
imgAvatar.innerHTML += content;

/* // avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

const imgAvatar = document.querySelector('.user__avatar');
const content = `src=${userAvatar}`;
imgAvatar.innerHTML += content; */