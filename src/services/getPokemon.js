import axios from "axios";

export function getPokemon(newPokemon){
    console.log(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`)
    return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`)
        .then((response) => {
        return response.data
    }
    )

}