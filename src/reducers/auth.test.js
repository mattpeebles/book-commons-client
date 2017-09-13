import {
	showLoginRegister,
	toggleLoginRegister,
	setAuthToken,
	setCurrentUser
} from '../actions/auth'

import {default as reducer} from './auth'
import {expect} from 'chai'

describe('auth reducer', () => {
	it('should return initial state if nothing is passed in', () => {
		let state;

		state = reducer(undefined, {type: '__UNKNOWN'})
		expect(state.loginRegisterForm.display).to.be.equal(false)
		expect(state.loginRegisterForm.form).to.be.equal('login')
		expect(state.navLinks).to.deep.equal(['Login/Register'])
		expect(state.loggedIn).to.equal(false)
		expect(state.authToken).to.equal(null)
		expect(state.currentUser).to.equal(null)

	})

	describe('showLoginRegister', () => 
		it('should change to passed in boolean', () => {
			let state;
			state = reducer(state, showLoginRegister(true))
			expect(state.loginRegisterForm.display).to.be.equal(true)
			state = reducer(state, showLoginRegister(false))
			expect(state.loginRegisterForm.display).to.be.equal(false)			
		})
	)

	describe('toggleLoginRegister', () => {
		it('should toggle betweem register/login form', () => {
			let state;
			state = reducer(state, toggleLoginRegister('login'))
			expect(state.loginRegisterForm.form).to.be.equal('login')

			state = reducer(state, toggleLoginRegister('register'))
			expect(state.loginRegisterForm.form).to.be.equal('register')

		})
	})

	describe('setAuthToken', () => {
		it('should set token', () => {
			const token = 'randomAlphaNumericString'
			let state;
			state = reducer(state, setAuthToken(token))
			expect(state.authToken).to.be.equal(token)
		})
	})

	describe('setCurrentUser', () => {
		const user = {
			id: 13149038134,
			email: 'chance@rapper.com',
			password: 'same drugs'
		};

		let state;

		state = reducer(state, setCurrentUser(user))
		expect(state.currentUser).to.be.equal(user)
		expect(state.loginRegisterForm.display).to.be.equal(false)
		expect(state.loggedIn).to.be.equal(true)
		expect(state.navLinks).to.deep.equal(['Wishlists', 'Logout'])
	})
})