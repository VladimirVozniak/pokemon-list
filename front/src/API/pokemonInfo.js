import axios from "axios";
import {message} from "antd";

export const pokemonInfo = async (id) => {
    try {
        const pokemon = (await axios.get(process.env.REACT_APP_URL_POKEMON + Number(id))).data
        const species = (await axios.get(pokemon.species.url)).data

        const stats = []
        const types = []
        const abilities = []

        pokemon.stats.map(elem =>
            stats.push({
                [elem.stat.name]: elem.base_stat,
                effort: elem.effort
            }))

        pokemon.abilities.map(elem =>
            abilities.push({ability: elem.ability.name}))

        pokemon.types.map(elem =>
            types.push({type: elem.type.name}))

        return {
            general_info: {
                types,
                weight: pokemon.weight,
                growth_rate: species.growth_rate.name,
                generation: species.generation.name,
                color: species.color.name
            },
            stats,
            abilities
        }
    } catch (e) {
        message.error("There was a problem getting more information about a Pokemon", 5)
    }
}