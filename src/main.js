// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// // import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);

import pokedex from './data/pokemon.js/pokemon.json';

const pokemonGrid = document.querySelector('.pokemon-grid');

pokedex.forEach(pokemon => {
    const pokemonCard = document.createElement('div');
    // ... (genera la tarjeta de Pokémon como antes)
    pokemonGrid.appendChild(pokemonCard);
});