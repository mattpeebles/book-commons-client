import React from 'react'
import {shallow} from 'enzyme'
import {should, expect} from 'chai'

import BookPages from './BookPages'


describe('<BookPages />', ()=> {
	it('should render without crashing', ()=>{
		shallow(<BookPages pages="642" />)
	})

	it('should render the number of pages', () => {
		let pages = '550'
		let wrapper = shallow(<BookPages pages={pages} />)

		expect(wrapper.find('.bookPages').text()).to.be.equal(pages + ' pages')
	})
})