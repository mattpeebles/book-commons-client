import {ADD_TO_WISHLIST, addToWishlist,
		REMOVE_FROM_WISHLIST, removeFromWishlist, TOGGLE_SUPPLEMENT, toggleSupplement, 
} from './actions'

import {expect} from 'chai'

describe('addToWishlist', () => {
	const ebook = {
						'title': "Lorem",
						'author': "Ip Sum",
						'preview': "/",
						'publishDate': "1832",
						'languages': ['english', 'spanish', 'french'],
						'pages': "643",
						'formats': ['epub', 'mobi', 'pdf'],
						'location': 'project gutenberg',
						'locationIcon': '/',
						'locationUrl': '/'}
	const wishlist = 'Biographies'
	
	it('should set item as ebook and list as wishlist', () => {
		const action = addToWishlist(ebook, wishlist)
		expect(action.type).to.be.equal(ADD_TO_WISHLIST)
		expect(action.item).to.be.equal(ebook)
	})
})

describe('removeFromWishlist', () => {
	it('should remove ebook from wishlist', () => {
		const ebook = {
						'wishlist': 'Biographies',
						'title': "Lorem",
						'author': "Ip Sum",
						'preview': "/",
						'publishDate': "1832",
						'languages': ['english', 'spanish', 'french'],
						'pages': "643",
						'formats': ['epub', 'mobi', 'pdf'],
						'location': 'project gutenberg',
						'locationIcon': '/',
						'locationUrl': '/'}
		const action = removeFromWishlist(ebook)
		expect(action.type).to.be.equal(REMOVE_FROM_WISHLIST)
		expect(action.item).to.be.equal(ebook)
	})
})

describe('toggleSupplement', () => {
	it('should update supplement and supplement details in state', () => {
		const supplement = 'Author'
		const action = toggleSupplement(supplement)
		expect(action.type).to.be.equal(TOGGLE_SUPPLEMENT)
		expect(action.supplement).to.be.equal(supplement)
		expect(action.details).to.be.equal(`${supplement}Supplement`)
	})
})