import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import Wishlist from './Wishlist'

describe('<Wishlist />', () => {
	it('should render without crashing', ()=>{
		shallow(<Wishlist />)
	})
})