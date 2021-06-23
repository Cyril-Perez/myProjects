/////////// formulaire reservation
let myButton = document.getElementById("button");
let content = document.getElementsByClassName("contentG");
let title = document.getElementsByClassName("title");
let inputPlace = document.getElementById("inputPlace");
let inputNom = document.getElementById("inputNom");
let inputPrenom = document.getElementById("inputPrenom");
let inputAge = document.getElementById("inputAge");
let result = document.getElementById("result");
let result2 = document.getElementById("result2");
let nbPlaceD = 30;
// afficher la liste des personnes de la soiree
let listPeople = [];
// let listeName = [];
let divG = document.getElementsByClassName("listPeople");
let buttonAff = document.querySelector(".listeAffichage");
let divAff = document.getElementById("affichage");
let divFete = document.querySelector("contentFete");
let update;

// au click push tableau configuartion local storage
myButton.addEventListener("click", function () {
  let people = {
    nom: inputNom.value,
    prenom: inputPrenom.value,
    age: inputAge.value,
    place: inputPlace.value,
  };
  listPeople.unshift(people);

  localStorage.setItem("personne", JSON.stringify(listPeople));

  // listPeople.forEach((people) => {
  //   //parcour chaque objet stocker dans mon tableau
  //   listeName.push(people.nom);
  // });

  //NB PLACE

  if (nbPlaceD < inputPlace.value) {
    result.innerText = "Nombre de place indisponible";
    result2.innerText = "Nombre de place disponible " + nbPlaceD;
  } else if (nbPlaceD >= inputPlace.value) {
    nbPlaceD -= inputPlace.value;
    if (inputPlace.value > 1) {
      result.innerText = "Places réservées";
      result2.innerText = "Nombre de place disponible " + nbPlaceD;
    } else {
      result.innerText = "Place réservée";
      result2.innerText = "Nombre de place disponible " + nbPlaceD;
    }
  }
  if (nbPlaceD <= 0) {
    result.innerText = "Complet";
  }

  //   listeName.forEach((element) => {
  //     let p = document.createElement("p");
  //     p.innerText = "participant :" + element;
  //     div.appendChild(p);
  //   });
});

//button affichage

buttonAff.addEventListener("click", () => {
  divAff.innerHTML = "";
  listPeople.forEach((element, idx) => {
    let pName = document.createElement("p");
    pName.classList.add("peopleFete");
    pName.innerText = "Participant : " + element.nom;
    divAff.appendChild(pName);
  });
});
//FONCTION RECHERCHER UN PARTICIPANT
//let listPeople = []
let myParticipant = document.querySelector(".myParticipant");
let inputPart = document.querySelector(".inputPart");
inputPart.addEventListener("keyup", (e) => {
  let objt = localStorage.getItem("personne");
  let objtF = JSON.parse(objt);
  myParticipant.innerHTML = "";
  objtF.forEach((element) => {
    if (
      element.nom &&
      element.nom.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    ) {
      let pPart = document.createElement("p");
      pPart.innerText = element.nom;
      myParticipant.appendChild(pPart);
    }
  });

  //changement du theme
  let choix = document.querySelectorAll(".theme"); // on selectionne toutes  nos class theme

  choix.forEach((theme) => {
    // on va parcourir notre variable choix et l'on va
    theme.addEventListener("click", (e) => {
      //ecouter un event a chaque element de ma variable //le e selectionner un element preci
      document.body.classList.remove("bleu", "noir", "vert");
      switch (e.target.id) {
        case "bleu":
          document.body.classList.add("bleu");
          break;
        case "noir":
          document.body.classList.add("noir");
          break;
        case "vert":
          document.body.classList.add("vert");
          break;
        default:
          null;
      }
    });
  });
});

//2ieme tentative AVEC LE LOCALSTORAGE
// let myParticipant = document.querySelector(".myParticipant");
// let inputPart = document.querySelector(".inputPart");
// inputPart.addEventListener("keyup", (e) => {
//   let objt = localStorage.getItem("personne");
//   let objtF = JSON.parse(objt);
//   myParticipant.innerHTML = "";
//   if (
//     objtF.nom &&
//     objtF.nom.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
//   ) {
//     let pPart = document.createElement("p");
//     pPart.innerText = objtF.nom;
//     myParticipant.appendChild(pPart);
//   } else {
//     console.log("sa marche pas");
//   }
