//filtrar, ordenar, calcular//

import pokedex from './data/pokemon/pokemon.js';

const pokeData = {
    filterByType: function (type) {
        if (type === "") {
            return pokedex.pokemon;
        } else {
            return pokedex.pokemon.filter(pokemon => pokemon.type.includes(type))
        }
    }
};




export default pokeData;


// const firePokemon = pokedex.filter(pokemon => pokemon.type === 'fire');





