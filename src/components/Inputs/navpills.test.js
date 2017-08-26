import React from 'react'
import {shallow, mount} from 'enzyme'

import NavPills from './NavPills'

describe('<NavPills />', () => {
	it('should render without crashing', () => {
		shallow(<NavPills />)
	})

	it('should fire the toggleSupplement callback on click', () => {
		const callback = jest.fn()
		const value = 'book'
		const wrapper = mount(<NavPills id={value} toggleSupplement={callback}/>)
		wrapper.find('.active').simulate('click')
		expect(callback).toHaveBeenCalledWith(value)
	})
})