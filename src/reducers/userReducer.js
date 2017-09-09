import {
	SHOW_LOGIN_REGISTER,	
	TOGGLE_LOGIN_REGISTER,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_ERROR,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	LOGOUT_ERROR
} from '../actions/userActions'


const initialState = {
	navLinks: ['Login/Register'],
	loggedIn: false,
	loginRegisterForm: {display: false,
						 form: 'login'},
	loading : false,
	user: {},
	error: null
}

export default (state, action) => {
	state = state || initialState;

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

	if(action.type === REGISTER_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null
		})
	}

	if(action.type === REGISTER_SUCCESS){
		return Object.assign({}, state, {
			user: action.user,
			loading: false,
			error: null,
			loginRegisterForm: {
				display: true,
				form: 'login'
			}
		})
	}

	if (action.type === REGISTER_ERROR){
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		})
	}

	if(action.type === LOGIN_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null
		})
	}

	if(action.type === LOGIN_SUCCESS){
		return Object.assign({}, state, {
			user: action.user,
			loading: false,
			error: null,
			loginRegisterForm: {display: false,
						 form: 'login'},
			navLinks: ['Wishlists', 'Logout']
		})
	}

	if (action.type === LOGIN_ERROR){
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		})
	}

	if(action.type === LOGOUT_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null
		})
	}

	if(action.type === LOGOUT_SUCCESS){
		return Object.assign({}, state, {
			user: {},
			loading: false,
			error: null,
			loginRegisterForm: {display: false,
						 form: 'login'},
			navLinks: ['Login/Register']
		})
	}

	if (action.type === LOGOUT_ERROR){
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		})
	}

	return state;
}