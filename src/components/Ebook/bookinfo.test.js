import React from 'react'
import {shallow} from 'enzyme'
import {should, expect} from 'chai'

import {BookInfo} from './BookInfo'


describe('<BookInfo />', ()=> {
	it('should render without crashing', ()=>{
		shallow(<BookInfo title="Graduation" author="Kanye West"/>)
	})

	it('should render title', () => {
		let title = "Graduation"
		let wrapper = shallow(<BookInfo title={title} author="Kanye West"/>)

		expect(wrapper.find('.title').text()).to.be.equal(title)
	})

	it('should render author', () => {
		let author = "Kanye West"
		let wrapper = shallow(<BookInfo title="Graduation" author={author}/>)

		expect(wrapper.find('.bookAuthor').text()).to.be.equal(author)
	})
})