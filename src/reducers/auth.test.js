import {
	showLoginRegister,
	toggleLoginRegister,
	setAuthToken,
	setCurrentUser,
	setNavLinks,
	changeUserInfoInit, CHANGE_USER_INFO_INIT,
	changeUserInfoRequest, CHANGE_USER_INFO_REQUEST,
	changeUserInfoSuccess, CHANGE_USER_INFO_SUCCESS,
	changeUserInfoError, CHANGE_USER_INFO_ERROR

} from '../actions/auth';

import {default as reducer} from './auth';
import {expect} from 'chai';

describe('auth reducer', () => {
	it('should return initial state if nothing is passed in', () => {
		let state;

		state = reducer(undefined, {type: '__UNKNOWN'});
		expect(state.loginRegisterForm.display).to.be.equal(false);
		expect(state.loginRegisterForm.form).to.be.equal('login');
		expect(state.navLinks).to.deep.equal(['Login/Register']);
		expect(state.loggedIn).to.equal(false);
		expect(state.authToken).to.equal(null);
		expect(state.currentUser).to.equal(null);

	});

	describe('showLoginRegister', () => {
		it('should change to passed in boolean', () => {
			let state;
			state = reducer(state, showLoginRegister(true));
			expect(state.loginRegisterForm.display).to.be.equal(true);
			state = reducer(state, showLoginRegister(false));
			expect(state.loginRegisterForm.display).to.be.equal(false);		
		})
	});

	describe('toggleLoginRegister', () => {
		it('should toggle betweem register/login form', () => {
			let state;
			state = reducer(state, toggleLoginRegister('login'));
			expect(state.loginRegisterForm.form).to.be.equal('login');

			state = reducer(state, toggleLoginRegister('register'));
			expect(state.loginRegisterForm.form).to.be.equal('register');

		})
	});

	describe('setAuthToken', () => {
		it('should set token', () => {
			const token = 'randomAlphaNumericString';
			let state;
			state = reducer(state, setAuthToken(token));
			expect(state.authToken).to.be.equal(token);
		})
	});

	describe('setNavLinks', () => {
		it('should set navLinks', () => {
			const navLinks = ['Wishlists', 'Logout'];

			let state;
			state = reducer(state, setNavLinks(navLinks));

			expect(state.navLinks).to.deep.equal(navLinks);
		})
	});

	describe('setCurrentUser', () => {
		const user = {
			email: 'chance@rapper.com',
			wishlists: [],
			_id: 13149038134,
			password: 'same drugs'
		};

		let state;

		state = reducer(state, setCurrentUser(user))

		expect(state.currentUser.email).to.be.equal(user.email)
		expect(state.currentUser.wishlists).to.be.equal(user.wishlists)
		expect(state.currentUser._id).to.be.equal(user._id)
		expect(state.currentUser.password).to.be.equal(undefined)
		expect(state.loginRegisterForm.display).to.be.equal(false)
		expect(state.loggedIn).to.be.equal(true)
	});

	describe('changeUserInfoInit', () => {
		it('should set loading, error, and infoChange to initial values ', () => {
			let state;
			state = reducer(state, changeUserInfoInit());

			expect(state.loading).to.be.equal(false);
			expect(state.error).to.be.equal(null);
			expect(state.userInfoChanged).to.be.equal(false);
		})
	});

	describe('changeUserInfoRequest', () => {
		it('should set loading to true', () => {
			let state;
			state = reducer(state, changeUserInfoRequest());

			expect(state.loading).to.be.equal(true);
			expect(state.error).to.be.equal(null);
			expect(state.userInfoChanged).to.be.equal(false);
		})
	});

	describe('changeUserInfoSuccess', () => {
		it('should set userInfoChanged to true', () => {
			let state;
			state = reducer(state, changeUserInfoSuccess());

			expect(state.loading).to.be.equal(false);
			expect(state.error).to.be.equal(null);
			expect(state.userInfoChanged).to.be.equal(true);
		})
	});

	describe('changeUserInfoError', () => {
		it('should set error to err', () => {
			let state;
			let err = 'Invalid type';

			state = reducer(state, changeUserInfoError(err));
			expect(state.loading).to.be.equal(false);
			expect(state.error).to.be.equal(err);
			expect(state.userInfoChanged).to.be.equal(false);
		})
	});		
})