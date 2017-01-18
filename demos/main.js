'use strict';

console.log('Student Profile Page');

let radioBtn = document.getElementById('genderBtn');

radioBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.target.class="btn btn-default active"
    console.log(evt.target);
});
