import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import {NavDropdown} from './NavDropdown'

describe('<NavDropdown />', () => {
	it('Should render without crashing', () => {
		shallow(<NavDropdown wishlists={[]}/>)
	})
})