//filtrar, ordenar, calcular//
// Importar el módulo pokedex que contiene los datos de los Pokémon
import pokedex from "./data/pokemon/pokemon.js";

// Objeto que contiene funciones para filtrar, ordenar y calcular información sobre los Pokémon
// El código define un objeto llamado pokeData que contiene una función llamada filterByType
//para filtrar Pokémon por tipo. Si el tipo es vacío, la función devuelve todos los Pokémon.
//De lo contrario, filtra los Pokémon por el tipo especificado y devuelve los resultados.

const pokeData = {
  // Función para filtrar Pokémon por tipo
  filterByType: function (type, pokedex) {
    if (type === "") {
      return pokedex.pokemon;
      // Si el tipo es vacío, devolver todos los Pokémon
    } else {
      // Filtrar los Pokémon por el tipo especificado
      return pokedex.pokemon.filter((pokemon) => pokemon.type.includes(type));
    }
  },

  // Función para obtener los nombres de todos los Pokémon
  //*La función getPokemonNames mapea los datos de los Pokémon y devuelve un array
  // con los nombres de todos los Pokémon. Utiliza el método map para recorrer cada
  // objeto de la lista pokedex.pokemon y obtener el valor de la propiedad name.
  // Luego, retorna un nuevo array con los nombres obtenidos.*//

  getPokemonNames: function () {
    
    // Mapear los datos de los Pokémon y obtener sus nombres
    return pokedex.pokemon.map((pokemon) => pokemon.name);
    
  },

  // Función para obtener la información de un Pokémon por su nombre
  getPokemonInfoByName: function (name) {
    const lowerCaseName = name.toLowerCase();
    const pokemonInfo = pokedex.pokemon.find(
      (pokemon) => pokemon.name === lowerCaseName
    );
    return pokemonInfo || null; // Si no se encuentra el Pokémon, devuelve null
  },

  // Función para filtrar Pokémon por nombre
  //La función filterByPokemonName recibe un parámetro name y
  //filtra los Pokémon en base a su nombre. Utiliza el método filter para iterar sobre la lista de Pokémon
  //y devuelve aquellos cuyo nombre coincida exactamente con el valor del parámetro name,
  //sin importar si las letras están en mayúsculas o minúsculas.

  filterByPokemonName: function (name, pokemons) {
    return pokemons.pokemon.filter(
      (pokemon) => pokemon.name.toLowerCase() === name
    );
  },

  // La función filterByPokemonName recibe dos parámetros: name y pokemons. 
  // Filtra los Pokémon en base a su nombre utilizando el método filter. 
  // Compara el nombre de cada Pokémon en minúsculas con el valor del parámetro name también en minúsculas. 
  // Retorna un nuevo array con los Pokémon cuyo nombre coincide exactamente con el valor proporcionado.


  // //función para ordenar pokemones
  // sortAscending: function (pokemons) {
  //   return pokemons.slice().sort();
  // },
  // Function to sort and render Pokémon based on the selected order

  sortAscendingByNum: function (pokemonArray) {
    const orderedList = pokemonArray.sort((a, b) => a.num - b.num);
    return orderedList;
  },

  // La función sortAscendingByNum recibe un array de objetos pokemonArray. 
  // Utiliza el método sort para ordenar los elementos del array en orden ascendente según el valor de 
  // la propiedad num de cada objeto. 
  // Luego, retorna el array ordenado.


  sortDescendingByNum: function (pokemonArray) {
    const orderedList = pokemonArray.sort((a, b) => b.num - a.num);
    return orderedList;
  },

  // La función sortDescendingByNum recibe un array de objetos pokemonArray. 
  // Utiliza el método sort para ordenar los elementos del array en orden descendente según el valor 
  // de la propiedad num de cada objeto. 
  // Luego, retorna el array ordenado.



  orderAndUpdateList: function (selectedOrder, data) {
    let currentPokemon;
    if (selectedOrder === "a-z") {
      currentPokemon = data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedOrder === "z-a") {
      currentPokemon = data.sort((a, b) => b.name.localeCompare(a.name));
    } else if (selectedOrder === "num1-251") {
      currentPokemon = data = pokeData.sortAscendingByNum(data);
    } else if (selectedOrder === "num251-1") {
      currentPokemon = data = pokeData.sortDescendingByNum(data);
    }

    return currentPokemon;
  },
};



// La función orderAndUpdateList recibe dos parámetros: selectedOrder y data. 
// Dependiendo del valor de selectedOrder, se realiza una acción diferente para ordenar el array data. 
// Si selectedOrder es "a-z", se ordena el array en orden alfabético ascendente según el nombre de los Pokémon.
// Si es "z-a", se ordena en orden alfabético descendente. Si es "num1-251", 
// se utiliza la función sortAscendingByNum para ordenar el array según el número de los Pokémon en orden 
// ascendente. Y si es "num251-1", se utiliza la función sortDescendingByNum para ordenar en orden descendente.
//  Finalmente, se retorna el array ya ordenado.


// Exportar el objeto pokeData para su uso en otros archivos
export default pokeData;
