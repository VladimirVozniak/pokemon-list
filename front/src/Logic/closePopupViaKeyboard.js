import popInfo from "./showPopupInfo";

export const closePopupViaKeyboard = () => {
    return dispatch => {
        window.addEventListener("keydown", (e) => {
            if (e.code === "Escape")
                dispatch(popInfo(false))
        })
    }
}