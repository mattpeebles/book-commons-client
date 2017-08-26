import React from 'react'
import {shallow, mount} from 'enzyme'
//import {expect, should} from 'chai'

import WishlistLinks from './WishlistLinks'

describe('<WishlistLinks />', () => {
	it('should render without crashing', ()=>{
		const links = ['Kanye', 'West', 'Yeezus']
		shallow(<WishlistLinks links={links}/>)
	})


	it('should fire change wishlist on click of any list', () => {
		const links = ['Kanye', 'West', 'Yeezus']
		const callback = jest.fn()
		const wrapper = mount(<WishlistLinks changeWishlist={callback} links={links}/>)
		wrapper.find('a').forEach((link, index) => {
			link.simulate('click')
			expect(callback).toHaveBeenCalledWith(links[index])

		})
	})
})