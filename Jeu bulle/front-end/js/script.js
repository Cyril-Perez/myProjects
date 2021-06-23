let h2 = document.querySelector("h3");
let compteur = 0;
//creation de bulle
const bubblePosition = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  let taille = Math.random() * 200 + 100 + "px"; //chiffre entre 100 et 200
  bubble.style.height = taille;
  bubble.style.width = taille; // taille de la bulle

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%"; // positionnement aleatoire de la bulle
  const minimum = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * minimum + "%"); // ajout de la variable positionnement dans notre keyFrames avec setProperty
  bubble.addEventListener("click", () => {
    compteur++;
    h2.innerText = compteur;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000); // dans 8 s (duree de mon animation je remove ma bulle)
};
setInterval(bubblePosition, 400); //tout les 300mms on va creer une bulle
