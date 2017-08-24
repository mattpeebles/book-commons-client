import React from 'react'
import {shallow} from 'enzyme'

import Results from './Results'


describe('<Results />', () => {
	it('should render without crashing', () => {
		shallow(<Results />)
	})
})