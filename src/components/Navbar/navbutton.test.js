import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import NavButton from './NavButton'


describe('<NavButton />', () => {
	it('Should render without crashing', () => {
		shallow(<NavButton />)
	})
})