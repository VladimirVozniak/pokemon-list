import {hoverCardToggle} from "../Redux/listCard";

export const hoverCard = (id, action) => {
    return dispatch => {
        try {
            dispatch(hoverCardToggle([id, action]))
        } catch (e) {
            console.log(e)
        }
    }
}