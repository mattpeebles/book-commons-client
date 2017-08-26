import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import NavBar from './NavBar'
import NavBrand from './NavBrand'
import NavLinks	from './NavLinks'
import NavButton from './NavButton'

describe('<NavBar />', () => {
	it('Should render without crashing', () => {
		shallow(<NavBar />)
	})

	it('should render all components', () => {
		const wrapper = shallow(<NavBar />)

		expect(wrapper.find(NavBrand).exists()).to.be.equal(true)
		expect(wrapper.find(NavLinks).exists()).to.be.equal(true)
		expect(wrapper.find(NavButton).exists()).to.be.equal(true)


	})
})