//filtrar, ordenar, calcular//
// Importar el módulo pokedex que contiene los datos de los Pokémon
import pokedex from './data/pokemon/pokemon.js';

// Objeto que contiene funciones para filtrar, ordenar y calcular información sobre los Pokémon
// El código define un objeto llamado pokeData que contiene una función llamada filterByType 
//para filtrar Pokémon por tipo. Si el tipo es vacío, la función devuelve todos los Pokémon. 
//De lo contrario, filtra los Pokémon por el tipo especificado y devuelve los resultados.
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
  //*La función getPokemonNames mapea los datos de los Pokémon y devuelve un array 
  // con los nombres de todos los Pokémon. Utiliza el método map para recorrer cada 
  // objeto de la lista pokedex.pokemon y obtener el valor de la propiedad name. 
  // Luego, retorna un nuevo array con los nombres obtenidos.*//

  getPokemonNames: function () {
    // Mapear los datos de los Pokémon y obtener sus nombres
    return pokedex.pokemon.map(pokemon => pokemon.name);
  },

  // Función para filtrar Pokémon por nombre
  //La función filterByPokemonName recibe un parámetro name y 
  //filtra los Pokémon en base a su nombre. Utiliza el método filter para iterar sobre la lista de Pokémon 
  //y devuelve aquellos cuyo nombre coincida exactamente con el valor del parámetro name, 
  //sin importar si las letras están en mayúsculas o minúsculas.
  
  filterByPokemonName: function (name) {
    return pokedex.pokemon.filter(pokemon => pokemon.name.toLowerCase() === name);
  }
};

// Exportar el objeto pokeData para su uso en otros archivos
export default pokeData;



