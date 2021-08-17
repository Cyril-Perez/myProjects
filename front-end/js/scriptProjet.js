let projectJs = document.querySelectorAll(".items-sous-liste-js");
let projectReact = document.querySelectorAll(".items-sous-liste-react");
let projectDivers = document.querySelectorAll(".items-sous-liste-divers");
let divAff = document.querySelector(".affichage");

projectJs.forEach((element) => {
  element.addEventListener("click", (e) => {
    switch (e.target.id) {
      //JS VANILLA
      case "api":
        divAff.innerHTML = "";
        let a = document.createElement("a");
        a.href = "../listeProjets/projets/apiDrapeau/index.html";
        a.innerText = "Projet Api moteur de recherche : Drapeau";
        a.classList.add("myProject");
        divAff.appendChild(a);
        break;
      case "dom":
        divAff.innerHTML = "";
        let d = document.createElement("a");
        d.innerText = "WebSite Photographe";
        d.href = "../listeProjets/projets/PhotographieB/index.html";
        d.classList.add("myProject");
        divAff.appendChild(d);
        break;
      case "firebase":
        divAff.innerHTML = "";
        let f = document.createElement("a");
        f.href = "https://www.google.fr/";
        f.innerText = "Authentification avec Firebase";
        f.classList.add("myProject");
        divAff.appendChild(f);
        break;
      default:
    }
  });
});
projectReact.forEach((element) => {
  element.addEventListener("click", (e) => {
    switch (e.target.id) {
      //REACT
      case "projet-react-1":
        divAff.innerHTML = "";
        let r1 = document.createElement("a");
        r1.innerText = "Projet R";
        r1.href = "https://www.google.fr/";
        r1.classList.add("myProject");
        divAff.appendChild(r1);
        break;
      case "projet-react-2":
        divAff.innerHTML = "";
        let r2 = document.createElement("a");
        r2.href = "https://www.google.fr/";
        r2.innerText = "Projet R2";
        r2.classList.add("myProject");
        divAff.appendChild(r2);
        break;
      default:
    }
  });
});
projectDivers.forEach((element) => {
  element.addEventListener("click", (e) => {
    switch (e.target.id) {
      //REACT
      case "projet-divers-1":
        divAff.innerHTML = "";
        let d1 = document.createElement("a");
        d1.innerText = "Projet D1";
        d1.href = "https://www.google.fr/";
        d1.classList.add("myProject");
        divAff.appendChild(d1);
        break;
      case "projet-divers-2":
        divAff.innerHTML = "";
        let d2 = document.createElement("a");
        d2.href = "https://www.google.fr/";
        d2.innerText = "Projet D2";
        d2.classList.add("myProject");
        divAff.appendChild(d2);
        break;
      default:
    }
  });
});
//   case "firebase":
//     divAff.innerHTML = "";
//     let f = document.createElement("a");
//     f.href = "https://www.google.fr/";
//     f.innerText = "Authentification avec Firebase";
//     f.classList.add("myProject");
//     divAff.appendChild(f);
//     break;
//   case "projet-react-1":
//     divAff.innerHTML = "";
//     let r1 = document.createElement("a");
//     r1.innerText = "Projet R";
//     r1.href = "https://www.google.fr/";
//     r1.classList.add("myProject");
//     divAff.appendChild(r1);
//     break;
//   case "projet-react-2":
//     divAff.innerHTML = "";
//     let r2 = document.createElement("a");
//     r2.href = "https://www.google.fr/";
//     r2.innerText = "Projet R2";
//     r2.classList.add("myProject");
//     divAff.appendChild(r2);
//     break;
//   case "projet-divers-1":
//     divAff.innerHTML = "";
//     let d1 = document.createElement("a");
//     d1.innerText = "Projet D1";
//     d1.href = "https://www.google.fr/";
//     d1.classList.add("myProject");
//     divAff.appendChild(d1);
//     break;
//   case "projet-divers-2":
//     divAff.innerHTML = "";
//     let d2 = document.createElement("a");
//     d2.href = "https://www.google.fr/";
//     d2.innerText = "Projet D2";
//     d2.classList.add("myProject");
//     divAff.appendChild(d2);
//     break;
//   default:
// }
