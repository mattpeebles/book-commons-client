import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import Languages from './Languages'


describe('<Languages />', ()=> {
	it('should render without crashing', ()=>{
		shallow(<Languages languages={["eng", "fr"]} />)
	})

	it('should display array in component', () => {
		let languages = ["en", "fr"]
		let languageStr = languages.toString().replace(/[,]/g, ' ')

		let wrapper = shallow(<Languages languages={languages} />)

		expect(wrapper.find('.bookLanguage').text()).to.equal(`Language: English Français`)
	})
})