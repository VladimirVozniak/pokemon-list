import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "pagination",
    initialState: {
        defaultSizePokemons: true,
        pokemonOffset: 0,
        pageSize: 20
    },
    reducers: {
        changeSizePokemons(state, action) {
            state.defaultSizePokemons = action.payload
        },
        newPageSize(state, action) {
            state.pokemonOffset = action.payload
        },
        newPage(state, action) {
            state.pageSize = action.payload
        }
    }
})

export default toolkitSlice.reducer
export const {changeSizePokemons, newPage, newPageSize} = toolkitSlice.actions