import React from 'react'
import {shallow, mount} from 'enzyme'
import {expect, should} from 'chai'

import Results from './Results'
import AuthorSupplement from './Supplement/AuthorSupplement'
import BookSupplement from './Supplement/BookSupplement'



describe('<Results />', () => {
	it('should render without crashing', () => {
		shallow(<Results />)
	})

	it('should render Author Supplement on load', () => {
		const wrapper = mount(<Results />)
		expect(wrapper.state('supplement')).to.be.equal('author')
		expect(wrapper.find(AuthorSupplement).exists()).to.be.equal(true)
	})

	it('should render Book Supplement when state is set to book', () => {
		const value = 'book'
		const wrapper = mount(<Results />)
		wrapper.instance().toggleSupplement(value)

		expect(wrapper.state('supplement')).to.be.equal(value)
		expect(wrapper.state('details')).to.be.equal(`${value}Supplement`)
		expect(wrapper.find(BookSupplement).exists()).to.be.equal(true)
	})
})