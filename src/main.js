// Importar el módulo pokeData que contiene las funciones y datos de los Pokémon
import pokeData from "./data.js";

// Función para generar el HTML de los Pokémon
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

// Obtener la referencia a la sección donde se mostrarán los Pokémon
const section = document.getElementById("pokemon-grid");

// Obtener referencias a los elementos relevantes del DOM
const inputField = document.querySelector(".search input");
const suggestionsList = document.querySelector(".suggestions");
const searchButton = document.querySelector(".search button");
const typeFilter = document.getElementById("typeFilter");
const filterButton = document.getElementById("filterButton");

// Obtener la lista de nombres de Pokémon de tu base de datos
const pokemonNames = pokeData.getPokemonNames();

// Manejar el evento de autocompletado cuando el usuario escribe
inputField.addEventListener("input", () => {
  const inputText = inputField.value.toLowerCase();
  const filteredNames = pokemonNames.filter(name => name.toLowerCase().includes(inputText));
  suggestionsList.innerHTML = "";
  filteredNames.forEach(name => {
    const suggestionItem = document.createElement("div");
    suggestionItem.classList.add("suggestion-item");
    suggestionItem.textContent = name;
    suggestionItem.addEventListener("click", () => {
      inputField.value = name;
      suggestionsList.innerHTML = "";
    });
    suggestionsList.appendChild(suggestionItem);
  });
});

// Manejar el evento de búsqueda cuando el usuario presiona el botón "Search"
searchButton.addEventListener("click", () => {
  const selectedPokemonName = inputField.value.toLowerCase();
  const selectedPokemon = pokeData.filterByPokemonName(selectedPokemonName);
  section.innerHTML = pokemonHtml(selectedPokemon);
});

// Manejar el evento de filtrado por tipo de Pokémon
filterButton.addEventListener("click", () => {
  const selectedType = typeFilter.value;
  const filteredPokemon = pokeData.filterByType(selectedType);
  section.innerHTML = pokemonHtml(filteredPokemon);
});

// Mostrar todos los Pokémon inicialmente
section.innerHTML = pokemonHtml(pokeData.filterByType(""));