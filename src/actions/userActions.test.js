import { registerUser, logout, LOGOUT_SUCCESS, logoutSuccess} 
from './userActions'

const {API_BASE_URL} = require('../config');


describe('registerUser', () => {
	it('should register user', () => {
		let user = {
			email: 'kungfu@kenny.com',
			password: 'loyalty'
		};

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json() {
					return user
				}
			})
		);

		const dispatch = jest.fn()
	
		return registerUser()(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`, {"body": undefined, "headers": {"content-type": "application/json"}, "method": "POST"})
		})

	})
})
