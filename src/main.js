// Importar el módulo pokeData que contiene las funciones y datos de los Pokémon
import pokeData from "./data.js";
import pokemon from "./data/pokemon/pokemon.js";
import pokemons from "./data/pokemon/pokemon.js";
// Función para generar el HTML de los Pokémon
function pokemonHtml(data) {
  let html = "";
  data.forEach((pokemon) => {

    html += `
    <div class="pokemon-card""> 
        <img src="${pokemon.img}" alt="${pokemon.name}"> 
        <p>${pokemon.name}</p>
    </div>
    `;
  });
  return html;
}

function showPoke() {
  console.log("holi")
}

// Obtener la referencia a la sección donde se mostrarán los Pokémon
const section = document.getElementById("pokemon-grid");

// Obtener referencias a los elementos relevantes del DOM
const datalist = document.getElementById("pokemonNames");
const inputField = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const typeFilter = document.getElementById("typeFilter");
const filterButton = document.getElementById("filterButton");
const clearFilterButton = document.getElementById("clearFilterButton");
const orderButton = document.getElementById("orderButton");


// Obtener referencias a los elementos dentro del dialog
// const pokemonCards = document.querySelectorAll(".pokemon-card");
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

function showPokemons(pokemonList) {
  section.innerHTML = pokemonHtml(pokemonList)
  const pokemonCards = document.querySelectorAll(".pokemon-card")
  console.log(pokemonCards)

  for (const pokemonCard of pokemonCards) {
    pokemonCard.addEventListener("click", () => {
      const pokemonName = pokemonCard.querySelector("p").textContent;
      const selectedPokemonInfo =
        pokeData.getPokemonInfoByName(pokemonName);
      openDialog(selectedPokemonInfo)

    })


  }
}

// Función para mostrar todos los Pokémon
function showAllPokemon() {
  // console.log("showAllPokemon");
  const allPokemon = pokeData.filterByType("");
  showPokemons(allPokemon)

}

dialog.querySelector("#dialogClose").addEventListener("click", () => {
  dialog.close();
});

// Manejar el evento de autocompletado y limpiar el filtro cuando el usuario borre el input
inputField.addEventListener("input", () => {
  const inputText = inputField.value.toLowerCase();


  if (inputText === "") {
    showAllPokemon();
    return;
  }

  const filteredNames = pokemonNames.filter((name) =>
    name.toLowerCase().includes(inputText)
  );
  section.innerHTML = pokemonHtml(pokeData.filterByType(""));
});

// Manejar el evento de búsqueda cuando el usuario presiona el botón "Search"
searchButton.addEventListener("click", () => {
  const selectedPokemonName = inputField.value.toLowerCase();
  const selectedPokemon = pokeData.filterByPokemonName(
    selectedPokemonName,
    pokemons
  );
  showPokemons(selectedPokemon);
});

// Manejar el evento de filtrado por tipo de Pokémon
filterButton.addEventListener("click", () => {
  const selectedType = typeFilter.value;
  const filteredPokemon = pokeData.filterByType(selectedType);
  showPokemons(filteredPokemon);
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
  showPokemons(currentPokemonList);
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
// console.log("holoi")
function showCard(pokemon) {
  console.log(pokemon);
}

function openDialog(pokemonInfo) {
  if (pokemonInfo) {
    pokeName.textContent = pokemonInfo.name;
    pokeNumber.textContent = `Pokédex Number: ${pokemonInfo.num}`;
    pokeImg.src = pokemonInfo.img;
    resistantWeak.textContent =
      "Resistance: " +
      pokemonInfo.resistant.join(", ") +
      "\nWeaknesses: " +
      pokemonInfo.weaknesses.join(", ");
    move.textContent =
      "Quick Move: " +
      pokemonInfo["quick-move"][0].name +
      "\nSpecial Attack: " +
      pokemonInfo["special-attack"][0].name;

    const evolutions = pokemonInfo.evolution;
    const evolutionText = evolutions["next-evolution"]
      ? evolutions["next-evolution"].map((evo) => evo.name).join(", ")
      : "None";
    evolution.textContent = "Evolutions: " + evolutionText;

    dialog.showModal();

    // Agregar evento para cerrar el diálogo

  }
}


document.addEventListener("DOMContentLoaded", () => {

  showAllPokemon()
  console.log("holi")




});







