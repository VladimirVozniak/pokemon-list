import axios from "axios";
import {message} from "antd";

export const searchByTags = async (selectedTags) => {
    try {
        const variousTypesPokemon = []

        for (const type of selectedTags) {
            const url = process.env.REACT_APP_URL_TYPE + type.toLowerCase()
            const pokemons = (await axios.get(url)).data.pokemon

            variousTypesPokemon.push(...pokemons.map(elem => {
                return elem.pokemon
            }))
        }
        return variousTypesPokemon
    } catch (e) {
        message.error("Failed to get Pokemon by tags", 3)
    }
}