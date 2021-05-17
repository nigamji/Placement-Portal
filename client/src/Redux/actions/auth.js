import axios from 'axios'
import { LOAD_USER, LOGIN_FAIL, LOGIN_SUCCESS, AUTH_ERR, LOGOUT } from './types'
import setAuthToken from '../../utils/setAuthToken'
import { setAlert } from './alerts'

//load admin
export const loadAdmin = () => async dispatch => {
    if (localStorage.token)
        setAuthToken(localStorage.token)
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: LOAD_USER,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERR
        })
    }
}
//login admin
export const login = (email, password) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password })
    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadAdmin())
    } catch (error) {
        const errors = error.response.data.errors
        if (errors)
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'danger'))
            });
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

//logout
export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    })
}