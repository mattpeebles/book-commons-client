import {SubmissionError} from 'redux-form';
const {API_BASE_URL} = require('../config');

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
       // .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};


// export const register = user => dispatch => {
// 	dispatch(registerRequest())
// 	return fetch(`${API_BASE_URL}/users`, {
// 		method: 'POST',
// 		body: JSON.stringify(user),
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// 	})
// 	 .then(res => {
//         if (!res.ok) {
//             if (
//                 res.headers.has('content-type') &&
//                 res.headers
//                     .get('content-type')
//                     .startsWith('application/json')
//             ) {
//                 // It's a nice JSON error returned by us, so decode it
//                 return res.json().then(err => Promise.reject(err));
//             }
//             // It's a less informative error returned by express
//             return Promise.reject({
//                 code: res.status,
//                 message: res.statusText
//             });
//         }
        
//         return res.json()
//     })
// 	 .then(res => {
// 	 	dispatch(registerSuccess(res.user))
// 	 })
// 	 .catch(err => {
// 	 	dispatch(registerError(err))
// 	 })
// }

// export const REGISTER_REQUEST = 'REGISTER_REQUEST'
// export const registerRequest = () => ({
// 	type: REGISTER_REQUEST
// })


// export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
// export const registerSuccess = (user) => ({
// 	type: REGISTER_SUCCESS,
// 	user
// })

// export const REGISTER_ERROR = "REGISTER_ERROR"
// export const registerError = (error) => ({
// 	type: REGISTER_ERROR,
// 	error
// })

// export const login = user => dispatch => {
// 	dispatch(loginRequest())
// 	return fetch(`${API_BASE_URL}/users/login`, {
// 		method: 'POST',
// 		body: JSON.stringify(user),
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// 	})
// 	 .then(res => {
//         if (!res.ok) {
//             if (
//                 res.headers.has('content-type') &&
//                 res.headers
//                     .get('content-type')
//                     .startsWith('application/json')
//             ) {
//                 // It's a nice JSON error returned by us, so decode it
//                 return res.json().then(err => Promise.reject(err));
//             }
//             // It's a less informative error returned by express
//             return Promise.reject({
//                 code: res.status,
//                 message: res.statusText
//             });
//         }
        
//         return res.json()
//     })
// 	 .then(res => {
// 	 	dispatch(loginSuccess(res.user))
// 	 })
// 	 .catch(err => {
// 	 	dispatch(loginError(err))
// 	 })
// }

// export const LOGIN_REQUEST = 'LOGIN_REQUEST'
// export const loginRequest = () => ({
// 	type: LOGIN_REQUEST
// })


// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const loginSuccess = (user) => ({
// 	type: LOGIN_SUCCESS,
// 	user
// })

// export const LOGIN_ERROR = "LOGIN_ERROR"
// export const loginError = (error) => ({
// 	type: LOGIN_ERROR,
// 	error
// })

export const logout = () => dispatch => {
	dispatch(logoutRequest())
	return fetch(`${API_BASE_URL}/users/logout`)
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
        
        return res.json()
    })
	 .then(res => {
	 	dispatch(logoutSuccess(res.user))
	 })
	 .catch(err => {
	 	dispatch(logoutError(err))
	 })
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const logoutRequest = () => ({
	type: LOGOUT_REQUEST
})


export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const logoutSuccess = (user) => ({
	type: LOGOUT_SUCCESS,
	user
})

export const LOGOUT_ERROR = "LOGOUT_ERROR"
export const logoutError = (error) => ({
	type: LOGOUT_ERROR,
	error
})