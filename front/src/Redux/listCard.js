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
        hoverCardToggle(state, action) {
            state.pokemonArray = state.pokemonArray.map(elem => elem.id === action.payload[0] ? {
                ...elem, hover: action.payload[1]
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
        }
    }
})

export const {
    bufferPokemonArray, arrayPokemon, hoverCardToggle,
    hoverCardOff, notFound, loadData, showFavoritesArray
} = toolkitSlice.actions
export default toolkitSlice.reducer
