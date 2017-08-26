import React from 'react'
import {shallow, mount} from 'enzyme'

import LoginRegister from './LoginRegister'

describe('<LoginRegister />', () => {
	it('should render without crashing', () => {
		shallow(<LoginRegister />)
	})
})