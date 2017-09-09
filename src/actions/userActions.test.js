import {SHOW_LOGIN_REGISTER, showLoginRegister, 
		TOGGLE_LOGIN_REGISTER, toggleLoginRegister,
		register, registerRequest, REGISTER_SUCCESS, registerSuccess, 
		login, loginRequest, LOGIN_SUCCESS, loginSuccess,
		logout, LOGOUT_SUCCESS, logoutSuccess} 
from './userActions'

describe('showLoginRegister', () => {
	it('should set display to boolean passed in', () => {
		const action = showLoginRegister(true)
		expect(action.type).toEqual(SHOW_LOGIN_REGISTER)
		expect(action.display).toEqual(true)	
	})
})

describe('toggleLoginRegister', () => {
	it('should set form to be equal to passed in value', () => {
		const action = toggleLoginRegister('form')
		expect(action.type).toEqual(TOGGLE_LOGIN_REGISTER)
		expect(action.form).toEqual('form')
	})
})

describe('registerSuccess', () => {
	it('should return the action', ()=> {
		const user = {
			email: 'frank@ocean.com',
			password: 'chanel',
			wishlists: []
		}	

		const action = registerSuccess(user)

		expect(action.type).toEqual(REGISTER_SUCCESS)
		expect(action.user).toEqual(user)
	})
})

describe('register', () => {
	it('should dispatch registerSuccess', () => {
		const user = {
			email: 'frank@ocean.com',
			password: 'chanel',
			wishlists: []
		}	

		const jsonUser = JSON.stringify(user)

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return user;
                }
            })
        );

		const dispatch = jest.fn()

		return register(user)(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith('https://quiet-cliffs-16571.herokuapp.com/users', 
												{"body": jsonUser, "headers": {"Content-Type": "application/json"},
												 "method": "POST"})
			expect(dispatch).toHaveBeenCalledWith(registerRequest())
		}).then(() => (dispatch) => {
			expect(dispatch).toHaveBeenCalledWith(registerSuccess(jsonUser))
		})

	})
})


describe('loginSuccess', () => {
	it('should return the action', () => {
		const user = {
			email: 'frank@ocean.com',
			password: 'chanel',
			wishlists: []
		}		
		const action = loginSuccess(user)

		expect(action.type).toEqual(LOGIN_SUCCESS)
		expect(action.user).toEqual(user)
	})
})

describe('register', () => {
	it('should dispatch registerSuccess', () => {
		const user = {
			email: 'frank@ocean.com',
			password: 'chanel',
			wishlists: []
		}	

		const jsonUser = JSON.stringify(user)

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return user;
                }
            })
        );

		const dispatch = jest.fn()

		return login(user)(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith('https://quiet-cliffs-16571.herokuapp.com/users/login', 
												{"body": jsonUser, "headers": {"Content-Type": "application/json"},
												 "method": "POST"})
			expect(dispatch).toHaveBeenCalledWith(loginRequest())
		}).then(() => (dispatch) => {
			expect(dispatch).toHaveBeenCalledWith(loginSuccess(jsonUser))
		})

	})
})

describe('logoutSuccess', () => {
	it('should return the action', () => {
		const user = {}
		const action = logoutSuccess(user)

		expect(action.type).toEqual(LOGOUT_SUCCESS)
		expect(action.user).toEqual(user)
	})
})

describe('logout', () => {
	it('should dispatch logoutSuccess', () => {
		const user = {}	

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return user;
                }
            })
        );

		const dispatch = jest.fn()

		return logout()(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith('https://quiet-cliffs-16571.herokuapp.com/users/logout')
			expect(dispatch).toHaveBeenCalledWith(logoutSuccess())
		})

	})
})
