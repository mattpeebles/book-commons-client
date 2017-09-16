import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'

import reducer from './reducers/index' 
import userReducer from './reducers/userReducer'
import {reducer as formReducer} from 'redux-form'

export default createStore(
    combineReducers({
        form: formReducer,
        app: reducer,
        user: userReducer
    }), applyMiddleware(thunk))