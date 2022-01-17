import axios from "axios";
import {message} from "antd";

export const searchById = async (searchInput) => {
    try {
        const url = process.env.REACT_APP_URL_POKEMON + searchInput
        const pokId = (await axios.get(url)).data

        return {
            name: pokId.name,
            url: process.env.REACT_APP_URL_POKEMON + pokId.id
        }
    } catch (e) {
        message.error("Failed to get Pokemon", 3)
    }
}