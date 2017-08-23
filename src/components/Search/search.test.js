import React from 'react'
import {shallow} from 'enzyme'
import Search from './Search'

describe('<Search />', () => {
	it('Should render without crashing', () => {
		shallow(<Search />)
	})
})