import axios from "axios";
import {addFavoritePokemons, allFavoritePokemons, removeFavoritePokemons} from "../Redux/profile";
import {exitAccount} from "../Logic/exitAccount";
import {endLoading, startLoading} from "../Redux/listCard";
import {message} from "antd";

export const getFavoritePokemons = () => {
    return async dispatch => {
        try {
            const favoritesPokemons = await axios.post("api/getCard",
                {},
                {
                    withCredentials: true,
                    headers: {"Authorization": `Bearer ${document.cookie.split(";").find(elem => elem.split("=")[0] === " token")}`}
                })
            if (favoritesPokemons)
                dispatch(allFavoritePokemons(favoritesPokemons.data))
            else
                throw new Error()
        } catch (e) {
            exitAccount()
        }
    }
}

export const changeFavoritePokemons = (pokemon, action, username) => {
    return async dispatch => {
        try {
            if (username === "Guest")
                message.warning({
                    content: "Favorites don't work in guest mode",
                    duration: 3, className: "custom-message-warning"
                })
            else {
                dispatch(startLoading(pokemon.id))
                const pokemonInfo = (await axios.get(process.env.REACT_APP_URL_POKEMON + Number(pokemon.id))).data
                let types = []

                pokemonInfo.types.map(elem =>
                    types.push(elem.type.name))

                const newPokemonProperty = {id: pokemon.id, name: pokemon.name, pic: pokemon.pic, types}

                const result = await axios.post("api/changeCard",
                    {pokemon: newPokemonProperty},
                    {
                        withCredentials: true,
                        headers: {"Authorization": `Bearer ${document.cookie.split(";").find(elem => elem.split("=")[0] === " token")}`}
                    })

                if (result.data)
                    action === "add" ?
                        dispatch(addFavoritePokemons(result.data.data)) :
                        dispatch(removeFavoritePokemons(newPokemonProperty.id))
                else
                    throw new Error()
            }
        } catch (e) {
            exitAccount()
        } finally {
            dispatch(endLoading(pokemon.id))
        }
    }
}