import {SHOW_LOGIN_REGISTER, showLoginRegister, 
		TOGGLE_LOGIN_REGISTER, toggleLoginRegister,
		SET_AUTH_TOKEN, setAuthToken,
		SET_NAV_LINKS, setNavLinks,
		SET_CURRENT_USER, setCurrentUser,
		login, refreshAuthToken
		} 
from './auth'

const {API_BASE_URL} = require('../config');



describe('showLoginRegister', () => {
	it('should set display to boolean passed in', () => {
		const action = showLoginRegister(true)
		expect(action.type).toEqual(SHOW_LOGIN_REGISTER)
		expect(action.display).toEqual(true)	
	})
});

describe('toggleLoginRegister', () => {
	it('should set form to be equal to passed in value', () => {
		const action = toggleLoginRegister('form')
		expect(action.type).toEqual(TOGGLE_LOGIN_REGISTER)
		expect(action.form).toEqual('form')
	})
});

describe('setAuthToken', () => {
	it('should set authToken to received token', () => {
		let token = 'randomAlphanumericString'
		const action = setAuthToken(token)

		expect(action.type).toEqual(SET_AUTH_TOKEN)
		expect(action.authToken).toEqual(token)
	})
});

describe('setCurrentUser', () => {
	it('should set currentUser as object passed in', () => {
		let user = {
			email: 'francis@thelights.com',
			password: 'friends'
		}

		const action = setCurrentUser(user)

		expect(action.type).toEqual(SET_CURRENT_USER)
		expect(action.currentUser).toEqual(user)
	})
});

describe('setNavLinks', () => {
	it('should set navLinks to array passed in', () => {
		let navLinks = ['Login/Register']

		const action = setNavLinks(navLinks)

		expect(action.type).toEqual(SET_NAV_LINKS)
		expect(action.navLinks).toEqual(navLinks)

	})
})

describe('login', () => {
	it('should log user in by call storeAuthInfo', () => {

		let email = 'francis@thelights.com'
		let password = 'friends'

		let token = btoa(`${email}:${password}`)

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json() {
					return token
				}
			})
		);

		const dispatch = jest.fn()

		return login(email, password)(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/login`, {"headers": {"Authorization": `Basic ${token}`}, "method": "POST"})
		})
	})
});

describe('refreshAuthToken', () => {
	it('should get a new authToken when old is close to expiring', () => {
		const token = 'randomAlphanumericString'

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json(){
					return token
				}
			})
		);

		const dispatch = jest.fn()
		
		function getState(){
			return {
				auth: {
					authToken: token
				}
			} 
		}

		return refreshAuthToken()(dispatch, getState).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/refresh`, {"headers": {"Authorization": `Bearer ${token}`}, "method": "POST"})
		})

	})
})