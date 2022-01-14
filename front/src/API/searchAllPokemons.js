import axios from "axios";
import {message} from "antd";

export const searchAllPokemons = async (pageSize, pokemonOffset) => {
    try {
        const url = process.env.REACT_APP_URL_POKEMON + `?limit=${!!pageSize ? pageSize : 1118}&offset=${!!pokemonOffset ? pokemonOffset : 0}`
        const pokName = await axios.get(url)
        const searchResultBuffer = []
        pokName.data.results.forEach(elem => searchResultBuffer.push(elem))

        return searchResultBuffer
    }catch (e) {
        message.error('Failed to get data about all Pokemon', 3)
    }
}