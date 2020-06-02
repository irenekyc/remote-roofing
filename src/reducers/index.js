import {combineReducers} from 'redux'
import authReducer from './authReducer'
import dataReducer from './dataReducer'
import webReducer from './webReducer'

const allReducers = combineReducers({
    auth: authReducer,
    data: dataReducer,
    web: webReducer
})

export default allReducers