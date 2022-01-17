import {useDispatch} from "react-redux";
import {changeUsername, changePassword} from "../../../Redux/login";

export const Input = (props) => {
    const {type} = props
    const dispatch = useDispatch()

    return (
        <input
            className="input-text"
            type={type}
            placeholder={type === "password" ? "Password" : "Nickname"}
            onKeyUp={e => type === "password" ? dispatch(changePassword(e.target.value)) : dispatch(changeUsername(e.target.value))}/>
    )
}