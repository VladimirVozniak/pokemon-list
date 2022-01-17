import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        bufferPokemonArray: [],
        pokemonArray: [],
        notFound: false,
        loading: false,
        showFavoritesArray: false
    },
    reducers: {
        bufferPokemonArray(state, action) {
            state.bufferPokemonArray = action.payload
        },
        arrayPokemon(state, action) {
            state.pokemonArray = action.payload
        },
        hoverCardToggleOn(state, action) {
            state.pokemonArray = state.pokemonArray.map(elem => elem.id === action.payload ? {
                ...elem, hover: true
            } : elem)
        }, hoverCardToggleOff(state, action) {
            state.pokemonArray = state.pokemonArray.map(elem => elem.id === action.payload ? {
                ...elem, hover: false
            } : elem)
        },
        hoverCardOff(state) {
            state.pokemonArray = state.pokemonArray.map(elem => elem = {...elem, hover: false})
        },
        notFound(state, action) {
            state.notFound = action.payload
        },
        loadData(state, action) {
            state.loading = action.payload
        },
        showFavoritesArray(state) {
            state.showFavoritesArray = !state.showFavoritesArray
        },
        startLoading(state, action) {
            state.pokemonArray = state.pokemonArray.map(elem => elem.id === action.payload ? {
                ...elem, loading: true
            } : elem)
        },
        endLoading(state, action) {
            state.pokemonArray = state.pokemonArray.map(elem => elem.id === action.payload ? {
                ...elem, loading: false
            } : elem)
        }
    }
})

export const {
    bufferPokemonArray, arrayPokemon, hoverCardToggleOn, hoverCardToggleOff,
    hoverCardOff, notFound, loadData, showFavoritesArray,
    startLoading, endLoading
} = toolkitSlice.actions
export default toolkitSlice.reducer
