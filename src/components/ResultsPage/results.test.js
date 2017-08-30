import React from 'react'
import {shallow, mount} from 'enzyme'
import {expect, should} from 'chai'

import {Results} from './Results'
import AuthorSupplement from './Supplement/AuthorSupplement'
import BookSupplement from './Supplement/BookSupplement'



describe('<Results />', () => {
	it('should render without crashing', () => {
		shallow(<Results />)
	})
})