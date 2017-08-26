import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import SupplementInfo from './SupplementInfo'
import AuthorSupplement from './AuthorSupplement'
import BookSupplement from './BookSupplement'

describe('<SupplementInfo />', () => {
	it('should render without crashing', ()=>{
		shallow(<SupplementInfo  />)
	})

	it('should render author supplement when props.supplement is author', () => {
		const supplementType = 'author'
		const wrapper = shallow(<SupplementInfo supplement={supplementType} />)

		expect(wrapper.find(AuthorSupplement).exists()).to.be.equal(true)
		expect(wrapper.find(BookSupplement).exists()).to.be.equal(false)

	})

	it('should render book supplement when props.supplement is book', () => {
		const supplementType = 'book'
		const wrapper = shallow(<SupplementInfo supplement={supplementType} />)

		expect(wrapper.find(BookSupplement).exists()).to.be.equal(true)
		expect(wrapper.find(AuthorSupplement).exists()).to.be.equal(false)

	})
})