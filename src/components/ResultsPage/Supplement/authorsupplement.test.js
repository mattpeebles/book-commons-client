import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import {AuthorSupplement} from './AuthorSupplement'

let authorInfo = {
	name: 'M. Ipsum',
	dates: '1800-1900',
	image: '/',
	summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	location: '/'
}

describe('<AuthorSupplement />', () => {
	it('should render without crashing', ()=>{
		shallow(<AuthorSupplement {...authorInfo} />)
	})
})