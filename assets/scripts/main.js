//bouton teste de valide
let boutonSupprim = document.querySelector(".supprimer");

// Récupération des éléments formulaire
let inputNom = document.querySelector("#inputNom");
let inputPrenom = document.querySelector("#inputPrenom");
let inputPoste = document.querySelector("#inputPoste");
let inputTelePor = document.querySelector("#inputTelePor");
let inputTeleFix = document.querySelector("#inputTeleFix");
let inputEmail = document.querySelector("#inputEmail");
let inputAdresse = document.querySelector("#inputAdresse");
let formulaire = document.querySelector(".formulaire");
let formulaireCouleur = document.querySelector(".motifi");

// Récupération des éléments formulaireCouleur
let inputheme = document.querySelector("#inputTheme");



// Récupération des éléments afficher formulaire 
let afficheNom = document.querySelector("#Nom");
let affichePrenom = document.querySelector("#Prenom");
let affichePoste = document.querySelector("#Poste");
let afficheTeleponFix = document.querySelector("#Telephonfix");
let affichePortable = document.querySelector("#Portable");
let afficheEmail = document.querySelector("#Email");
let afficheAdresse = document.querySelector("#Adresse");


// Récupération des éléments afficher formulaire 
let afficherTaille = document.querySelector(".content");

/* cree une barre  qui change taille de police */
function changeFontSize(size) {
  afficherTaille.style.fontSize = size + 'px';
  afficheNom.style.fontSize = size + 'px';
  affichePrenom.style.fontSize = size + 'px';
};


// Fonction qui va afficher mes contacts
function showFormulaire() {
  // Pour chaque élément de mon tableau j'ajoute à text.innerHTML le content
  afficheNom.innerHTML = inputNom.value;
  affichePrenom.innerHTML = inputPrenom.value;
  affichePoste.innerHTML = inputPoste.value;
  affichePortable.innerHTML = inputTelePor.value == "" ? inputTelePor.value : `<i class="bi bi-phone-fill"></i><a href= tel: ${inputTelePor.value}</a>${inputTelePor.value}`;
  afficheTeleponFix.innerHTML = inputTeleFix.value == "" ? inputTeleFix.value : `<i class="bi bi-telephone-fill"></i> <a href= tel: ${inputTeleFix.value}</a>${inputTeleFix.value}`;
  afficheEmail.innerHTML = inputEmail.value == "" ? inputEmail.value : '<hr>' + `<i class="bi bi-envelope-at-fill"></i> <a href= mailto: ${inputEmail.value}</a> ${inputEmail.value}`;


  // OPERATEUR TERNAIRE 
  // CONDITION ? TRUE : FALSE
  afficheAdresse.innerHTML = inputAdresse.value == "" ? inputAdresse.value : '<i class="bi bi-geo-alt-fill"></i>' + inputAdresse.value;


};

function showCouleur() {

  // coder pour changer la couleur police 
  afficheNom.style.color = "#000000";
  affichePrenom.style.color = "#000000";
  affichePoste.style.color = "#000000";
  affichePortable.style.color = "#000000";
  afficheTeleponFix.style.color = "#000000";
  afficheEmail.style.color = "#000000";
  afficheAdresse.style.color = "#000000";
}

// code pour bloquer fonction caractere juste des numbre
function checkPhoneKey(key) {
  return (key >= '0' && key <= '9') ||
    ['+', '(', ')', '-', 'ArrowLeft', 'ArrowRight', 'Delete', 'Backspace', 'Tab'].includes(key);
}

function boutonValid() {
  // Ajouter un contact
  formulaire.addEventListener("input", function () {
    // Affichage des contacts dans l'html
    showFormulaire();
    showCouleur();
  })
};



function validcouleur() {
  // Ajouter un contact
  formulaireCouleur.addEventListener("input", function () {
    // Affichage des contacts dans l'html
    console.log("tetete");
  })

}

function boutonSupprime() {
  // Supprimer un élément du tableau
  boutonSupprim.addEventListener("click", function () {
    alert("Position réinitialisée");

    inputNom.value = "";
    inputPrenom.value = "";
    inputPoste.value = "";
    inputTelePor.value = "";
    inputTeleFix.value = "";
    inputEmail.value = "";
    inputAdresse.value = "";

    showFormulaire();

  });
};


validcouleur();
boutonValid();
boutonSupprime();



