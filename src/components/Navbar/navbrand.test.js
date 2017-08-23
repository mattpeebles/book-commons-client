import React from 'react'
import {shallow} from 'enzyme'

import NavBrand from './NavBrand'


describe('<NavBrand />', () => {
	it('Should render without crashing', () => {
		shallow(<NavBrand />)
	})
})