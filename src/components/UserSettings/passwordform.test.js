import React from 'react'
import {shallow} from 'enzyme'

import {PasswordForm} from './PasswordForm'


describe('PasswordForm', () => {
	it('should render PasswordForm without crashing', () => {
		let callback = jest.fn()
		shallow(<PasswordForm handleSubmit={callback} auth={{loading: false}} />)
	})
})