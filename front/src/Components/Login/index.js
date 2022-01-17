import "./LogIn.css";
import {useState} from "react";
import {Input} from "./Input";
import {useSelector} from "react-redux";
import {AuthList} from "./AuthList";
import {Checkbox} from "./Checkbox";
import {registration, standardSignIn} from "../../API/authorization";

function LogIn() {
    const username = useSelector(state => state.login.username)
    const password = useSelector(state => state.login.password)
    const [checked, setChecked] = useState(false)
    const [logUp, setLogUp] = useState(false)

    return (
        <div className="auth_window">
            <h1>{logUp ? "Registration" : "Login"}</h1>
            <div className="login-methods">
                <div className="first-login-method">
                    <Input type="text"/>
                    <Input type="password"/>
                    {!logUp && <Checkbox checked={checked} changeChecked={() => setChecked(!checked)}/>}
                    <button className="btn signIn"
                            onClick={async () => logUp ?
                                await registration(username, password) :
                                await standardSignIn(username, password, checked)}>{logUp ? "Sign up" : "Sign in"}</button>
                </div>
                {!logUp &&
                <>
                    <div className="vertical-dividing-line"/>
                    <div className="second-login-method">
                        <div className="auth-list">
                            <AuthList/>
                        </div>
                    </div>
                </>
                }
            </div>
            <div className="horizontal-dividing-line">
                <div className="line"/>
                <p className="horizontal-dividing-line_text">OR</p>
            </div>
            <button className="btn singUp" onClick={() => setLogUp(!logUp)}>{logUp ? "Sign in" : "Sign up"}</button>
        </div>
    )
}

export default LogIn;
