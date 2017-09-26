import React from 'react'
import {shallow} from 'enzyme'

import {EmailForm} from './EmailForm'


describe('EmailForm', () => {
	it('should render EmailForm without crashing', () => {
		let callback = jest.fn()
		shallow(<EmailForm handleSubmit={callback} auth={{loading: false}} />)
	})
})