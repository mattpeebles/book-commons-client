import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import Header from './Header'
import Subtitle from './Subtitle'

describe('<Header />', () => {
	it('should render without crashing', () => {
		shallow(<Header />)
	})

	it('should not render a subtitle without a subtitle prop', () => {
		const wrapper = shallow(<Header title='header' />)

		expect(wrapper.find(Subtitle).exists()).to.be.equal(false)
	})

	it('should render a subtitle if it has a subtitle prop', () => {
		const wrapper = shallow(<Header subtitle='subtitle' />)

		expect(wrapper.find(Subtitle).exists()).to.be.equal(true)
	})
})