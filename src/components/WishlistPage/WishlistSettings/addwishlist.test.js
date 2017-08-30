import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import {AddWishlist} from './AddWishlist'


describe('<AddWishlist />', () => {
	it('should render without crashing', () => {
		shallow(<AddWishlist />)
	})
})