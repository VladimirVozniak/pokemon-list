import {editingPokemonsProperty} from "./editingPokemonsPropetry";

export const cropArrayPokemons = (customArrayPokemon, page, countPokemon, displayOnlyFavorites) => {
    editingPokemonsProperty(customArrayPokemon, displayOnlyFavorites)

    const sortedArray = customArrayPokemon.sort((a, b) => a.id - b.id)

    return sortedArray.reduce(() => {
        const pokemonList = []
        let count = 0
        for (let i = sortedArray.length < page ? 0 : page; i < sortedArray.length; i++) {
            if (count < countPokemon) {
                count++
                pokemonList.push(sortedArray[i])
            } else
                break
        }
        return pokemonList
    }, [])
}