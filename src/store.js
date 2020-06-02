import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

let initialState = {}
const middleware = [thunk]
const store = createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store