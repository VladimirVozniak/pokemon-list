import {useDispatch} from "react-redux";
import {changeUsername, changePassword} from "../../../Redux/login";
import {registration, standardSignIn} from "../../../API/authorization";

export const Input = (props) => {
    const {type, data} = props;
    const dispatch = useDispatch()

    return (
        <input
            className="input-text"
            type={type}
            placeholder={type === "password" ? "Password" : "Nickname"}
            onKeyUp={async e => {
                if (e.code === "Enter")
                    data.logUp ?
                        await registration(data.username, data.password) :
                        await standardSignIn(data.username, data.password, data.checked)
                type === "password" ? dispatch(changePassword(e.target.value)) : dispatch(changeUsername(e.target.value))
            }}
        />
    )
}