import { RECORDS_ERROR, GET_RECORDS } from './types'
import axios from 'axios'

export const getRecords = () => async dispatch => {
    try {
        const res = await axios.post('/api/page')
        dispatch({
            type: GET_RECORDS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: RECORDS_ERROR,
            payload: error.message
        })
    }
}