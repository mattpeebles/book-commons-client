import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import NavPills from './NavPills'

describe('<NavPills />', () => {
	it('should render without crashing', () => {
		shallow(<NavPills />)
	})
})