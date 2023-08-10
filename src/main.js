import pokedex from "./data.js";
//console.log(pokedex.pokemon[0].type[0], pokedex.pokemon[0].type[1])
// console.log(pokedex.pokemon[6].name, pokedex.pokemon[6].tyoe[0])

function pokemonHtml(data) {
  let html = "";
  data.forEach((pokemon) => {
    html =
      html +
      `
    <div class= "pokemon-card">  
        <img src="${pokemon.img}" alt="${pokemon.name}"> 
        <p>${pokemon.name}</p>
    </div>
    `;
  });

  return html;
}

const section = document.getElementById("pokemon-grid");
section.innerHTML = pokemonHtml(pokedex.pokemon);
