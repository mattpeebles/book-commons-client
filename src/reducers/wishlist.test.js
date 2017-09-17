import {
	fetchWishlistsRequest, fetchWishlistsSuccess, fetchWishlistsError,
	addWishlistForm, addNewWishlistRequest, addNewWishlistSuccess, addNewWishlistError,
	editWishlistTitleRequest, editWishlistTitleSuccess, editWishlistTitleError,
	removeWishlistRequest, removeWishlistSuccess, removeWishlistError,
	saveBookToWishlistRequest, saveBookToWishlistSuccess, saveBookToWishlistError,
	fetchWishlistBooksRequest, fetchWishlistBooksSuccess, fetchWishlistBooksError
} from '../actions/wishlist'

import {default as reducer} from './wishlist'
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

			let ebook1 = {
				id: 40394,
				database: 'project gutenberg',
				icon: '/resources/icons/gutenberg-fav.png',
				title: 'Super Rich Kids',
				author: 'Frank Ocean',
				preview: 'No Preview',
				publishDate: undefined,
				languages: ['chanel'],
				pages: undefined,
				formats: ['epub'],
				location: `https://www.gutenberg.org/ebooks`,
				rights: 'public domain'
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
	});

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
	});

	describe('editWishlistTitleError', () => {
		it('should set error', () => {
			let state;
			let err = 'Invalid Type Error'
			state = reducer(state, editWishlistTitleError(err));
			
			expect(state.error).to.equal(err)
		})
	});

	describe('removeWishlistRequest', () => {
		it('should set loading to true', () =>{
			let state;
			state = reducer(state, removeWishlistRequest())

			expect(state.loading).to.be.equal(true)
			expect(state.error).to.be.equal(null)

		})
	});

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
	});

	describe('removeWishlistError', () => {
		it('should ', () => {
			let state;	
			let err = 'Invalid Type Error'
			state = reducer(state, removeWishlistError(err))


			expect(state.error).to.be.equal(err)
			expect(state.loading).to.be.equal(false)
		})
	});

	describe('saveBookToWishlistRequest', () => {
		it('should set loading to true', () => {
			let state;

			state = reducer(state, saveBookToWishlistRequest())
			expect(state.loading).to.be.equal(true)
			expect(state.error).to.be.equal(null)
		})
	});

	describe('saveBookToWishlistSuccess', () => {
		it('should update wishlist items', () => {
			let state;

			state = reducer(state, fetchWishlistsSuccess([wishlist1], [wishlist1.title]))

					//save book to wishlist automatically returns
					//updated list with item inside items array
					//this is mocking that backend function
			let updateWishlist1 = Object.assign({}, state.wishlists[0], {
				items: [...state.wishlists[0]['items'], ebook1.id]
			})


			state = reducer(state, saveBookToWishlistSuccess(updateWishlist1))
			expect(state.wishlists[0].items).to.include(ebook1.id)
			expect(state.loading).to.be.equal(false)
			expect(state.error).to.be.equal(null)
		})
	});

	describe('saveBookToWishlistError', () => {
		it('should set error to err', () => {
			let state;
			let err = 'Invalid Type Error'
			state = reducer(state, saveBookToWishlistError(err))
			expect(state.loading).to.be.equal(false)
			expect(state.error).to.be.equal(err)
		})
	});

	describe('fetchWishlistBooksRequest', () => {
		it('should set loading to true', () => {
			let state;

			state = reducer(state, fetchWishlistBooksRequest())
			expect(state.loading).to.be.equal(true)
			expect(state.error).to.be.equal(null)
		})
	});

	describe('fetchWishlistBooksSuccess', () => {
		it('should set items as ebooks', () => {
			let state;
			let ebooks= [
				{
					id: 40394,
					database: 'project gutenberg',
					icon: '/resources/icons/gutenberg-fav.png',
					title: 'Super Rich Kids',
					author: 'Frank Ocean',
					preview: 'No Preview',
					publishDate: undefined,
					languages: ['chanel'],
					pages: undefined,
					formats: ['epub'],
					location: `https://www.gutenberg.org/ebooks`,
					rights: 'public domain'
				},
				{
					id: 34151345,
					database: 'project gutenberg',
					icon: '/resources/icons/gutenberg-fav.png',
					title: 'Redbone',
					author: 'Childish Gambino',
					preview: 'No Preview',
					publishDate: undefined,
					languages: ['woke'],
					pages: undefined,
					formats: ['epub'],
					location: `https://www.gutenberg.org/ebooks`,
					rights: 'public domain'
				},
				{
					id: 974514,
					database: 'project gutenberg',
					icon: '/resources/icons/gutenberg-fav.png',
					title: '#29 Strattford Apts',
					author: 'Bon Iver',
					preview: 'No Preview',
					publishDate: undefined,
					languages: ['english'],
					pages: undefined,
					formats: ['epub'],
					location: `https://www.gutenberg.org/ebooks`,
					rights: 'public domain'
				}
			];

			state = reducer(state, fetchWishlistBooksSuccess(ebooks))
			expect(state.loading).to.be.equal(false)
			expect(state.error).to.be.equal(null)
			expect(state.wishlistItems).to.deep.equal(ebooks)
		})
	});

	describe('fetchWishlistBooksError', () => {
		it('should set error', () => {
			let state;
			let err = 'Invalid type error'
			state = reducer(state, fetchWishlistBooksError(err))
			expect(state.loading).to.be.equal(false)
			expect(state.error).to.be.equal(err)
		})
	});


})