import {
	toggleSupplement
} from '../actions/actions'

import {default as reducer} from './index'
import {expect} from 'chai'

describe('index reducer', () => {
	let wishlist1 = 'fantasy';
	let wishlist2 = 'american lit';
	const ebook1 = {
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


		//MOVING TO BACKEND
	// describe('addToWishlist', () => {
	// 	it('should add new item to wishlist', () => {
	// 		let state;
			
	// 			//create new wishlist with no items
	// 		state = reducer(state, addNewWishlist(wishlist1))
	// 		expect(state.wishlists).to.include(wishlist1)
	// 		expect(state.wishlistItems.filter(item => item.wishlist === wishlist1).length).to.equal(0)

	// 			//add item
	// 		state = reducer(state, addToWishlist(ebook1, wishlist1))
	// 		expect(state.wishlistItems.filter(item => item.wishlist === wishlist1).length).to.equal(1)

	// 	})

	// 	it('should prevent duplicate items from being added', () => {
	// 		let state;

	// 		state = reducer(state, addNewWishlist(wishlist1))

	// 		state = reducer(state, addToWishlist(ebook1, wishlist1))
	// 		state = reducer(state, addToWishlist(ebook1, wishlist1))

	// 		expect(state.wishlistItems.filter(item => item.title === ebook1.title && item.wishlist === ebook1.wishlist).length).to.be.equal(1)
	// 	})
	// })

	// describe('removeFromWishlist', () => {
	// 	it('should remove item from wishlist', () => {
	// 		let state;
			
	// 			//create new wishlist with no items
	// 		state = reducer(state, addNewWishlist(wishlist1))
	// 		expect(state.wishlists).to.include(wishlist1)
	// 		expect(state.wishlistItems.filter(item => item.wishlist === wishlist1).length).to.equal(0)

	// 			//add item
	// 		state = reducer(state, addToWishlist(ebook1, wishlist1))
	// 		expect(state.wishlistItems.filter(item => item.wishlist === wishlist1).length).to.equal(1)

	// 		ebook1['wishlist'] = wishlist1

	// 		state = reducer(state, removeFromWishlist(ebook1))
	// 		expect(state.wishlistItems.filter(item => item.wishlist === wishlist1).length).to.equal(0)

	// 	})
	// })

	describe('toggleSupplement', () => {
		it('should set info to clicked link and set details', () => {
			let state;
			let supplement = 'author'
			state = reducer(state, toggleSupplement(supplement))
			expect(state.supplement).to.be.equal(supplement)
			expect(state.details).to.be.equal(`${supplement}Supplement`)
		})
	})
})