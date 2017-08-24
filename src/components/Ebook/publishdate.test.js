import React from 'react'
import {shallow} from 'enzyme'
import {should, expect} from 'chai'


import PublishDate from './PublishDate'


describe('<PublishDate />', ()=> {
	it('should render without crashing', ()=>{
		shallow(<PublishDate publishDate='1932' />)
	})

	it('render the date passed into prop', () => {
		let date = '1932'
		let wrapper = shallow(<PublishDate publishDate={date} />)

		expect(wrapper.find('.bookPublishDate').text()).to.be.equal(`Published: ${date}`)
	})
})