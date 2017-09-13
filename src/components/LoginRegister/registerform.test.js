import React from 'react'
import {shallow, mount} from 'enzyme'

import {RegisterForm} from './RegisterForm'

const mockToggleLoginRegister = {
    type: 'TOGGLE_LOGIN_REGISTER',
    form: 'login'
};
jest.mock('../../actions/userActions', () => Object.assign({},
    require.requireActual('../../actions/userActions'),
    {
        toggleLoginRegister: jest.fn().mockImplementation(() => {
            return mockToggleLoginRegister;
        })
    }
));

describe('<RegisterForm />', () => {
	it('should render without crashing', () => {
		const callback = jest.fn()
		shallow(<RegisterForm handleSubmit={callback}/>)
	})

	it('should dispatch register on submit', () => {
		const callback = jest.fn()
		const dispatch = jest.fn()
		const wrapper = shallow(<RegisterForm handleSubmit={callback} dispatch={dispatch} />)
		wrapper.find('form').simulate('submit')
		expect(callback).toHaveBeenCalled()
	})

	it('should call dispatch toggleLoginRegister', () => {
		const callback = jest.fn()
		const dispatch = jest.fn()
		const wrapper = shallow(<RegisterForm handleSubmit={callback} dispatch={dispatch} />)

		wrapper.find('.toggleButton').simulate('click')
		expect(dispatch).toHaveBeenCalledWith(mockToggleLoginRegister)
	})
})