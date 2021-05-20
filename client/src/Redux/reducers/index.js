import { combineReducers } from 'redux'
import alerts from './alerts'
import auth from './auth'
import drives from './drives'
import filters from './filters'
import records from './records'
export default combineReducers({
    alerts, auth, drives, filters, records
});