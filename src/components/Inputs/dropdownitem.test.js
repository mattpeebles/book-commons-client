import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import DropdownItem from './DropdownItem'

describe('<DropdownLinks />', () => {
	it('should render without crashing', () => {
		let dropdownLinks = ['Save', 'Delete']
		shallow(<DropdownItem dropdownLinks={dropdownLinks} />)
	})
})