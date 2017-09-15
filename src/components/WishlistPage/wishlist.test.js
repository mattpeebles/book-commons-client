import React from 'react'
import {shallow, mount} from 'enzyme'
import {expect, should} from 'chai'

import {Wishlist} from './Wishlist'
import Ebook from '../Ebook/Ebook'
import Header from '../Header/Header'
import WishlistsContainer from './WishlistsContainer'

let psuedoState = {
					wishlist: {
						currentList: 'Biographies',
						addWishlist: false,
						wishlists: ['Biographies', 'French Literature', 'SciFi', 'Russian Literature'],
						wishlistsEdit: [{'Biographies': false}, {'French Literature': false}, {'SciFi': false}, {'Russian Literature': false}],
						wishlistItems: [	
								{	
									'title': 'The Story of Brevity: How I Learned To Pare Down My Writing to Get to the Main Point in Short Order and Not Wax Eloquent about Superfluous Details that Either have No Bearing on My Original Point or Lack Concision',
									'author': 'Hubert Blaine Wolferuhigschlegelsteinhausenbergerkraftenwerkdorffschlosszeug',
									'preview': 'none',
									'publishDate': '1832',
									'languages': ['english'],
									'pages': '643',
									'formats': ['epub', 'pdf'],
									'location': 'project gutenberg',
									'locationIcon': '/',
									'locationUrl': '/'
								},
								{	
									'title': 'Napoleon the Great',
									'author': 'Andrew Roberts',
									'preview': '/',
									'publishDate': '1832',
									'languages': ['english', 'french'],
									'pages': '643',
									'formats': ['epub', 'mobi', 'pdf'],
									'location': 'feedbooks',
									'locationIcon': '/',
									'locationUrl': '/'
								}
						]
				}
			}
describe('<Wishlist />', () => {
	it('should render without crashing', ()=>{
		shallow(<Wishlist currentList={[]} wishlists={[]} wishlistItems={[]}/>)
	})

	it('should render header based on current list in state', () => {
		const wrapper = shallow(<Wishlist {...psuedoState}/>)

		expect(wrapper.find(Header).node.props.subtitle).to.be.equal(psuedoState.currentList)
	})

	it('should render results based on current list in state', () => {
		const wrapper = shallow(<Wishlist {...psuedoState} wishlistItems={psuedoState.wishlist.wishlistItems}/>)
		expect(wrapper.find(Ebook).node.props.results).to.deep.equal(psuedoState.wishlist.wishlistItems)
	})
})