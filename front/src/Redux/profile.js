import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "profile",
    initialState: {
        username: '',
        favoritePokemons: [],
    },
    reducers: {
        changeUsername(state, action) {
            state.username = action.payload
        },
        allFavoritePokemons(state, action) {
            state.favoritePokemons = action.payload
        },
        addFavoritePokemons(state, action) {
            state.favoritePokemons.push(action.payload)
        },
        removeFavoritePokemons(state, action) {
            state.favoritePokemons = state.favoritePokemons.filter(elem => elem.id !== action.payload)
        },
    }
})

export const {
    changeUsername, allFavoritePokemons,
    addFavoritePokemons, removeFavoritePokemons
} = toolkitSlice.actions
export default toolkitSlice.reducer
