import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import {WLSettings} from './WLSettings'


describe('<WLSettings />', () => {
	it('should render without crashing', () => {
		shallow(<WLSettings wishlists={[]} addWishlist={false} />)
	})
})