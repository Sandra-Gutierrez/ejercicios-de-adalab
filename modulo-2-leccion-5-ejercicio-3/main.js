'use strict';

// elemento de HTML
const text = document.querySelector('.js-text');


// listener sobre el elemento, con tipo de evento y handler

text.addEventListener('mouseover', function addLorem(){
  text.innerHTML += '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum quos deserunt quaerat voluptatum aut, assumenda hic atque, ratione, exercitationem corrupti. Nesciunt assumenda provident culpa qui, tempora consequuntur modi voluptatem.</p>';
});
