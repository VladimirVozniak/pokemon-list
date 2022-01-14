import {hoverCardToggle, hoverCardOff} from "../Redux/listCard";
import {addCurrentPokemon, fetchInfo, showInfo} from "../Redux/popupInfo";
import {pokemonInfo} from "../API/pokemonInfo";
import {message} from "antd";

const showPopupInfo = (animCard, pokemon) => {
    return async dispatch => {
        try {
            dispatch(showInfo())
            if (animCard) {
                setTimeout(() => dispatch(hoverCardToggle([pokemon.id, true])), 300)
                const generalPokInfo = Object.assign({}, await pokemonInfo(pokemon.id), pokemon)
                dispatch(fetchInfo(generalPokInfo))
                dispatch(addCurrentPokemon(pokemon))
            } else
                dispatch(hoverCardOff())
        } catch (e) {
            dispatch(showInfo(false))
            message.error('There was a problem opening or closing the modal window', 3)
            console.log(e)
        }
    }
}

export default showPopupInfo
