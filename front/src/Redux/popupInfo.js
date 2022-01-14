import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "info",
    initialState: {
        popupInfo: {},
        show: false,
        currentPokemon: {}
    },
    reducers: {
        fetchInfo(state, action) {
            state.popupInfo = action.payload
        },
        showInfo(state, action) {
            state.show = action.payload !== undefined ? action.payload : !state.show;
        },
        addCurrentPokemon(state, action) {
            state.currentPokemon = action.payload
        },
        removeCurrentPokemon(state) {
            state.currentPokemon = {}
        }
    }
})

export default toolkitSlice.reducer
export const {fetchInfo, showInfo, addCurrentPokemon, removeCurrentPokemon} = toolkitSlice.actions