import pokeData from "../src/data.js";

describe("filterByType", () => {
  it("filters pokemon by type", () => {
    const testFilter = {
      pokemon: [
        { name: "bulbasaur", type: ["grass", "poison"] },
        { name: "charmander", type: ["fire"] },
        { name: "squirtle", type: ["water"] },
      ],
    };

    const filteredPokemons = pokeData.filterByType("fire", testFilter);
    // que la funcion existe
    expect(typeof pokeData.filterByType).toBe("function");
    // comportamiento deseado
    expect(filteredPokemons).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "charmander", type: ["fire"] }),
      ])
    );
    // estresar a la funcion
    expect(pokeData.filterByType("", testFilter)).toEqual(testFilter.pokemon);
  });
});

// describe("getPokemonNames", () => {
//   it("returns an array of Pokémon names", () => {
//     const testFilter = [
//       { name: "bulbasaur", type: ["grass", "poison"] },
//       { name: "charmander", type: ["fire"] },
//       { name: "squirtle", type: ["water"] },
//     ];

//     const pokemonNames = pokeData.getPokemonNames(testFilter);
//     expect(pokemonNames).toEqual(["bulbasaur", "charmander", "squirtle"]);
//   });
// });

describe("filterByPokemonName", () => {
  it("filters Pokémon by name", () => {
    const testFilter = {
      pokemon: [
        { name: "bulbasaur", type: ["grass", "poison"] },
        { name: "charmander", type: ["fire"] },
        { name: "squirtle", type: ["water"] },
      ],
    };

    const filteredPokemons = pokeData.filterByPokemonName(
      "charmander",
      testFilter
    );
    expect(filteredPokemons).toEqual([{ name: "charmander", type: ["fire"] }]);
  });
});
//--------testing split
describe("orderAndUpdateList", () => {
  it("should sort an array of Pokémons in ascending order by number", () => {
    const inputArray = [
      { num: 4, name: "Charmander" },
      { num: 2, name: "Ivysaur" },
      { num: 1, name: "Bulbasaur" },
    ];
    const expectedResult = [
      { num: 1, name: "Bulbasaur" },
      { num: 2, name: "Ivysaur" },
      { num: 4, name: "Charmander" },
    ];
    const sortedArray = pokeData.orderAndUpdateList("num1-251", inputArray);
    expect(sortedArray).toEqual(expectedResult);
  });
  it("should sort an array of Pokémon in descending order by number", () => {
    const inputArray = [
      { num: 4, name: "Charmander" },
      { num: 2, name: "Ivysaur" },
      { num: 1, name: "Bulbasaur" },
    ];
    const expectedResult = [
      { num: 4, name: "Charmander" },
      { num: 2, name: "Ivysaur" },
      { num: 1, name: "Bulbasaur" },
    ];
    const sortedArray = pokeData.orderAndUpdateList("num251-1", inputArray);
    expect(sortedArray).toEqual(expectedResult);
  });
  it("should sort an array of Pokémon in alphabetical order (A-Z) by name", () => {
    const inputArray = [
      { num: 4, name: "Charmander" },
      { num: 2, name: "Ivysaur" },
      { num: 1, name: "Bulbasaur" },
    ];
    const expectedResult = [
      { num: 1, name: "Bulbasaur" },
      { num: 4, name: "Charmander" },
      { num: 2, name: "Ivysaur" },
    ];
    const sortedArray = pokeData.orderAndUpdateList("a-z", inputArray);
    // comportamiento deseado
    expect(sortedArray).toEqual(expectedResult);
  });
  it("should sort an array of Pokémon in reverse alphabetical order (Z-A) by name", () => {
    const inputArray = [
      { num: 4, name: "Charmander" },
      { num: 2, name: "Ivysaur" },
      { num: 1, name: "Bulbasaur" },
    ];
    const expectedResult = [
      { num: 2, name: "Ivysaur" },
      { num: 4, name: "Charmander" },
      { num: 1, name: "Bulbasaur" },
    ];
    const sortedArray = pokeData.orderAndUpdateList("z-a", inputArray);
    expect(sortedArray).toEqual(expectedResult);
  });
});
