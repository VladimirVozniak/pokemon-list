import {hoverCardToggleOff, hoverCardToggleOn} from "../Redux/listCard";

export const hoverCardOn = (id) => {
    return dispatch => {
        try {
            dispatch(hoverCardToggleOn(id))
        } catch (e) {
            console.log(e)
        }
    }
}

export const hoverCardOff = (id) => {
    return dispatch => {
        try {
            dispatch(hoverCardToggleOff(id))
        } catch (e) {
            console.log(e)
        }
    }
}