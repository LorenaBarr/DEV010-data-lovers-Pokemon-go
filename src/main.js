// Importar el módulo pokeData que contiene las funciones y datos de los Pokémon
import pokeData from "./data.js";
import pokemons from "./data/pokemon/pokemon.js";
// Función para generar el HTML de los Pokémon
function pokemonHtml(data) {
  let html = "";
  data.forEach((pokemon) => {
    html += `
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
const datalist = document.getElementById("pokemonNames");
const inputField = document.querySelector(".search input");
const suggestionsList = document.querySelector(".suggestions");
const searchButton = document.querySelector(".search button");
const typeFilter = document.getElementById("typeFilter");
const filterButton = document.getElementById("filterButton");
const clearFilterButton = document.getElementById("clearFilterButton");
const orderButton = document.getElementById("orderButton");

// Obtener referencias a los elementos dentro del dialog
const dialog = document.getElementById("dialog");
const pokeName = document.getElementById("pokeName");
const pokeNumber = document.getElementById("pokeNumber");
const pokeImg = document.getElementById("pokeImg");
const resistantWeak = document.getElementById("resistant-Weak");
const move = document.getElementById("move");
const evolution = document.getElementById("evolution");

// Obtener la lista de nombres de Pokémon de tu base de datos
const pokemonNames = pokeData.getPokemonNames();

// Llenar el datalist con los nombres de los Pokémon
pokemonNames.forEach((name) => {
  const option = document.createElement("option");
  option.value = name;
  datalist.appendChild(option);
});

// Función para mostrar todos los Pokémon
function showAllPokemon() {
  const allPokemon = pokeData.filterByType("");
  section.innerHTML = pokemonHtml(allPokemon);
}

// Manejar el evento de autocompletado y limpiar el filtro cuando el usuario borre el input
inputField.addEventListener("input", () => {
  const inputText = inputField.value.toLowerCase();
  suggestionsList.innerHTML = "";

  if (inputText === "") {
    showAllPokemon();
    return;
  }

  const filteredNames = pokemonNames.filter((name) =>
    name.toLowerCase().includes(inputText)
  );
  // suggestionsList.innerHTML = "";
  // filteredNames.forEach((name) => {
  //   const suggestionItem = document.createElement("div");
  //   suggestionItem.classList.add("suggestion-item");
  //   suggestionItem.textContent = name;
  //   suggestionItem.addEventListener("click", () => {
  //     inputField.value = name;
  //     inputField.style.height = "30px";
  //     suggestionsList.innerHTML = "";
  //   });
  //   suggestionsList.appendChild(suggestionItem);
  // });
});

// Manejar el evento de búsqueda cuando el usuario presiona el botón "Search"
searchButton.addEventListener("click", () => {
  const selectedPokemonName = inputField.value.toLowerCase();
  const selectedPokemon = pokeData.filterByPokemonName(
    selectedPokemonName,
    pokemons
  );
  section.innerHTML = pokemonHtml(selectedPokemon);
});

// Manejar el evento de filtrado por tipo de Pokémon
filterButton.addEventListener("click", () => {
  const selectedType = typeFilter.value;
  const filteredPokemon = pokeData.filterByType(selectedType);
  section.innerHTML = pokemonHtml(filteredPokemon);
});

// editing space -------------------------------------------------------------------

const orderDropdown = document.getElementById("order");
const ascendingPokedexButton = document.querySelector(
  'option[value="num1-251"]'
);
const descendingPokedexButton = document.querySelector(
  'option[value="num251-1"]'
);

orderButton.addEventListener("click", () => {
  const selectedOrder = orderDropdown.value;

  // Retrieve the current list of Pokémon based on previous filters
  let currentPokemonList = section.innerHTML
    ? Array.from(section.children)
    : [];

  // Convert the DOM elements back into Pokémon objects for sorting
  currentPokemonList = currentPokemonList.map((element) => {
    const name = element.querySelector("p").textContent;
    return pokeData.filterByPokemonName(name, pokemons)[0];
  });

  // Sort the Pokémon list based on the selected order
  if (selectedOrder === "a-z") {
    currentPokemonList.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedOrder === "z-a") {
    currentPokemonList.sort((a, b) => b.name.localeCompare(a.name));
  } else if (selectedOrder === "num1-251") {
    currentPokemonList.sort((a, b) => a.num - b.num);
  } else if (selectedOrder === "num251-1") {
    currentPokemonList.sort((a, b) => b.num - a.num);
  }

  // Generate the HTML for the sorted Pokémon list
  section.innerHTML = pokemonHtml(currentPokemonList);
});

// editing space -------------------------------------------------------------------

// Agrega un manejador de eventos al botón "Limpiar Filtro"
clearFilterButton.addEventListener("click", () => {
  // Limpia el contenido actual del contenedor
  section.innerHTML = "";

  // Vuelve a mostrar todos los Pokémon
  showAllPokemon();
});

// Mostrar todos los Pokémon inicialmente
document.addEventListener("DOMContentLoaded", showAllPokemon);

// Mostrar todos los Pokémon inicialmente
// section.innerHTML = pokemonHtml(pokeData.filterByType(""));
