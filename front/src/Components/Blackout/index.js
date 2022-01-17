import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import popInfo from "../../Logic/showPopupInfo";
import {useEffect} from "react";

function Blackout() {
    const showInfo = useSelector(state => state.info.show)
    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.code === "Escape")
                dispatch(popInfo(false))
        })
    }, [])

    return (
        <div
            className={`fogging ${showInfo ? "foggingOn" : "foggingOff"}`}
            onClick={() => dispatch(popInfo(false))}
        />
    )
}

export default Blackout;