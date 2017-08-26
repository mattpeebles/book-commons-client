import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import Subtitle from './Subtitle'

describe('<Subtitle />', () => {
	it('should render without crashing', () => {
		shallow(<Subtitle />)
	})
})