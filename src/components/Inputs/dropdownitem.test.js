import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import {DropdownItem} from './DropdownItem'

describe('<DropdownItem />', () => {
	it('should render without crashing', () => {
		let dropdownLinks = ['Save', 'Delete']
		shallow(<DropdownItem type='wishlistDrop' dropdownLinks={dropdownLinks} />)
	})

	it('should render all links passed into as props', ()=> {
		let dropdownLinks = ['Save', 'Delete']
		let wrapper = shallow(<DropdownItem type='wishlistDrop' dropdownLinks={dropdownLinks} />)
		expect(wrapper.children().length).to.be.equal(2)
	})

	it('should render a form based off of wishlists when type is options', () => {
		let wishlists = ['Biographies', 'SciFi']
		let wrapper = shallow(<DropdownItem type='option' wishlists={wishlists} />)
		expect(wrapper.node.props.children.length).to.be.equal(wishlists.length)
		expect(wrapper.node.type).to.be.equal('form')
	})
})