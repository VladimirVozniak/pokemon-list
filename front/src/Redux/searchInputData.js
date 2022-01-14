import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "search",
    initialState: {
        inputData: '',
    },
    reducers: {
        changeInputData(state, action) {
            state.inputData = action.payload
        },
    }
})

export default toolkitSlice.reducer
export const {changeInputData} = toolkitSlice.actions