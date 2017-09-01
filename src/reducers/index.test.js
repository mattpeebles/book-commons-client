import {
	showLoginRegister,
	toggleLoginRegister,
	changeWishlist,
	toggleSupplement,
	addWishlistForm,
	addNewWishlist,
	toggleEditWishlistStatus,
	editWishlistTitle,
	deleteWishlist
} from '../actions/actions'

import {default as reducer} from './index'
import {expect} from 'chai'

describe('index reducer', () => {
	let wishlist1 = 'fantasy';
	let wishlist2 = 'american lit';


	describe('showLoginRegister', () => 
		it('should change to passed in boolean', () => {
			let state;
			state = reducer(state, showLoginRegister(true))
			expect(state.loginRegisterForm.clicked).to.be.equal(true)
			state = reducer(state, showLoginRegister(false))
			expect(state.loginRegisterForm.clicked).to.be.equal(false)			
		})
	)

	describe('toggleLoginRegister', () => {
		it('should toggle betweem register/login form', () => {
			let state;
			state = reducer(state, toggleLoginRegister('login'))
			expect(state.loginRegisterForm.form).to.be.equal('login')

			state = reducer(state, toggleLoginRegister('register'))
			expect(state.loginRegisterForm.form).to.be.equal('register')

		})
	})

	describe('changeWishlist', () => {
		it('should change current wishlist to clicked', () => {
			let state;
			state = reducer(state, changeWishlist('Biographies'))

			expect(state.currentList).to.be.equal('Biographies')
		})
	})

	describe('toggleSupplement', () => {
		it('should set info to clicked link and set details', () => {
			let state;
			let supplement = 'author'
			state = reducer(state, toggleSupplement(supplement))
			expect(state.supplement).to.be.equal(supplement)
			expect(state.details).to.be.equal(`${supplement}Supplement`)
		})
	})

	describe('addWishlistForm', () => {
		it('set boolean of addWishlist', () => {
			let state;
			state = reducer(state, addWishlistForm(true))
			expect(state.addWishlist).to.be.equal(true)

			state = reducer(state, addWishlistForm(false))
			expect(state.addWishlist).to.be.equal(false)	
		})
	})

	describe('addNewWishlist', () => {

		
		it('should add wishlist to wishlist array and wishlist edit', () => {
			let state;
			let wishlist1 = 'fantasy'
			state = reducer(state, addNewWishlist(wishlist1))

			expect(state.wishlists).to.include(wishlist1)
		})

		it('should add wishlist object to wishlistsEdit with value false', () => {
			let state;

			state = reducer(state, addNewWishlist(wishlist1))
			expect(state.wishlistsEdit).to.deep.include({[wishlist1]: false})
		})

		it('should retain old wishlists in wishlists array', () => {
			let state;

			state = reducer(state, addNewWishlist(wishlist1))
			state = reducer(state, addNewWishlist(wishlist2))

			expect(state.wishlists).to.include(wishlist1, wishlist2)
		})
	})

	describe('toggleEditWishlistStatus', () => {

		it('should toggle the boolean of the list object in wishlistEdit array', () => {
			let state;

			state = reducer(state, addNewWishlist(wishlist1))
			state = reducer(state, toggleEditWishlistStatus(wishlist1))
			expect(state.wishlistsEdit.filter(list => Object.keys(list).toString() === wishlist1)[0][wishlist1]).to.be.equal(true)
		
			state = reducer(state, toggleEditWishlistStatus(wishlist1))
			expect(state.wishlistsEdit.filter(list => Object.keys(list).toString() === wishlist1)[0][wishlist1]).to.be.equal(false)
		})
	})

	describe('editWishlistTitle', () => {

		it('should edit title in wishlists', () => {
			let state;
			state = reducer(state, addNewWishlist(wishlist1))
			state = reducer(state, editWishlistTitle(wishlist2, wishlist1))

			expect(state.wishlists).to.include(wishlist2)
			expect(state.wishlists).to.not.include(wishlist1)
		});

		it('should edit title in wishlistsEdit', () => {
			let state;
			state = reducer(state, addNewWishlist(wishlist1))
			state = reducer(state, editWishlistTitle(wishlist2, wishlist1))
			expect(state.wishlistsEdit).to.deep.include({[wishlist2]: false})
			expect(state.wishlistsEdit).to.not.include({[wishlist1]: false})
			expect(state.wishlistsEdit).to.not.include({[wishlist1]: true})
		});

			//when add item to wishlist item action is created, use that here instead of relying on test state
		it('should edit wishlist title of all associated wishlist items', () => {
			let state;
			state = reducer(undefined, {type: '_UNKNOWN'})
			expect(state.wishlistItems.filter(item => item.wishlist === 'Biographies').length).to.equal(2)
			state = reducer(state, editWishlistTitle(wishlist2, 'Biographies'))
			expect(state.wishlistItems.filter(item => item.wishlist === 'Biographies').length).to.equal(0)
			expect(state.wishlistItems.filter(item => item.wishlist === wishlist2).length).to.equal(2)

		});
	})

	describe('deleteWishlist', () => {

		it('should remove wishlist from wishlists', () => {
			let state;
			state = reducer(state, deleteWishlist('Biographies'))
			expect(state.wishlists).to.not.include('Biographies')
		});

		it('should remove wishlist from wishlistsEdit', () => {
			let state;
			state = reducer(state, addNewWishlist(wishlist1))
			expect(state.wishlistsEdit).to.deep.include({[wishlist1]: false})

			state = reducer(state, deleteWishlist(wishlist1))
			expect(state.wishlistsEdit.filter(list => Object.keys(list).toString === wishlist1).length).to.equal(0)
		});

			//wishlist2replacing biographies is carrying over from previous test
			//replaced wishlist2 with wishlist1 for test to function correctly
		it('should remove associated wishlist items', () => {
			let state;
			
			state = reducer(state, editWishlistTitle(wishlist1, wishlist2))
			expect(state.wishlistItems.filter(list => list.wishlist === wishlist1).length).to.equal(2)	
		
			state = reducer(state, deleteWishlist(wishlist1))
			expect(state.wishlistItems.filter(list => list.wishlist === wishlist1).length).to.equal(0)	

		})

	})
})