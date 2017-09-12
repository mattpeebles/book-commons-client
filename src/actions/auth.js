import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
//import {normalizeResponseErrors} from './utils';
import {saveAuthToken, clearAuthToken} from '../local-storage';


export const SHOW_LOGIN_REGISTER = 'SHOW_LOGIN_REGISTER'
export const showLoginRegister = (show) => ({
    type: SHOW_LOGIN_REGISTER,
    display: show
})

export const TOGGLE_LOGIN_REGISTER = 'TOGGLE_LOGIN_REGISTER'
export const toggleLoginRegister = (form) => ({
    type: TOGGLE_LOGIN_REGISTER,
    form: form
})

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = currentUser => ({
    type: SET_CURRENT_USER,
    currentUser
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(setCurrentUser(decodedToken.user));
    saveAuthToken(authToken);
};

export const login = (email, password) => dispatch => {
    // Base64 encode the string email:password, used in the basic
    // auth field
    const token = btoa(`${email}:${password}`);
    
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                // Provide our email and password as login credentials
                Authorization: `Basic ${token}`
            }
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            //.then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({authToken}) => storeAuthInfo(authToken, dispatch))
            .catch(err => {
                const {code} = err;
                if (code === 401) {
                    // Could not authenticate, so return a SubmissionError for Redux
                    // Form
                    return Promise.reject(
                        new SubmissionError({
                            _error: 'Incorrect username or password'
                        })
                    );
                }
            })
    );
};

export const refreshAuthToken = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
        //.then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            const {code} = err;
            if (code === 401) {
                // We couldn't get a refresh token because our current credentials
                // are invalid or expired, so clear them and sign us out
                dispatch(setCurrentUser(null));
                dispatch(setAuthToken(null));
                clearAuthToken(authToken);
            }
        });
};