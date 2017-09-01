import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import NavBrand from './NavBrand'


describe('<NavBrand />', () => {
	it('Should render without crashing', () => {
		const name = 'Kanye'
		shallow(<NavBrand name={name} />)
	})

	it('Should render brand name exactly', () => {
		const name = 'Kanye'
		const wrapper = shallow(<NavBrand name={name} />)
		expect(wrapper.props().children).to.be.equal(name)
	})
})