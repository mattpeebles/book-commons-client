import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'
import {routerReducer, routerMiddleware} from 'react-router-redux'

import reducer from './reducers/index' 
import authReducer from './reducers/auth'
import resultsReducer from './reducers/results'
import wishlistReducer from './reducers/wishlist'
import {loadAuthToken} from './local-storage'
import {setAuthToken} from './actions/auth'
import {reducer as formReducer} from 'redux-form'

export const history = createHistory()

let historyMid = routerMiddleware(history)

export const store = createStore(
    combineReducers({
        router: routerReducer,
        auth: authReducer,
        form: formReducer,
        results: resultsReducer,
        app: reducer,
        wishlist: wishlistReducer
    }), applyMiddleware(thunk, historyMid))

const authToken = loadAuthToken();
if (authToken){
	const token = authToken;
	store.dispatch(setAuthToken(token))
}