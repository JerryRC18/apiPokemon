console.log("conectado...")
const lista = document.getElementById('lista')
const infoPokemon = document.getElementById('infoPokemon').content
const fragment = document.createDocumentFragment()

//Elementos del filtro

const btnFiltrar = document.getElementById('btnFiltrar')
const input = document.getElementById('filtroPokemones')


let pokemones = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchPokemones()
})

btnFiltrar.addEventListener('click', () => {
    if(input.value > 0 && input.value){
        console.log('click en el filtro', input.value)
    }
})

const fetchPokemones = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000")
        .then (async(res) => {
            //console.log('res', await res.json())
            let data = await res.json()
            pokemones = await data.results
            //console.log('pokemones', pokemones)
            pintarPokemones()
        })
        .catch (error => {
            console.log('error', error)
        })
}

const pintarPokemones = () => {
    pokemones.forEach((item, index) => {
        //console.log(item)
        infoPokemon.querySelectorAll('p')[0].textContent = item.name
        infoPokemon.querySelectorAll('p')[1].textContent = item.url
        infoPokemon.querySelector('button').dataset.id = index + 1

        const clone = infoPokemon.cloneNode(true)
        fragment.appendChild(clone)
    })
    lista.appendChild(fragment)

}
