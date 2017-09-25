import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import {BookSupplement} from './BookSupplement'

	let bookInfo = {
								title: 'Lorem',
								published: '1843',
								cover: '/',
								summary: 'Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
								location: '/'
							}

describe('<BookSupplement />', () => {
	it('should render without crashing', ()=>{
		shallow(<BookSupplement {...bookInfo} />)
	})
})