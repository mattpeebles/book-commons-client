import React from 'react'
import {shallow, mount} from 'enzyme'

import {RegisterForm} from './RegisterForm'

describe('<RegisterForm />', () => {
	it('should render without crashing', () => {
		shallow(<RegisterForm />)
	})
})