import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './Redux/reducers/index'

const initialState = {};
const middleware = [thunk];
const configMid = composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(rootReducer, initialState, configMid);


export default store;