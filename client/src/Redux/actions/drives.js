import axios from 'axios';
import {
    LOAD_DRIVES, DRIVE_ERROR, SAVE_ENROLL, ENROLL_ERROR, DELETE_DRIVE, DELETE_ERROR,
    CREATE_DRIVE, CREATE_DRIVE_ERROR
} from './types'
//get all drive
export const getDrives = () => async dispatch => {
    try {
        const res = await axios.get('/api/drive')
        dispatch({
            type: LOAD_DRIVES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: DRIVE_ERROR,
            payload: error.msg
        })
    }
}
//Add enroll of placed student by id
export const saveEnroll = (id, enrollmentNo) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ id, enrollmentNo })
    try {
        const res = await axios.post('/api/drive/drive-placed-student/', body, config)
        dispatch({
            type: SAVE_ENROLL,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ENROLL_ERROR
        })
    }
}

//delete drive
export const deleteDrive = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ id });
    try {
        const res = await axios.post('/api/drive/delete', body, config)
        dispatch({
            type: DELETE_DRIVE,
            payload: res.data
        })
        dispatch(getDrives())
    } catch (error) {
        dispatch({
            type: DELETE_ERROR,
            payload: error.message
        })
    }
}
//Create new drive and send mail
export const createDrive = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = formData;
    try {
        const res = await axios.post('/api/drive/new-drive', body, config)
        dispatch({
            type: CREATE_DRIVE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: CREATE_DRIVE_ERROR,
            payload: error.message
        })
    }
}