import React from 'react'
import {shallow} from 'enzyme'

import SearchHeader from './SearchHeader'


describe('<SearchHeader />' , () => {
	it('Should render without crashing', () => {
		shallow(<SearchHeader />)
	})
})