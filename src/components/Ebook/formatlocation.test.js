import React from 'react'
import {shallow} from 'enzyme'
import {should, expect} from 'chai'

import FormatLocation from './FormatLocation'
import BookFormat from './BookFormat'


describe('<FormatLocation />', ()=> {
	it('should render without crashing', ()=>{
		shallow(<FormatLocation formats={["epub", 'pdf']} icon="/" locationUrl='/' location="project gutenberg" />)
	})

	it('should render all subcomponents', () => {
		let wrapper = shallow(<FormatLocation formats={["epub", 'pdf']} icon="/" locationUrl='/' location="project gutenberg" />)

		expect(wrapper.find(BookFormat).exists()).to.be.equal(true)
	})

	it('should properly render location-container', () =>{
		let location = "project gutenberg"
		let wrapper = shallow(<FormatLocation formats={["epub", 'pdf']} icon="/" locationUrl='/' location={location} />)

		expect(wrapper.find('.locationUrl').text()).to.equal(location)

	})
})