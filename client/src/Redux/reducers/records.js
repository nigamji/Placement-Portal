import { GET_RECORDS, RECORDS_ERROR } from '../actions/types'

const initialState = {
    records: [],
    record: null,
    totalPage: null,
    loading: true
}

const records = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_RECORDS:
            return {
                ...state,
                records: payload[0],
                loading: false,
                totalPage: payload.totalPage
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