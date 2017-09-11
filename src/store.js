import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'

import reducer from './reducers/index' 
import authReducer from './reducers/auth'
import userReducer from './reducers/userReducer'
import wishlistReducer from './reducers/wishlistReducer'
import {loadAuthToken} from './local-storage'
import {setAuthToken} from './actions/auth'
import {reducer as formReducer} from 'redux-form'

const store = createStore(
    combineReducers({
        auth: authReducer,
        form: formReducer,
        app: reducer,
        user: userReducer,
        wishlist: wishlistReducer
    }), applyMiddleware(thunk))

const authToken = loadAuthToken();
if (authToken){
	const token = authToken;
	store.dispatch(setAuthToken(token))
}

export default store;