import pokeData from '../src/data.js';

describe('filterByType', () => {
  it('filters pokemon by type', () => {
    const testFilter = [
      { name: 'bulbasaur', type: ['grass', 'poison'] },
      { name: 'charmander', type: ['fire'] },
      { name: 'squirtle', type: ['water'] },
      },
    ];

  const filteredPokemons = pokeData.filterByType('fire', testFilter);
  expect(filteredPokemons).toEqual([{ name: 'charmander', type: ['fire'] }]);
});


describe('getPokemonNames', () => {
  it('returns an array of Pokémon names', () => {
    const testFilter = [
      { name: 'bulbasaur', type: ['grass', 'poison'] },
      { name: 'charmander', type: ['fire'] },
      { name: 'squirtle', type: ['water'] },
    ];

    const pokemonNames = pokeData.getPokemonNames(testFilter);
    expect(pokemonNames).toEqual(['bulbasaur', 'charmander', 'squirtle']);
  });
});

describe('filterByPokemonName', () => {
  it('filters Pokémon by name', () => {
    const testFilter = [
      { name: 'bulbasaur', type: ['grass', 'poison'] },
      { name: 'charmander', type: ['fire'] },
      { name: 'squirtle', type: ['water'] },
    ];

    const filteredPokemons = pokeData.filterByPokemonName('charmander', testFilter);
    expect(filteredPokemons).toEqual([{ name: 'charmander', type: ['fire'] }]);
  });
});
