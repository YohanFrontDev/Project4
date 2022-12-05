// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbgValid = document.querySelector(".bgroundValidate");
const modalEnd = document.getElementsByClassName("close");
const modalBtn = document.querySelectorAll(".modal-btn");
const validModalBtn = document.getElementById("btn-submit");
const formData = document.querySelectorAll(".formData");
const formElement = document.querySelector("form[name=reserve]");
const formIsValid = false;
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const disable = document.querySelectorAll('.disable');
const heroSection = document.getElementsByClassName('hero-section');
const topNavbar = document.getElementById('myTopnav');

var lastnameCtrl = false;
var firstnameCtrl = false;
var emailCtrl = false;
var birthdateCtrl = false;
var quantityCtrl = false;
var cityCtrl = false;
var radioButtonsCtrl = false;
var checkbox1Ctrl = false;

// Permet l'affichage d'un burger ou des boutons natifs
function editNav() {
  if (topNavbar.className === "topnav") {
    topNavbar.className += " responsive";
  } else {
    topNavbar.className = "topnav";
  }
}
// launch modal
function launchModal(topNavbar) {
  if (window.innerWidth >= 800) {
    // topNavbar.classList.add('none');
    // heroSection.classList.add('none');
    modalbg.style.display = "block";
  } else {
    modalbg.style.display = "block";

  }
}

//close modal (cross btn)
function closeModal() {
  modalbg.style.display = "none";
}

// launch second modal 
function launchValidModal(formIsValid) {
  if (formIsValid = true) {
    closeModal();
    modalbgValid.style.display = "block";
    initValueForm();
  } else {
    alert("Veuillez remplir le formulaire correctement");
  }
}
function initValueForm() {
  formElement.reset();
}

//close second modal
function closeValidModal() {
  modalbgValid.style.display = "none";
}
// Vérifie que mon champ prénom contient au moins 2 lettres et n'est pas vide.



//mets à jour le champ/message d'erreur lorsque les prérecquis ne sont pas respectés
firstname.addEventListener('input', function (e) {

  if (firstname.value.length >= 2) {

    if (firstname.classList.contains('border') && disable[0].classList.contains('enable')) {
      firstname.classList.replace('border', 'noBorder');
      disable[0].classList.replace('enable', 'disable')
      firstnameCtrl = !!true;

    } else {
      firstname.classList.add('noBorder');
      disable[0].classList.replace('enable', 'disable');
      firstnameCtrl = !!true;
    }
  } else if (firstname.value.length < 2) {
    if (firstname.classList.contains('noBorder') || disable[0].classList.contains('enable')) {
      firstname.classList.replace('noBorder', 'border');
      disable[0].classList.replace('disable', 'enable')
      firstnameCtrl = !!false;

    } else {
      firstname.classList.add('noBorder');
      disable[0].classList.replace('enable', 'disable');
      firstnameCtrl = !!true;
    }
  }
})

// Vérifie que mon champ nom contient au moins 2 lettres et n'est pas vide.
lastname.addEventListener('input', function (e) {

  if (lastname.value.length >= 2) {

    if (lastname.classList.contains('border') && disable[1].classList.contains('enable')) {
      lastname.classList.replace('border', 'noBorder');
      disable[1].classList.replace('enable', 'disable');
      lastnameCtrl = !!true
      console.log(lastnameCtrl)
    } else {
      lastname.classList.add('noBorder');
      disable[1].classList.replace('enable', 'disable');
      lastnameCtrl = !!true
      console.log(lastnameCtrl)

    }
  } else if (lastname.value.length < 2) {
    if (lastname.classList.contains('noBorder') || disable[1].classList.contains('enable')) {
      lastname.classList.replace('noBorder', 'border');
      disable[1].classList.replace('disable', 'enable')
      lastnameCtrl = !!false
      console.log(lastnameCtrl)

    } else {
      lastname.classList.add('noBorder');
      disable[1].classList.replace('enable', 'disable');
      lastnameCtrl = !!true
      console.log(lastnameCtrl)

    }
  }
})

//Vérifie que le champ mail corresponde au regex d'un mail
email.addEventListener('input', function (e) {

  // format recquis : lettre(s) + @ + lettre(s) + . + 2 ou 3 lettres.  
  const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(regExEmail)) {
    disable[2].classList.replace('enable', 'disable');
    email.classList.replace('border', 'noBorder');
    emailCtrl = !!true;

  } else if (email.value.length >= 0 && email.classList.contains('noBorder')) {
    disable[2].classList.replace('disable', 'enable');
    email.classList.replace('noBorder', 'border');
    emailCtrl = !!false;
  }
})

