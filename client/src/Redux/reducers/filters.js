import {
    BRANCH_ERROR, GET_BRANCHES, GET_COLLEGES, COLLEGE_ERROR, GET_DRIVE_FILTER,
    DRIVE_FILTER_ERROR
} from '../actions/types'

const initialState = {
    branch: [],
    college: [],
    drives: [],
    loadingBranch: true,
    loadingCollege: true,
    loadingDrives: true,
    err: {}
}
const filters = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_BRANCHES:
            return {
                ...state,
                branch: payload,
                loadingBranch: false
            }
        case GET_COLLEGES:
            return {
                ...state,
                college: payload,
                loadingCollege: false
            }
        case GET_DRIVE_FILTER:
            return {
                ...state,
                drives: payload,
                loadingDrives: false
            }
        case BRANCH_ERROR:
            return {
                ...state,
                branch: [],
                err: payload,
                loadingBranch: false
            }
        case COLLEGE_ERROR:
            return {
                ...state,
                college: [],
                err: payload,
                loadingCollege: false
            }
        case DRIVE_FILTER_ERROR:
            return {
                ...state,
                drives: [],
                err: payload,
                loadingDrives: false
            }
        default:
            return {
                ...state
            }
    }
}
export default filters;