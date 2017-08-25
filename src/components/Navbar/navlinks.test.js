import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import NavLinks from './NavLinks'


describe('<NavLinks />', () => {
	it('Should render without crashing', () => {
		let links = ['Login', 'Register']
		shallow(<NavLinks links={links}/>)
	})
})