import {arrayPokemon, bufferPokemonArray, loadData, notFound} from "../Redux/listCard";
import {changeSizePokemons} from "../Redux/pagination";
import {searchById} from "./searchById";
import {searchAllPokemons} from "./searchAllPokemons";
import {searchByTags} from "./searchByTags";
import {filterByName} from "../Logic/filterByName";
import {notFoundPokemon} from "../Logic/notFoundPokemon";
import {editingPokemonsProperty} from "../Logic/editingPokemonsPropetry";
import {cropArrayPokemons} from "../Logic/cropArrayPokemons";

const uniqBy = require("lodash.uniqby");

export const fetchData = (pokemonOffset, pageSize, selectedTags, searchInput, displayOnlyFavorites, favoritePokemons) => {
    return async dispatch => {
        let searchResultBuffer = []
        let defaultSizePokemon = false
        let pokemonNotFound = false
        const checkType = /^(0|[1-9]\d*)$/.test(searchInput)

        dispatch(loadData(true))
        if (searchInput !== "") {
            if (checkType) {
                //поиск по id
                try {
                    if (displayOnlyFavorites && !favoritePokemons.find(e => Number(e.id) === Number(searchInput)))
                        throw new Error()

                    searchResultBuffer.push(await searchById(searchInput))
                } catch (e) {
                    searchResultBuffer = notFoundPokemon(searchResultBuffer)
                    pokemonNotFound = true
                    dispatch(arrayPokemon(searchResultBuffer))
                }
            } else if (selectedTags && selectedTags.length === 0) {
                //поиск по имени
                try {
                    searchResultBuffer = filterByName(searchInput, displayOnlyFavorites ? favoritePokemons : await searchAllPokemons())

                    if (searchResultBuffer.length === 0)
                        throw new Error()
                } catch (e) {
                    searchResultBuffer = notFoundPokemon()
                    pokemonNotFound = true
                    dispatch(arrayPokemon(searchResultBuffer))
                }
            } else {
                //поиск по тегам и имени
                try {
                    searchResultBuffer = filterByName(searchInput, displayOnlyFavorites ?
                        favoritePokemons.filter((elem) => elem.types.find(type => selectedTags.find(tag => tag === type))) :
                        await searchByTags(selectedTags))

                    if (searchResultBuffer.length === 0)
                        throw new Error()
                } catch (e) {
                    searchResultBuffer = notFoundPokemon()
                    pokemonNotFound = true
                    dispatch(arrayPokemon(searchResultBuffer))
                }
            }
        } else if (selectedTags.length > 0) {
            try {
                //вывод каждого покемона по тегам
                searchResultBuffer = displayOnlyFavorites ?
                    favoritePokemons.filter((elem) => elem.types.find(type => selectedTags.find(tag => tag === type))) :
                    await searchByTags(selectedTags)

                if (searchResultBuffer.length === 0)
                    throw new Error()
            } catch (e) {
                searchResultBuffer = notFoundPokemon()
                pokemonNotFound = true
                dispatch(arrayPokemon(searchResultBuffer))
            }
        } else {
            try {
                //вывод всех покемонов
                if (displayOnlyFavorites) {
                    if (!favoritePokemons.length)
                        throw new Error()
                    searchResultBuffer = favoritePokemons
                } else {
                    searchResultBuffer = await searchAllPokemons(pageSize, pokemonOffset)
                    editingPokemonsProperty(searchResultBuffer)
                    defaultSizePokemon = true
                }
            } catch (e) {
                searchResultBuffer = notFoundPokemon()
                pokemonNotFound = true
                dispatch(arrayPokemon(searchResultBuffer))
            }
        }
        try {
            let unduplicated = []
            let pokemonList = []

            if (!defaultSizePokemon) {
                unduplicated = uniqBy(searchResultBuffer, "name")
                pokemonList = cropArrayPokemons(unduplicated, pokemonOffset, pageSize, displayOnlyFavorites)
            }

            dispatch(changeSizePokemons(defaultSizePokemon))
            dispatch(notFound(pokemonNotFound))
            dispatch(bufferPokemonArray(unduplicated))
            dispatch(arrayPokemon(defaultSizePokemon ? searchResultBuffer : pokemonList))
        } catch (e) {
            searchResultBuffer = notFoundPokemon()
            dispatch(notFound(true))
            dispatch(arrayPokemon(searchResultBuffer))
        }
        dispatch(loadData(false))
    }
}