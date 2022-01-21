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
    const [animation, setAnimation] = useState(false)

    const data = {username, password, checked, logUp}

    return (
        <div className="auth-window">
            <h1>{logUp ? "Registration" : "Login"}</h1>
            <div className={`login-methods ${logUp && "login-methods-reg"}`}>
                <div className="first-login-method">
                    <Input type="text" data={data}/>
                    <Input type="password" data={data}/>
                    <Checkbox checked={checked} changeChecked={() => setChecked(!checked)} logUp={logUp}/>
                    <button className="btn signIn"
                            onClick={async () => logUp ?
                                await registration(username, password) :
                                await standardSignIn(username, password, checked)}>{logUp ? "Sign up" : "Sign in"}</button>
                </div>
                <div className={`vertical-dividing-line ${logUp && "vertical-dividing-line-reg"}`}/>
                <div className={`second-login-method ${logUp && "second-login-method-reg"}`}>
                    <AuthList logUp={logUp} animation={animation}/>
                </div>
            </div>
            <div className="horizontal-dividing-line">
                <div className="line"/>
                <p className="horizontal-dividing-line_text">OR</p>
            </div>
            <button className="btn singUp" onClick={() => {
                setLogUp(!logUp)
                setAnimation(true)
            }}>{logUp ? "Sign in" : "Sign up"}</button>
        </div>
    )
}

export default LogIn;