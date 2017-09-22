import React from 'react'
import {shallow, mount} from 'enzyme'

import {LoginForm} from './LoginForm'

const mockLogin = {
    type: 'LOGIN',
};

jest.mock('../../actions/auth', () => Object.assign({},
    require.requireActual('../../actions/auth'),
    {
        login: jest.fn().mockImplementation(() => {
            return mockLogin;
        })
    }
));

const mockToggleLoginRegister = {
    type: 'TOGGLE_LOGIN_REGISTER',
    form: 'register'
};

jest.mock('../../actions/auth', () => Object.assign({},
    require.requireActual('../../actions/auth'),
    {
        toggleLoginRegister: jest.fn().mockImplementation(() => {
            return mockToggleLoginRegister;
        })
    }
));


describe('<LoginForm />', () => {
	it('should render without crashing', () => {
		const callback = jest.fn()
		shallow(<LoginForm handleSubmit={callback} auth={{error:null}}/>)
	})

	it('should dispatch login on submit', () => {
		const callback = jest.fn()
		const dispatch = jest.fn()
		const wrapper = shallow(<LoginForm handleSubmit={callback} dispatch={dispatch} />)
		wrapper.find('form').simulate('submit')
		expect(callback).toHaveBeenCalled()
	})

	it('should call dispatch toggleLoginRegister', () => {
		const callback = jest.fn()
		const dispatch = jest.fn()
		const wrapper = shallow(<LoginForm handleSubmit={callback} dispatch={dispatch} />)

		wrapper.find('.toggleButton').simulate('click')

		expect(dispatch).toHaveBeenCalledWith(mockToggleLoginRegister)
	})
})