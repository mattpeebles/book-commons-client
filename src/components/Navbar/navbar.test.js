import React from 'react'
import {shallow} from 'enzyme'
import NavBar from './Navbar'


describe('<NavBar />', () => {
	it('Should render without crashing', () => {
		shallow(<NavBar />)
	})
})