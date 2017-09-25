import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import {NoResults} from './NoResults'


describe('<NoResults />', ()=> {
	it('should render without crashing', ()=>{
		shallow(<NoResults />)
	})

})