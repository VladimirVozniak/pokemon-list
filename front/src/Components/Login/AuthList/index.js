import {GoogleLogin} from "react-google-login";
import {signAsGuest, signInViaAuth} from "../../../API/authorization";
import {useDispatch} from "react-redux";
import {message} from "antd";

export const AuthList = (props) => {
    const {logUp, animation} = props
    const dispatch = useDispatch()

    console.log({animation, logUp})
    return (
        <>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                onSuccess={async data => await signInViaAuth(data)}
                onFailure={(err) => {
                    console.error(err)
                    message.error("Google login error", 3)
                }}
                isSignedIn={false}
                render={renderProps => (
                    <button className={`btn auth_btn ${animation ? logUp ? "auth-reg_btn" : "auth_btn-animation" : ""}`}
                            onClick={renderProps.onClick}>
                        <div className="auth_img"
                             style={{background: `url(https://img.icons8.com/color/48/000000/google-logo.png) center /contain no-repeat`}}
                        />
                        <p className="auth_text">Login via Google</p>
                    </button>
                )}
            />
            <button className={`btn auth_btn ${animation ? logUp ? "auth-reg_btn" : "auth_btn-animation" : ""}`} onClick={() => dispatch(signAsGuest())}>
                <div className="auth_img"
                     style={{background: `url(https://img.icons8.com/ios/48/000000/who.png) center /contain no-repeat`}}
                />
                <p className="auth_text">Login as guest</p>
            </button>
        </>
    )
}