import {
	fetchWishlists,
	fetchWishlistsRequest,
	fetchWishlistsSuccess,
	fetchWishlistsError,
	addWishlistForm,
	addNewWishlistRequest,
	addNewWishlistSuccess,
	addNewWishlistError,
	editWishlistTitleRequest,
	editWishlistTitleSuccess,
	editWishlistTitleError,
	removeWishlistRequest,
	removeWishlistSuccess,
	removeWishlistError
} from '../actions/wishlistActions'

import {default as reducer} from './wishlistReducer'
import {expect} from 'chai'

describe('Wishlist Reducer', () => {
			let wishlist1 = {
				id: 2812183123,
				title: 'Grimes',
				items: []
			};

			let wishlist2 = {
				id: 23813413,
				title: 'Channel Orange',
				items: []
			}

	it('should return initial state if nothing is passed in', () => {
		let state;

		state = reducer(undefined, {TYPE: '_UNKNOWN'})

		expect(state.currentList).to.equal(undefined)
		expect(state.wishlistNames).to.deep.equal([])
		expect(state.wishlists).equal(null)
		expect(state.addWishlist).to.equal(false)
		expect(state.loading).to.equal(false)
		expect(state.error).to.equal(null)
	});

	describe('fetchWishlistsRequest', () => {
		it('should set wishlist state to loading', () => {
			let state;

			state = reducer(state, fetchWishlistsRequest())

			expect(state.loading).to.equal(true)
		})
	});

	describe('fetchWishlistsSuccess', () => {
		it('should set wishlist and wishlistNames', () => {
			let names = ['Kanye', 'Chance', 'Kendrick', 'Bon Iver'];
			let wishlists = [
				{
					id: 3413241234,
					title: 'Kanye',
					items: []
				},
				{
					id: 494524,
					title: 'Chance',
					items: []
				},
				{
					id: 9562908,
					title: 'Kendrick',
					items: []
				},
				{
					id: 486140,
					title: 'Bon Iver',
					items: []
				}
			];

			let state;

			state = reducer(state, fetchWishlistsSuccess(wishlists, names))

			expect(state.loading).to.equal(false)
			expect(state.error).to.equal(null)
			expect(state.wishlists).to.equal(wishlists)
			expect(state.wishlists).to.be.a('array')
			expect(state.wishlistNames).to.equal(names)
		})
	});

	describe('fetchWishlistsError', () => {
		it('should set error', () => {
			let state;
			let err = 'Invalid Type';
			state = reducer(state, fetchWishlistsError(err))

			expect(state.error).to.be.equal(err)
			expect(state.loading).to.be.equal(false)
		})
	});

	describe('addWishlistForm', () => {
		it('should set boolean of addWishlist', () => {
			let state;
			state = reducer(state, addWishlistForm(false))
			expect(state.addWishlist).to.be.equal(false)

			state = reducer(state, addWishlistForm(true))
			expect(state.addWishlist).to.be.equal(true)
		})
	});

	describe('addNewWishlistRequest', () => {
		it('should set loading to true', () => {
			let state;
			state = reducer(state, addNewWishlistRequest())

			expect(state.loading).to.be.equal(true)
			expect(state.error).to.be.equal(null)
		})
	});

	describe('addNewWishlistSuccess', () => {
		it('should update wishlistNames and wishlists with new wishlist', () => {
			let state;

				//mocking fetch a request because add new wishlist will
				//never be called before fetch
			state = reducer(state, fetchWishlistsSuccess([], []))

			state = reducer(state, addNewWishlistSuccess(wishlist1, wishlist1.title))

			expect(state.wishlistNames).to.include(wishlist1.title)
			expect(state.wishlists).to.include(wishlist1)
		});

		it('should keep prior names and wishlists when new one is added', () => {
			let state;

				//mocking fetch a request because add new wishlist will
				//never be called before fetch
			state = reducer(state, fetchWishlistsSuccess([], []))
			state = reducer(state, addNewWishlistSuccess(wishlist1, wishlist1.title))
			state = reducer(state, addNewWishlistSuccess(wishlist2, wishlist2.title))

			expect(state.wishlistNames).to.include(wishlist1.title)
			expect(state.wishlistNames).to.include(wishlist2.title)
			expect(state.wishlists).to.include(wishlist1)
			expect(state.wishlists).to.include(wishlist2)

		});
	});

	describe('addNewWishlistError', () => {
		it('should set error in state', () => {
			let state;
			let err = 'Invalid Type Error'

			state = reducer(state, addNewWishlistError(err))

			expect(state.loading).to.be.equal(false)
			expect(state.error).to.be.equal(err)
		})
	});

	describe('editWishlistTitleRequest', () => {
		it('should set loading to true and error to null', () => {
			let state;

			state = reducer(state, editWishlistTitleRequest());
			expect(state.loading).to.be.equal(true)
			expect(state.error).to.be.equal(null)
		})
	})
	describe('editWishlistTitleSuccess', () => {
		it('should set wishlist names and wishlists to new wishlist title', () => {
			let state;

			let newTitle = 'The Life of Pablo'

			let editWishlist = {
				id: wishlist1.id,
				title: newTitle,
				items: wishlist1.items
			}

			state = reducer(state, fetchWishlistsSuccess([], []))
			state = reducer(state, addNewWishlistSuccess(wishlist1, wishlist1.title))
			state = reducer(state, editWishlistTitleSuccess(editWishlist, newTitle, wishlist1.title));
			
			expect(state.wishlists).to.be.a('array')
			expect(state.wishlists.length).to.be.at.least(1)
			expect(state.wishlists).to.include(editWishlist)
			expect(state.wishlists).to.not.include(wishlist1)
			
			expect(state.wishlistNames.length).to.be.at.least(1)
			expect(state.wishlistNames).to.be.a('array')
			expect(state.wishlistNames).to.include(newTitle)
			expect(state.wishlistNames).to.not.include(wishlist1.title)
		})
	})
	describe('editWishlistTitleError', () => {
		it('should set error', () => {
			let state;
			let err = 'Invalid Type Error'
			state = reducer(state, editWishlistTitleError(err));
			
			expect(state.error).to.equal(err)
		})
	})

	describe('removeWishlistRequest', () => {
		it('should set loading to true', () =>{
			let state;
			state = reducer(state, removeWishlistRequest())

			expect(state.loading).to.be.equal(true)
			expect(state.error).to.be.equal(null)

		})
	})

	describe('removeWishlistSuccess', () => {
		it('should call fetchWishlists', () => {
			let state;
			
				//mocking fetch a request because remove wishlist will
				//never be called before fetch
			state = reducer(state, fetchWishlistsSuccess([], []))

			state = reducer(state, fetchWishlistsSuccess())



			expect(state.loading).to.be.equal(false)
			expect(state.error).to.be.equal(null)

		})
	})

	describe('removeWishlistError', () => {
		it('should ', () => {
			let state;	
			let err = 'Invalid Type Error'
			state = reducer(state, removeWishlistError(err))


			expect(state.error).to.be.equal(err)
			expect(state.loading).to.be.equal(false)
		})
	})

})