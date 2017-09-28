import React from 'react'
import {shallow} from 'enzyme'

import {LandingPage} from './LandingPage'


describe('<Landing Page />', () => {
	it('Should render without crashing', () => {
		shallow(<LandingPage />)
	})
})