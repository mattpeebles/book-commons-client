import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import Dropdown from './Dropdown'

describe('<Dropdown />', () => {
	it('should render without crashing', () => {
		shallow(<Dropdown />)
	})
})