//vérifie que la date est saisie (minlength : 10)
birthdate.addEventListener('input', function (e) {
  if (birthdate.value.length > 9) {
    disable[3].classList.replace('enable', 'disable');
    birthdate.classList.replace('border', 'noBorder');
    birthdateCtrl = !!true;

  } else {
    disable[3].classList.replace('disable', 'enable');
    birthdate.classList.replace('noBorder', 'border');
    birthdateCtrl = !!false;
  }
})

// vérifie que le champ tournoi comporte un chiffre entre 0 et 99 inclu
quantity.addEventListener('input', function (e) {
  const numbers = /^[0-9]+$/;
  if (quantity.value.match(numbers) && quantity.value.length < 3 && quantity.value !== "") {
    disable[4].classList.replace('enable', 'disable');
    quantity.classList.replace('border', 'noBorder');
    quantityCtrl = !!true;

  } else {
    disable[4].classList.replace('disable', 'enable');
    quantity.classList.replace('noBorder', 'border');
    quantityCtrl = !!false

  }
})

// Vérifie qu'une ville est bien selectionnée'.
radioButtons.forEach(radiobutton => {
  radiobutton.addEventListener('click', function handleClick(e) {
    if (e.target.value != "" && e.target.value != null) {
      cityCtrl = !!true
      disable[5].classList.replace('enable', 'disable');

    } else {
      cityCtrl = !!false
      console.log('Veuillez sélectionner une ville')

    }
  })
});





// radioButtons.forEach(radioButtons => radioButtons.addEventListener('change', function (e) {
//   for (i = 0; i > radioButtons.length; i++) {

//       if (radioButtons.checked) {
//         console.log('une ville est sélectionnée');
//       } else {
//         console.log('echec')
//       }
//     }
//   }
// ))

//Vérifie que les conditions d'utilisation sont acceptées.
checkbox1.addEventListener('change', function (e) {
  if (checkbox1.checked) {
    if (checkbox1.checked && disable[6].classList.contains('enable')) {
      disable[6].classList.replace('enable', 'disable');
      checkbox1Ctrl = !!true;

    } else {
      disable[6].classList.add('disable');
      checkbox1Ctrl = !!true;
    }
  } else {
    if (disable[6].classList.contains('disable')) {
      disable[6].classList.replace('disable', 'enable');
      checkbox1Ctrl = !!false;

    } else {
      disable[6].classList.add('enable');
      checkbox1Ctrl = !!false;
    }
  }
})

function allFieldsAreValid(firstnameCtrl, lastnameCtrl, emailCtrl, birthdateCtrl, quantityCtrl, cityCtrl, checkbox1Ctrl) {
  if (this.firstnameCtrl && this.lastnameCtrl && this.emailCtrl && this.birthdateCtrl && this.quantityCtrl && this.cityCtrl && this.checkbox1Ctrl) {
    console.log('les champs sont bien remplit')
    return true;
  } else {
    console.log('Veuillez vérifier les champs à remplir')
    return false;
  }
}

// check form is valid
function validate() {
  if (!allFieldsAreValid()) {
    alert('le formulaire est mal remplit')

  } else {
    console.log('le formulaire est soumit')
    launchValidModal();
  }
}


// Validation formulaire via un switch -> n'affiche les erreurs qu'au moment de l'envoie du formulaire.
// for (const input in inputs) {
//   switch (input) {
//       case "firstname":
//           if (!nameValidation(inputs[input].element, inputs[input].regex)) {
//               valid = false;
//           }
//           break;

//       case "lastname":
//           if (!nameValidation(inputs[input].element, inputs[input].regex)) {
//               valid = false;
//           }
//           break;

//       case "email":
//           if (!emailValidation(this.inputs[input].element, inputs[input].regex)) {
//               valid = false;
//           }
//           break;

//       case "birthdate":
//           if (!birthdateValidation(this.inputs[input].element, inputs[input].regex)) {
//               valid = false;
//           }
//           break;

//       case "contest":
//           if (!contestValidation(inputs[input].element, inputs[input].regex)) {
//               valid = false;
//           }
//           break;

//       case "location":
//           if (!locationValidation(inputs[input].element)) {
//               valid = false;
//           }
//           break;

//       case "checkbox":
//           if (!checkboxValidation(inputs[input].element)) {
//               valid = false;
//           }
//           break;

//       default :
//           break;
//   }
// }
// return this.valid;
