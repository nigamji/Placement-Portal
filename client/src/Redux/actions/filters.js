import {
    GET_BRANCHES, BRANCH_ERROR, GET_COLLEGES, COLLEGE_ERROR, GET_DRIVE_FILTER, DRIVE_ERROR
} from './types'
import axios from 'axios'
export const getBranches = () => async dispatch => {
    try {
        const res = await axios.get('api/filter/get-branch');
        dispatch({
            type: GET_BRANCHES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: BRANCH_ERROR,
            payload: error.message
        })
    }
}
export const getColleges = () => async dispatch => {
    try {
        const res = await axios.get('api/filter/get-college');
        dispatch({
            type: GET_COLLEGES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: COLLEGE_ERROR,
            payload: error.message
        })
    }
}
export const getDriveFilter = () => async dispatch => {
    try {
        const res = await axios.get('api/filter/drive-id');
        dispatch({
            type: GET_DRIVE_FILTER,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: DRIVE_ERROR,
            payload: error.message
        })
    }
}