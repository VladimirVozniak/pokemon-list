import axios from "axios";
import {changeUsername} from "../Redux/profile";
import {message} from "antd";


export const registration = async (username, password) => {
    try {
        if (username === '' || password.length < 3 || password.length > 10)
            throw new Error()

        await axios.post('api/newUser',
            {username, password},
            {withCredentials: true})
        document.location.href = '/'
    } catch (e) {
        let errors = ''
        if (username === '')
            errors += 'Username must not be empty. '
        if (password.length < 3 || password.length > 10)
            errors += 'Password must be 4-10 characters long. '
        if (errors === '')
            errors = 'This user exists'

        message.info(errors, 3)
    }
}

export const standardSignIn = async (username, password, checked) => {
    try {
        await axios.post('api/login',
            {username, password, rememberMe: checked},
            {withCredentials: true})
        document.location.href = '/'
    } catch (e) {
        message.error('User not found', 3)
    }
}

export const signInViaAuth = async (data) => {
    try {
        await axios.post('api/auth',
            {id: data.googleId, mail: data.yu.nv},
            {withCredentials: true})
        document.location.href = '/'
    } catch (e) {
        message.error('Server error', 3)
    }
}

export const signAsGuest = () => {
    return async dispatch => {
        try {
            document.cookie = 'name=Guest; path=/; expires=false'
            document.location.href = '/'
            await dispatch(changeUsername('Guest (data will not be saved)'))
        } catch (e) {
            message.error('Login failed', 3)
        }
    }
}