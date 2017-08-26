import React from 'react'
import {shallow, mount} from 'enzyme'
import {expect, should} from 'chai'

import WishlistsContainer from './WishlistsContainer'

describe('<WishlistsContainer />', () => {
	it('should render without crashing', ()=>{
		shallow(<WishlistsContainer />)
	})

})