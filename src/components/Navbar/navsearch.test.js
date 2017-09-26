import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import {NavSearch} from './NavSearch'


describe('<NavSearch />', () => {
	it('Should render without crashing', () => {
		let callback = jest.fn()
		shallow(<NavSearch handleSubmit={callback}/>)
	})
})