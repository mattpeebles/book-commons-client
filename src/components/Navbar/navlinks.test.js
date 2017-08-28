import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import NavLinks from './NavLinks'


describe('<NavLinks />', () => {
	it('Should render without crashing', () => {
		const links = ['Login', 'Register']
		shallow(<NavLinks links={links}/>)
	})

	it('should render all links', () => {
		const links = ['Login', 'Register']
		const wrapper = shallow(<NavLinks links={links}/>)
		expect(wrapper.find('ul').children().length).to.be.equal(links.length)
	})

	it('should render href appropriately', () => {
		const links = ['Login', 'Register']
		const wrapper = shallow(<NavLinks links={links}/>)
		wrapper.find('a').nodes.forEach((node, index) => {
			expect(node.props.href).to.be.equal(`/${links[index].toLowerCase()}`)
		})
	})
})