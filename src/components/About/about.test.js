import React from 'react'
import {shallow} from 'enzyme'

import {About} from './About'


describe('About', () => {
	it('should render About without crashing', () => {
		shallow(<About />)
	})

	it('should call call function on got it click', () => {
		let dispatch = jest.fn()
		let callback = jest.fn()

		const wrapper = shallow(<About dispatch={dispatch} onClick={callback} />)

		wrapper.find('#aboutClose').simulate('click')
		expect(dispatch).toHaveBeenCalled()
	})
})