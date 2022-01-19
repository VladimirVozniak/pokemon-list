import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import popInfo from "../../Logic/showPopupInfo";
import {useEffect} from "react";
import {closePopupViaKeyboard} from "../../Logic/closePopupViaKeyboard";

function Blackout() {
    const showInfo = useSelector(state => state.info.show)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closePopupViaKeyboard())
    }, [])

    return (
        <div
            className={`fogging ${showInfo ? "foggingOn" : "foggingOff"}`}
            onClick={() => dispatch(popInfo(false))}
        />
    )
}

export default Blackout;