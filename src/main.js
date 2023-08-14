import pokeData from "./data.js";

function pokemonHtml(data) {
  let html = "";
  data.forEach((pokemon) => {
    html +=
      `
    <div class= "pokemon-card">  
        <img src="${pokemon.img}" alt="${pokemon.name}"> 
        <p>${pokemon.name}</p>
    </div>
    `;
  });

  return html;
}

const section = document.getElementById("pokemon-grid");

// Mostrar todos los Pokémon inicialmente
section.innerHTML = pokemonHtml(pokeData.filterByType(""));

const typeFilter = document.getElementById("typeFilter");
const filterButton = document.getElementById("filterButton");

filterButton.addEventListener("click", () => {
  const selectedType = typeFilter.value;
  const filteredPokemon = pokeData.filterByType(selectedType);
  section.innerHTML = pokemonHtml(filteredPokemon);
});