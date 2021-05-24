import { GET_RECORDS, RECORDS_ERROR, ADD_RECORD, ADD_RECORD_ERROR, GET_RECORD, RECORD_ERROR } from '../actions/types'

const initialState = {
    records: [],
    record: null,
    totalPage: null,
    loading: true,
    msg: {},
    err: {}
}

const records = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_RECORDS:
            return {
                ...state,
                records: payload[0],
                loading: false,
                record: null,
                totalPage: payload[1].totalPage
            }
        case ADD_RECORD:
            return {
                ...state,
                msg: payload,
                loading: false
            }
        case GET_RECORD:
            return {
                ...state,
                record: payload,
                loading: false
            }
        case RECORDS_ERROR:
            return {
                ...state,
                record: null,
                loading: false
            }
        case ADD_RECORD_ERROR:
            return {
                ...state,
                err: payload,
                loading: false
            }
        case RECORDS_ERROR:
            return {
                ...state,
                records: [],
                loading: false,
                totalPage: 0
            }
        default:
            return {
                ...state
            }
    }
}
export default records