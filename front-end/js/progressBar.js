let progressHtml = document.getElementById("fileHtml");
let progressCss = document.getElementById("fileCss");
let progressJs = document.getElementById("fileJs");
let progressReact = document.getElementById("fileReact");
let progressNode = document.getElementById("fileNode");
let progressExp = document.getElementById("fileExp");
let progressMongo = document.getElementById("fileMongo");
let progressGit = document.getElementById("fileGit");
let progressGithub = document.getElementById("fileGithub");

//let logoFront = document.querySelectorAll(".logoFront");
let logoBack = document.querySelector(".contentBack");
let contentOutils = document.querySelector(".contentOutils");
let myContact = document.querySelector(".contentForm");
let back = true;
let outils = true;

function up(param, num) {
  let valeur = setInterval(() => {
    param.value++;
    if (param.value === num) {
      clearTimeout(valeur);
    }
  }, 1000 / 60);
}
up(progressHtml, 95);
up(progressCss, 80);
up(progressJs, 80);
up(progressReact, 65);
up(progressNode, 40);
up(progressExp, 60);
up(progressMongo, 35);
up(progressGit, 70);
up(progressGithub, 75);
//ESSAIE AU SCROOL
// function oneFunc(logo) {
//   logo.forEach((item) => {
//     item.classList.toggle("visuel");
//   });
// }
// let myScrool =
//   (window.innerHeight + window.scrollY) / document.body.offsetHeight;
// window.addEventListener("scroll", () => {
//   if (myScrool > 0.44 && back) {
//     oneFunc(logoBack);
//   }
//   back = false;
// });
// window.addEventListener("scroll", () => {
//   if (myScrool > 0.57 && outils) {
//     oneFunc(contentOutils);
//   }
//   outils = false;
// });

//Element Techno au scroll
const option1 = {
  root: null, //element concerner
  rootMargin: "0px",
  threshold: 0.72, //definie le pourcentage de visibilité de mon element (a 40%)
};
const option2 = {
  root: null,
  rootMargin: "0px",
  threshold: 0.82,
};
const myIntersect = function (entree, observer) {
  entree.forEach((element) => {
    if (element.intersectionRatio > option1.threshold) {
      //intersection ratio est le % de visibilité de mon écran
      element.target.classList.add("reveal-visible");
      observer.unobserve(element.target);
    }
  });
};
const observer = new IntersectionObserver(myIntersect, option1);
observer.observe(logoBack); //element selectionner
const observer2 = new IntersectionObserver(myIntersect, option2);
observer2.observe(contentOutils);

const optionNav = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};
const myNav = function (entree, observer) {
  entree.forEach((element) => {
    if (element.intersectionRatio > optionNav.threshold) {
      //intersection ratio est le % de visibilité de mon écran
      element.target.classList.add("apparaitre-visible");
      observer.unobserve(element.target);
    }
  });
};
const navigation = new IntersectionObserver(myNav, optionNav);
navigation.observe(myContact);
