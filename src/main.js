import pokedex from "./data.js"
//console.log(pokedex.pokemon[0].type[0], pokedex.pokemon[0].type[1])
// console.log(pokedex.pokemon[6].name, pokedex.pokemon[6].tyoe[0])

function pokemonHtml(data) {
    let html = ''
    data.forEach(unoporuno => {
        html = html + `
    <div>
        <img src="${unoporuno.img}" alt="${unoporuno.name}"> >
        <p>"${unoporuno.name}</p>
    </div>
    `
    })

    return html;
}

const root = document.getElementById('root')
root.innerHTML = pokemonHtml(pokedex.pokemon)
