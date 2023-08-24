// Importar el módulo pokeData que contiene las funciones y datos de los Pokémon
import pokeData from "./data.js";
import pokemons from "./data/pokemon/pokemon.js";

// Función para generar el HTML de los Pokémon
//
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
const clearFilterButton = document.getElementById("clear-filter-button");
// Obtener referencias a los elementos dentro del dialog
const pokemonCards = document.querySelectorAll(".pokemon-card");
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



pokemonCards.forEach((pokemonCard) => {
  console.log("Card clicked:", pokemonCard);
  pokemonCard.addEventListener("click", () => {
    const selectedPokemonName = pokemonCard.querySelector("p").textContent;
    const selectedPokemonInfo = pokeData.getPokemonInfoByName(
      selectedPokemonName
    );

    if (selectedPokemonInfo) {
      pokeName.textContent = selectedPokemonInfo.name;
      pokeNumber.textContent = `Pokédex Number: ${selectedPokemonInfo.num}`;
      pokeImg.src = selectedPokemonInfo.img;
      resistantWeak.textContent =
        "Resistance: " +
        selectedPokemonInfo.resistant.join(", ") +
        "\nWeaknesses: " +
        selectedPokemonInfo.weaknesses.join(", ");
      move.textContent =
        "Quick Move: " +
        selectedPokemonInfo["quick-move"][0].name +
        "\nSpecial Attack: " +
        selectedPokemonInfo["special-attack"][0].name;

      const evolutions = selectedPokemonInfo.evolution;
      const evolutionText = evolutions["next-evolution"].map((evo) => evo.name).join(", ");
      evolution.textContent = "Evolutions: " + evolutionText;

      dialog.showModal();

      // Agregar evento para cerrar el diálogo
      dialog.querySelector(".close").addEventListener("click", () => {
        dialog.close();
      });
    }
  });
});

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
