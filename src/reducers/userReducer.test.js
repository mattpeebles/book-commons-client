import {
	loginError,
	logoutRequest,
	logoutSuccess,
	logoutError
} from '../actions/userActions'

import {default as reducer} from './userReducer'
import {expect} from 'chai'

describe('USER Reducer', () => {
        
	const user = {
		email: 'frank@ocean.com',
		password: 'chanel',
		wishlists: []
	}

	it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state.loading).to.equal(false)
        expect(state.error).to.equal(null)
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).to.be.equal(currentState);
	});
})