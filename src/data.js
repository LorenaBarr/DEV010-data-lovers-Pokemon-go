//filtrar, ordenar, calcular//
// Importar el módulo pokedex que contiene los datos de los Pokémon
import pokedex from './data/pokemon/pokemon.js';

// Objeto que contiene funciones para filtrar, ordenar y calcular información sobre los Pokémon
const pokeData = {
  // Función para filtrar Pokémon por tipo
  filterByType: function (type) {
    if (type === "") {
      return pokedex.pokemon;
      // Si el tipo es vacío, devolver todos los Pokémon
    } else {
       // Filtrar los Pokémon por el tipo especificado
      return pokedex.pokemon.filter(pokemon => pokemon.type.includes(type))
    }
  },

  // Función para obtener los nombres de todos los Pokémon
  getPokemonNames: function () {
     // Mapear los datos de los Pokémon y obtener sus nombres
    return pokedex.pokemon.map(pokemon => pokemon.name);
  },

  // Función para filtrar Pokémon por nombre
  filterByPokemonName: function (name) {
    return pokedex.pokemon.filter(pokemon => pokemon.name.toLowerCase() === name);
  }
};

// Exportar el objeto pokeData para su uso en otros archivos
export default pokeData;



