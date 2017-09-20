import React from 'react'
import {shallow} from 'enzyme'
import {should, expect} from 'chai'


import Preview from './Preview'


describe('<Preview />', ()=> {
	it('should render without crashing', ()=>{
		shallow(<Preview preview="/" />)
	})

	it('should say No Preview when none is passed', () => {
		let preview = 'No Preview'
		let wrapper = shallow(<Preview preview={preview} />)

		expect(wrapper.text()).to.be.equal('No Preview')
	})

	it('should say Preview with a link', () => {
		let wrapper = shallow(<Preview preview="/" />)
		let preview = '/'
		expect(wrapper.text()).to.be.equal('Preview')
		expect(wrapper.find('a').exists()).to.be.equal(true)
	})
})