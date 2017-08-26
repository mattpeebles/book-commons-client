import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import DropdownItem from './DropdownItem'

describe('<DropdownLinks />', () => {
	it('should render without crashing', () => {
		let dropdownLinks = ['Save', 'Delete']
		shallow(<DropdownItem dropdownLinks={dropdownLinks} />)
	})

	it('should render all links passed into as props', ()=> {
		let dropdownLinks = ['Save', 'Delete']
		let wrapper = shallow(<DropdownItem dropdownLinks={dropdownLinks} />)
		expect(wrapper.children().length).to.be.equal(2)
	})
})