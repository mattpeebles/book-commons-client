import React from 'react'
import {shallow} from 'enzyme'
import {should, expect} from 'chai'

import BookDetails from './BookDetails'

import Preview from './Preview'
import PublishDate from './PublishDate'
import Languages from './Languages'
import BookPages from './BookPages'

describe('<BookDetails />', ()=> {
	it('should render without crashing', ()=>{
		shallow(<BookDetails preview="none" publishDate="1832" languages={['english', 'french']} pages="623" />)
	})

	it('should contain all subcomponents', () => {
		let wrapper = shallow(<BookDetails preview="none" publishDate="1832" languages={['english', 'french']} pages="623" />)
		
		expect(wrapper.find(Preview).exists()).to.be.equal(true)
		expect(wrapper.find(PublishDate).exists()).to.be.equal(true)
		expect(wrapper.find(Languages).exists()).to.be.equal(true)
		expect(wrapper.find(BookPages).exists()).to.be.equal(true)
	})
})