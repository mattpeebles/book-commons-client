import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import {resetWishlistState} from '../actions/wishlist'

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

export const SET_NAV_LINKS = 'SET_NAV_LINKS';
export const setNavLinks = navLinks => ({
    type: SET_NAV_LINKS,
    navLinks
})

const normalizeResponseErrors = res => {
    if (!res.ok) {
        if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
        ) {
            // It's a nice JSON error returned by us, so decode it
            return res.json().then(err => Promise.reject(err));
        }
        // It's a less informative error returned by express
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return res;
};

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken); 
    saveAuthToken(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(setCurrentUser(decodedToken.user));
};


export const demoUser = user => dispatch => {    
    console.log('demo')
    return fetch(`${API_BASE_URL}/users/demo`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        return res.json()
    })
}

export const registerUser = user => dispatch => {
    dispatch(registerUserRequest())
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
        dispatch(registerUserSuccesss())
        return res.json()
    })
    .catch(err => {
        const {reason, message, location} = err;
        if (reason === 'ValidationError') {
            dispatch(registerUserError(err))
            // Convert ValidationErrors into SubmissionErrors for Redux Form
            return Promise.reject(
                new SubmissionError({
                    [location]: message
                })
            );
        }
    });
};

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const registerUserRequest = () => ({
    type: REGISTER_USER_REQUEST
});

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const registerUserSuccesss = () => ({
    type: REGISTER_USER_SUCCESS
});

export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const registerUserError = (err) => ({
    type: REGISTER_USER_ERROR,
    err
});


export const login = (email, password) => dispatch => {
    // Base64 encode the string email:password, used in the basic
    // auth field
    console.log('logged in')
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
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({authToken}) => {
                storeAuthInfo(authToken, dispatch)
                dispatch(setNavLinks(['About', 'Wishlists', 'Signed in']))
            })
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
        .then(({authToken}) => {
            storeAuthInfo(authToken, dispatch)
            dispatch(setNavLinks(['About', 'Wishlists', 'Signed in']))
        })
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

export const logout = () => (dispatch) => {
    clearAuthToken()
    dispatch(resetWishlistState())
    dispatch(setAuthToken(null))
    dispatch(setCurrentUser(null))
    dispatch(setNavLinks(['About', 'Login/Register', 'Demo']))
};


export const CHANGE_USER_INFO_INIT = 'CHANGE_USER_INFO_INIT'
export const changeUserInfoInit = () => ({
    type: CHANGE_USER_INFO_INIT
})

export const changeUserInfo = infoObj => (dispatch, getState) => {
    dispatch(changeUserInfoRequest())
    let token = getState().auth.authToken;
    let userId = getState().auth.currentUser._id;
    let updateObj = {
        userId
    }

    Object.keys(infoObj).forEach(key => {
        updateObj[key] = infoObj[key]
    })

    return fetch(`${API_BASE_URL}/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(updateObj),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => {
        if (!res.ok) {
            if (
                res.headers.has('content-type') &&
                res.headers
                    .get('content-type')
                    .startsWith('application/json')
            ) {
                // It's a nice JSON error returned by us, so decode it
                return res.json().then(err => Promise.reject(err));
            }
            // It's a less informative error returned by express
            return Promise.reject({
                code: res.status,
                message: res.statusText
            });
        }
        return res
    })
    .then(res => res.json())
    .then(res => {
        storeAuthInfo(res.token, dispatch)
        dispatch(changeUserInfoSuccess())
    })
    .catch(err => {
        const {reason} = err;
        if (reason === 'ValidationError') {
           return dispatch(changeUserInfoError(err))
        }

        return dispatch(changeUserInfoError(err))
    });
};

export const CHANGE_USER_INFO_REQUEST = 'CHANGE_USER_INFO_REQUEST'
export const changeUserInfoRequest = () => ({
    type: CHANGE_USER_INFO_REQUEST
})

export const CHANGE_USER_INFO_SUCCESS = 'CHANGE_USER_INFO_SUCCESS'
export const changeUserInfoSuccess = () => ({
    type: CHANGE_USER_INFO_SUCCESS
})

export const CHANGE_USER_INFO_ERROR = 'CHANGE_USER_INFO_ERROR'
export const changeUserInfoError = err => ({
    type: CHANGE_USER_INFO_ERROR,
    err
})