import React from 'react'
import {shallow} from 'enzyme'
import {should, expect} from 'chai'

import FormatLocation from './FormatLocation'
import BookFormat from './BookFormat'


describe('<FormatLocation />', ()=> {
	it('should render without crashing', ()=>{
		shallow(<FormatLocation formats={["epub", 'pdf']} icon="/" location='/' database="project gutenberg" />)
	})

	it('should render all subcomponents', () => {
		let wrapper = shallow(<FormatLocation formats={["epub", 'pdf']} icon="/" location='/' database="project gutenberg" />)

		expect(wrapper.find(BookFormat).exists()).to.be.equal(true)
	})

	it('should properly render location-container', () =>{
		let database = "project gutenberg"
		let wrapper = shallow(<FormatLocation formats={["epub", 'pdf']} icon="/" locationUrl='/' database={database} />)

		expect(wrapper.find('.database').text()).to.equal(database)

	})
})