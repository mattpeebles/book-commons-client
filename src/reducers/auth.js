import {SET_AUTH_TOKEN, SET_CURRENT_USER, SHOW_LOGIN_REGISTER,    
    TOGGLE_LOGIN_REGISTER,} from '../actions/auth';

const initialState = {
    loginRegisterForm: {display: false,
                         form: 'login'},
    navLinks: ['Login/Register'],
    loggedIn: false,
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null
};

export default function reducer(state = initialState, action) {
    if (action.type === SHOW_LOGIN_REGISTER){
        console.log(action.display)

        state = Object.assign({}, state, {
            loginRegisterForm: {
                display: action.display,
                form: 'login'
            }
        })

        return state
    }

    if (action.type === TOGGLE_LOGIN_REGISTER){
        state = Object.assign({}, state, {
            loginRegisterForm: {
                display: true, 
                form: action.form
            }
        });

        return state
    }   
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken,
        });
        
    } 

    if (action.type === SET_CURRENT_USER) {
        return Object.assign({}, state, {
            currentUser: action.currentUser,
            loginRegisterForm: {
                display: false
            },
            loggedIn: true,
            navLinks: ['Wishlists', 'Logout'],
        });
    }
    return state;
}