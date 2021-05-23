import {
    LOAD_DRIVES, DRIVE_ERROR, SAVE_ENROLL, ENROLL_ERROR, DELETE_DRIVE, DELETE_ERROR,
    CREATE_DRIVE, CREATE_DRIVE_ERROR
} from '../actions/types'

const initialState = {
    drives: [],
    drive: null,
    loading: true,
    msg: {},
    err: {}
}
const drives = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_DRIVES:
            return {
                ...state,
                drives: payload,
                loading: false
            }
        case SAVE_ENROLL:
        case DELETE_DRIVE:
            return {
                ...state,
                msg: payload,
                loading: false
            }
        case CREATE_DRIVE:
            return {
                ...state,
                drive: payload,
                laoding: false
            }
        case DRIVE_ERROR:
        case ENROLL_ERROR:
        case DELETE_ERROR:
        case CREATE_DRIVE_ERROR:
            return {
                ...state,
                err: payload,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}
export default drives