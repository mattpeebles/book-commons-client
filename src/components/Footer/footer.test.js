import React from 'react'
import {shallow} from 'enzyme'

import Footer from './Footer'


describe('<Footer />', () => {
	it('Should render without crashing', () => {
		shallow(<Footer />)
	})
})