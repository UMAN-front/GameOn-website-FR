// DOM ELEMENTS MODAL 
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');
// ------ DISPLAY MODAL ------ //
// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = 'block';
}
// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = 'none';
  first.parentElement.setAttribute('data-error-visible', 'false');
  first.style.border = 'solid #279e7a 0rem';
  
  last.parentElement.setAttribute('data-error-visible', 'false');
  last.style.border = 'solid #279e7a 0rem';

  email.parentElement.setAttribute('data-error-visible', 'false');
  email.style.border = 'solid #279e7a 0rem';

  birthdate.parentElement.setAttribute('data-error-visible', 'false');
  birthdate.style.border = 'solid #279e7a 0rem';
  
  quantity.parentElement.setAttribute('data-error-visible', 'false');
  quantity.style.border = 'solid #279e7a 0rem';

  checkbox1.parentElement.setAttribute('data-error-visible', 'false');

  allLocations.setAttribute('data-error-visible', 'false');
}
closeBtn[0].addEventListener('click', closeModal);
rest.forEach((formData) => parentElement.addEventListener('change', reset));

function reset() {
console.log("Bonjour");

}

// ------ DISPLAY NAV RESPONSIVE ------ //
// EDIT NAV
function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}