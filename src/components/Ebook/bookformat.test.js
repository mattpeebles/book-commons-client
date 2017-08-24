import React from 'react'
import {shallow} from 'enzyme'
import {should, expect} from 'chai'


import BookFormat from './BookFormat'


describe('<BookFormat />', ()=> {
	it('should render without crashing', ()=>{
		shallow(<BookFormat formats={['epub', 'pdf', 'mobi']} />)
	})

	it('should render all formats', () => {
		let formats = ['epub', 'pdf', 'mobi']
		let wrapper = shallow(<BookFormat formats={formats} />)

		expect(wrapper.children().length).to.be.equal(formats.length)
	})
})