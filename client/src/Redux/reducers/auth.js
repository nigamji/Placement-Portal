import { LOAD_USER, LOGIN_FAIL, LOGIN_SUCCESS, AUTH_ERR, LOGOUT } from '../actions/types'

const initialState = {
    admin: null,
    token: localStorage.getItem('token'),
    loading: true,
    isAuthenticated: false
};
const auth = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case LOAD_USER:
            return {
                ...state,
                admin: payload,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_FAIL:
        case AUTH_ERR:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                token: null,
                isAuthenticated: false,
                loading: false,
                admin: null
            }
        default:
            return {
                ...state
            }
    }
}
export default auth