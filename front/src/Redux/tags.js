import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "tags",
    initialState: {
        selectedTags: []
    },
    reducers: {
        newSelectedTags(state, action) {
            state.selectedTags = action.payload
        },
    }
})

export default toolkitSlice.reducer
export const {newSelectedTags} = toolkitSlice.actions