import {
	showLoginRegister,
	toggleLoginRegister,
	registerRequest,
	registerSuccess,
	registerError,
	loginRequest,
	loginSuccess,
	loginError,
	logoutRequest,
	logoutSuccess,
	logoutError
} from '../actions/userActions'

import {default as userReducer} from './userReducer'
import {expect} from 'chai'

describe('USER Reducer', () => {
	const initialState = {
			navLinks: ['Login/Register'],
			loggedIn: false,
			loginRegisterForm: {display: false,
								 form: 'login'},
			loading : false,
			user: {},
			error: null
        }
        
	const user = {
		email: 'frank@ocean.com',
		password: 'chanel',
		wishlists: []
	}

	it('Should set the initial state when nothing is passed in', () => {
        const state = userReducer(undefined, {type: '__UNKNOWN'});
        expect(state).to.be.deep.equal(initialState);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = userReducer(currentState, {type: '__UNKNOWN'});
        expect(state).to.be.equal(currentState);
	});
	
	describe('showLoginRegister', () => 

		it('should change to passed in boolean', () => {
			let state;
			state = userReducer(state, showLoginRegister(true))
			expect(state.loginRegisterForm.display).to.be.equal(true)
			state = userReducer(state, showLoginRegister(false))
			expect(state.loginRegisterForm.display).to.be.equal(false)			
		})
	)

	describe('toggleLoginRegister', () => {
		it('should toggle betweem register/login form', () => {
			let state;
			state = userReducer(state, toggleLoginRegister('login'))
			expect(state.loginRegisterForm.form).to.be.equal('login')

			state = userReducer(state, toggleLoginRegister('register'))
			expect(state.loginRegisterForm.form).to.be.equal('register')

		})
	})

	describe('registerRequest', () => {
		it('should set loading as true', () => {
			const state = userReducer(undefined, registerRequest())

			expect(state.loading).to.be.equal(true)
		})
	})

	describe('registerSuccess', () => {
		it('should replace user object and update loginRegisterForm object', () => {
			const state = userReducer(undefined, registerSuccess(user))

			expect(state.user).to.be.equal(user)
			expect(state.loginRegisterForm.display).to.be.equal(true)
			expect(state.loginRegisterForm.form).to.be.equal('login')
		})
	})

	describe('loginRequest', () => {
		it('should set loading as true', () => {
			const state = userReducer(undefined, loginRequest())

			expect(state.loading).to.be.equal(true)
		})
	})

	describe('loginSuccess', () => {
		it('should update user object, navLinks, and close login/register form', () => {
			const state = userReducer(undefined, loginSuccess(user))

			expect(state.user).to.be.equal(user)
			expect(state.loginRegisterForm.display).to.be.equal(false)
			expect(state.navLinks).to.deep.equal(['Wishlists', 'Logout'])
		})
	})

	describe('logoutRequest', () => {
		it('should set loading to true', () => {
			const state = userReducer(undefined, logoutRequest())

			expect(state.loading).to.be.equal(true)
		})
	})

	describe('logoutSuccess', () => {
		it('should reset state to initial state', () => {
			const state = userReducer(undefined, logoutSuccess())

			expect(state).to.deep.equal(initialState)
		})
	})
})