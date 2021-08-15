function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const thankBtn = document.querySelectorAll(".button");
const closeBtn = document.getElementsByClassName('close');
const thankBg = document.querySelector(".bground-thank");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = "none";
}
closeBtn[0].addEventListener('click', closeModal);


// fermer thanks via "fermer"
document.getElementById("button-thank").addEventListener("click", function(closeThank) {
	thankBg.style.display = "none";
	modalBg.style.display = "none";
});
// fermer thanks via croix
document.getElementById("closethanks").addEventListener("click", function(closeThank) {
	thankBg.style.display = "none";
	modalBg.style.display = "none";
});


function showErrorMessage(champForm, formRempli, message) {
	champForm.target.setCustomValidity("");
	if (!champForm.target.validity.valid && champForm.target.value.length == 0) {
			champForm.target.setCustomValidity(message);
	}
};

document.getElementById("inscription").addEventListener("click", function(formRempli) {

	let firstName = document.getElementById("first");
	let lastName = document.getElementById("last");
	let emailValid = document.getElementById("email");
	let birthValid = document.getElementById("birthdate");
	let quantityCity = document.getElementById("quantity");
	let checkBox = document.getElementById("checkbox1");
	
	if (!firstName.value) {
		firstName.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
			console.log(champForm);
		};	
		return false;	
	}
	if (!lastName.value) {
		lastName.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
		};
		return false;	
	} 
	if (!emailValid.value) {
		emailValid.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Entrez une adresse valide. Exemple : contact@nom.com")
		};
		return false;	
	}
	if (!birthValid.value) {
		birthValid.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Vous devez entrer votre date de naissance.")
		};
		return false;	
	}
	if (!quantityCity.value) {
		quantityCity.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Vous devez renseigner ce champ.")
		};
	}
	else {
		thankBtn.forEach((btn) => btn.addEventListener("click", launchThank));
		function launchThank() {
			thankBg.style.display = "block";
			
		  }
		  formRempli.preventDefault();
		}
});
