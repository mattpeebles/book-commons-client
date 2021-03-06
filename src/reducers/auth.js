import {SET_AUTH_TOKEN, SET_CURRENT_USER, SHOW_LOGIN_REGISTER,    
    TOGGLE_LOGIN_REGISTER, SET_NAV_LINKS, 
    REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR,
    CHANGE_USER_INFO_INIT, CHANGE_USER_INFO_REQUEST, CHANGE_USER_INFO_SUCCESS, CHANGE_USER_INFO_ERROR
} from '../actions/auth';

const initialState = {
    error: null,
    loading: false,
    userInfoChanged: null,
    loginRegisterForm: {display: false,
                         form: 'login'},
    navLinks: ['About', 'Login/Register', 'Demo'],
    loggedIn: false,
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null
};

export default function reducer(state = initialState, action) {
    if (action.type === SHOW_LOGIN_REGISTER){
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
        
        if(action.currentUser === null){
            return Object.assign({}, state, {
                currentUser: null,
                loginRegisterForm: {
                    display: false
                },
                loggedIn: false
            })
        }
            //if currentUser is set to null, logout was called
            //sets logged in to false
        let {email, wishlists} = action.currentUser
        let _id = (action.currentUser.id === undefined) ? action.currentUser._id : action.currentUser.id
        let type = (action.currentUser.type === undefined) ? 'user' : 'demo'

        return Object.assign({}, state, {
            currentUser: {
                email,
                wishlists,
                _id,
                type
            },
            loginRegisterForm: {
                display: false
            },
            loggedIn: true
        });
    }

    if(action.type === SET_NAV_LINKS){
        return Object.assign({}, state, {
            navLinks: action.navLinks,
        })
    }

    if(action.type === REGISTER_USER_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null,
        })
    }

    if(action.type === REGISTER_USER_SUCCESS){
        return Object.assign({}, state, {
            loading: false,
            error: null,
        })
    }

    if(action.type === REGISTER_USER_ERROR){
        return Object.assign({}, state, {
            error: action.err,
            loading: false,
        })
    }

    if(action.type === CHANGE_USER_INFO_INIT){
        return Object.assign({}, state, {
            loading: false,
            error: null,
            userInfoChanged: false,
        })
    }

    if(action.type === CHANGE_USER_INFO_REQUEST){
        return Object.assign({}, state, {
            loading: true,
            error: null,
            userInfoChanged: false,
        })
    }

    if(action.type === CHANGE_USER_INFO_SUCCESS){
        return Object.assign({}, state, {
            loading: false,
            error: null,
            userInfoChanged: true
        })
    }

    if(action.type === CHANGE_USER_INFO_ERROR){
        return Object.assign({}, state, {
            error: action.err,
            loading: false,
            userInfoChanged: false
        })
    }

    return state;
}