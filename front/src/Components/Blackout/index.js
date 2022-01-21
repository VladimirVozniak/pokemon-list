import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import popInfo from "../../Logic/showPopupInfo";

function Blackout() {
    const showInfo = useSelector(state => state.info.show)
    const dispatch = useDispatch()

    return (
        <div
            className={`fogging ${showInfo ? "foggingOn" : "foggingOff"}`}
            onClick={() => dispatch(popInfo(false))}
        />
    )
}

export default Blackout;