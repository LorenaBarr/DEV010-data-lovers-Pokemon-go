//filtrar, ordenar, calcular//

import pokedex from './data/pokemon/pokemon.js';

const pokeData = {
  filterByType: function (type) {
    if (type === "") {
      return pokedex.pokemon;
    } else {
      return pokedex.pokemon.filter(pokemon => pokemon.type.includes(type))
    }
  },

  getPokemonNames: function () {
    return pokedex.pokemon.map(pokemon => pokemon.name);
  },

  filterByPokemonName: function (name) {
    return pokedex.pokemon.filter(pokemon => pokemon.name.toLowerCase() === name);
  }
};

export default pokeData;



