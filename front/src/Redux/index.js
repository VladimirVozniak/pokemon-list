import {combineReducers, configureStore} from "@reduxjs/toolkit";
import fetchPokemon from "./listCard";
import fetchInfo from "./popupInfo";
import tags from "./tags";
import pagination from "./pagination";
import search from "./searchInputData"
import login from "./login";
import profile from "./profile";

const rootReducer = combineReducers({
    toolkit: fetchPokemon,
    info: fetchInfo,
    tags,
    pagination,
    search,
    login,
    profile
})

export const store = configureStore({
    reducer: rootReducer
})