import {hoverCardOff, hoverCardToggleOn, loadData} from "../Redux/listCard";
import {addCurrentPokemon, fetchInfo, showInfo} from "../Redux/popupInfo";
import {pokemonInfo} from "../API/pokemonInfo";
import {message} from "antd";

const showPopupInfo = (animCard, pokemon) => {
    return async dispatch => {
        try {
            if (animCard) {
                dispatch(loadData(true))
                const generalPokInfo = Object.assign({}, await pokemonInfo(pokemon.id), pokemon)
                dispatch(hoverCardToggleOn(pokemon.id))
                dispatch(fetchInfo(generalPokInfo))
                dispatch(addCurrentPokemon(pokemon))
                setTimeout(() => dispatch(loadData(false)), 200)
            } else
                dispatch(hoverCardOff())
            dispatch(showInfo(animCard))
        } catch (e) {
            dispatch(showInfo(false))
            message.error('There was a problem opening or closing the modal window', 3)
            console.log(e)
        }
    }
}

export default showPopupInfo

// если у одного из пользователя есть какой-то покемон, то у другого пользователя при выборе этого же покемона вылетает
// на страницу логина