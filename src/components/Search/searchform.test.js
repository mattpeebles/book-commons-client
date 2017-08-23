import React from 'react'
import {shallow} from 'enzyme'
import SearchForm from './SearchForm'


describe('<SearchForm />', () => {
	it('Should render without crashing', () => {
		shallow(<SearchForm />)
	})
})