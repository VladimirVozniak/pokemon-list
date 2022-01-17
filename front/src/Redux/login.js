import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "login",
    initialState: {
        username: "",
        password: "",
        rememberMe: false
    },
    reducers: {
        changeUsername(state, action) {
            state.username = action.payload
        },
        changePassword(state, action) {
            state.password = action.payload
        },
        checkRememberMe(state, action) {
            state.rememberMe = action.payload
        }
    }
})

export const {changeUsername, changePassword, checkRememberMe} = toolkitSlice.actions
export default toolkitSlice.reducer
