import React from 'react'
import {shallow} from 'enzyme'
import {should, expect} from 'chai'

import {Ebook} from './Ebook'

import BookDetails from './BookDetails'
import BookInfo from './BookInfo'
import FormatLocation from './FormatLocation'


describe('<Result />', () => {
	it('should render without crashing', () => {
		shallow(<Ebook />)
	})

	it('should render all subcomponents', () => {
		let results = [
			{
				'title': "The Story of Brevity: How I Learned To Pare Down My Writing to Get to the Main Point in Short Order and Not Wax Eloquent about Superfluous Details that Either have No Bearing on My Original Point or Lack Concision",
				'author': "Hubert Blaine Wolferuhigschlegelsteinhausenbergerkraftenwerkdorffschlosszeug",
				'preview': "/",
				'publishDate': "1832",
				'languages': ['english'],
				'pages': "643",
				'formats': ['epub', 'pdf'],
				'location': 'project gutenberg',
				'locationIcon': '/'
			},
			{
				'title': "Napoleon the Great",
				'author': "Andrew Roberts",
				'preview': "/",
				'publishDate': "1832",
				'languages': ['english', 'french'],
				'pages': "643",
				'formats': ['epub', 'mobi', 'pdf'],
				'location': 'feedbooks',
				'locationIcon': '/'
			},
			{
				'title': "Jefferson and His Time",
				'author': "Thomas Malone",
				'preview': "/",
				'publishDate': "1832",
				'languages': ['english'],
				'pages': "643",
				'formats': ['epub', 'mobi', 'pdf'],
				'location': 'europeana',
				'locationIcon': '/'
			},
			{
				'title': "Napoleon's Letters",
				'author': "",
				'preview': "/",
				'publishDate': "1832",
				'languages': ['english', 'french'],
				'pages': "643",
				'formats': ['epub', 'mobi', 'pdf'],
				'location': 'open library',
				'locationIcon': '/'
			} 
		];
		let wrapper = shallow(<Ebook results={results} />)

		expect(wrapper.find(BookDetails).exists()).to.be.equal(true)
		expect(wrapper.find(BookInfo).exists()).to.be.equal(true)
		expect(wrapper.find(FormatLocation).exists()).to.be.equal(true)
	})
})