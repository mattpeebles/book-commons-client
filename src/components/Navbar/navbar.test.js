import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import NavBar from './NavBar'


describe('<NavBar />', () => {
	it('Should render without crashing', () => {
		shallow(<NavBar />)
	})
})