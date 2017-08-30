import React from 'react'
import {shallow, mount} from 'enzyme'
import {expect, should} from 'chai'

import {Wishlist} from './Wishlist'
import Ebook from '../Ebook/Ebook'
import Header from '../Header/Header'
import WishlistsContainer from './WishlistsContainer'

let psuedoState = {
	currentList: 'Biographies',
	wishlists: {
			'Biographies': [
			{'title': "The Story of Brevity: How I Learned To Pare Down My Writing to Get to the Main Point in Short Order and Not Wax Eloquent about Superfluous Details that Either have No Bearing on My Original Point or Lack Concision",
			'author': "Hubert Blaine Wolferuhigschlegelsteinhausenbergerkraftenwerkdorffschlosszeug",
			'preview': "none",
			'publishDate': "1832",
			'languages': ['english'],
			'pages': "643",
			'formats': ['epub', 'pdf'],
			'location': 'project gutenberg',
			'locationIcon': '/',
			'locationUrl': '/'},
		{'title': "Napoleon the Great",
			'author': "Andrew Roberts",
			'preview': "/",
			'publishDate': "1832",
			'languages': ['english', 'french'],
			'pages': "643",
			'formats': ['epub', 'mobi', 'pdf'],
			'location': 'feedbooks',
			'locationIcon': '/',
			'locationUrl': '/'}],

		'French Literature': [{'title': "Jefferson and His Time",
			'author': "Thomas Malone",
			'preview': "/",
			'publishDate': "1832",
			'languages': ['english'],
			'pages': "643",
			'formats': ['epub', 'mobi', 'pdf'],
			'location': 'europeana',
			'locationIcon': '/',
			'locationUrl': '/'},
		{'title': "Napoleon's Letters",
			'author': "",
			'preview': "none",
			'publishDate': "1832",
			'languages': ['english', 'french'],
			'pages': "643",
			'formats': ['epub', 'mobi', 'pdf'],
			'location': 'open library',
			'locationIcon': '/',
			'locationUrl': '/'},
		{'title': "Citizens: A Chronicle of the French Revolution",
			'author': "Simon Schama",
			'preview': "/",
			'publishDate': "1832",
			'languages': ['english'],
			'pages': "643",
			'formats': ['epub', 'mobi', 'pdf'],
			'location': 'project gutenberg',
			'locationIcon': '/',
			'locationUrl': '/'}],

		"SciFi": [{'title': "Lorem",
			'author': "Ip Sum",
			'preview': "/",
			'publishDate': "1832",
			'languages': ['english', 'spanish', 'french'],
			'pages': "643",
			'formats': ['epub', 'mobi', 'pdf'],
			'location': 'project gutenberg',
			'locationIcon': '/',
			'locationUrl': '/'},
		{'title': "Lore",
			'author': "M. Ipsum",
			'preview': "none",
			'publishDate': "1832",
			'languages': ['english'],
			'pages': "643",
			'formats': ['epub', 'mobi', 'pdf'],
			'location': 'project gutenberg',
			'locationIcon': '/',
			'locationUrl': '/'}]
	}
}

describe('<Wishlist />', () => {
	it('should render without crashing', ()=>{
		shallow(<Wishlist currentList={[]} wishlists={[]}/>)
	})

	it('should render header based on current list in state', () => {
		const wrapper = shallow(<Wishlist {...psuedoState}/>)

		expect(wrapper.find(Header).node.props.subtitle).to.be.equal(psuedoState.currentList)
	})

	it('should render results based on current list in state', () => {
		const wrapper = shallow(<Wishlist {...psuedoState} />)

		expect(wrapper.find(Ebook).node.props.results).to.deep.equal(psuedoState.wishlists[psuedoState.currentList])
	})
})