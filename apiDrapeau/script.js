const searchInput = document.getElementById("search");
const results = document.getElementById("results");

let searchTerm = "";
let countries;

// API REQUEST
const fetchCountries = async () => {
  countries = await fetch(
    "https://restcountries.eu/rest/v2/all?fields=name;population;flag"
  ).then((res) => res.json());
};

const showCountries = async () => {
  await fetchCountries();

  results.innerHTML = countries // filter nous retourne un tableau en fixant les condition dans ma callback TolowerCase va prendre l'element et le mettre en minuscule
    .filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) //include permet de determiner le type d'une valeur
    .map(
      (
        country //et la placer en minucule
      ) =>
        ` 
          <li class="country-item">
            <img class="country-flag" src="${country.flag}" />
            <h3 class="country-name">${country.name}</h3>
            <div class="country-info">
              <h2 class="country-population">${numberWithCommas(
                country.population
              )}</h2>
              <h5 class="country-population-text">Habitants</h5>
            </div>
          </li>
        `
    )
    .join("");
};

showCountries();

// INPUT SETUP
searchInput.addEventListener("input", (e) => {
  //on va ecouter l'evenement input qui a en 2e param une callback qui
  searchTerm = e.target.value; //dans search term caratcere vide de base on prend la valeur de l'input taper
  showCountries(); // grace a cette event des lors que l'on tape on exectute la selection dans l'input et la fonction showCountries
}); // pour montrer pays

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
