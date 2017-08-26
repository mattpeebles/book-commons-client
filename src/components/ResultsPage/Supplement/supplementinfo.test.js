import React from 'react'
import {shallow} from 'enzyme'
import {expect, should} from 'chai'

import SupplementInfo from './SupplementInfo'

describe('<SupplementInfo />', () => {
	it('should render without crashing', ()=>{
		shallow(<SupplementInfo  />)
	})
})