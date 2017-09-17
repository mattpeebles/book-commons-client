import { 
	fetchWishlists, FETCH_WISHLISTS_SUCCESS, fetchWishlistsSuccess,
	TOGGLE_EDIT_WISHLIST_STATUS, toggleEditWishlistStatus, 
	ADD_WISHLIST_FORM, addWishlistForm, CHANGE_WISHLIST, changeWishlist,
	addNewWishlist, ADD_NEW_WISHLIST_SUCCESS, addNewWishlistSuccess,
	editWishlistTitle, EDIT_WISHLIST_TITLE_SUCCESS, editWishlistTitleSuccess,
	removeWishlist, REMOVE_WISHLIST_SUCCESS, removeWishlistSuccess,
	saveBookToWishlist, SAVE_BOOK_TO_WISHLIST_SUCCESS, saveBookToWishlistSuccess, saveBookToWishlistRequest,
	fetchWishlistBooks, fetchWishlistBooksRequest, fetchWishlistBooksSuccess,
	removeBookFromWishlist, removeBookFromWishlistRequest, REMOVE_BOOK_FROM_WISHLIST_SUCCESS, removeBookFromWishlistSuccess
} from './wishlist';

const {API_BASE_URL} = require('../config');

const token = 'randomAlphanumericaString'
const getState = jest.fn().mockImplementation(() => {
	return {
		auth: {
			authToken: token
		},
		wishlist: {
			wishlists: [
				{
					id: 32341234,
					title: 'Biographies',
					items: []
				},
				{
					id: 34134104,
					title: 'Kanye',
					items: []
				}
			]
		}
	} 
});

describe('fetchWishlists', () => {
	it('should return wishlists and wishlistNames action', () => {
			const res = {
				wishlists: [
							{
								id: 893710983741,
								title: "Biographies",
								items: []

							}, 
							{
								id: 193874198234,
								title: "SciFi",
								items: []
							}, 
							{
								id: 13412341234,
								title: "Fantasy",
								items: []
							}, 
							{
								id: 5948719384,
								title: "Literature",
								items: []
							}
								]
				}

			const wishlistNames = ['Biographies', 'SciFi', 'Fantasy', 'Literature']
	        
	        
			const wishlistsEdit = {
				'Biographies': false,
				'SciFi': false,
				'Fantasy': false,
				'Literature': false
			}


	        global.fetch = jest.fn().mockImplementation(() =>
	            Promise.resolve({
	                ok: true,
	                json() {
	                    return res;
	                }
	            })
	        );

			const dispatch = jest.fn()

	        return fetchWishlists()(dispatch, getState).then(() => {
	        	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/wishlists`, {"headers": {"Authorization": `Bearer ${token}`}, "method": "GET"})
	       		expect(dispatch).toHaveBeenCalledWith(fetchWishlistsSuccess(res.wishlists, wishlistNames, wishlistsEdit))
	        })
	})
});


describe('toggleEditWishlistStatus', () => {
	it('should toggle boolean value of wishlist in wishlistEdit', () => {
		const list = 'Biographies'
		const action = toggleEditWishlistStatus(list)
		expect(action.type).toEqual(TOGGLE_EDIT_WISHLIST_STATUS)
		expect(action.list).toEqual(list)
	})
});

describe('addWishlistForm', () => {
	it('should change addwishlist value to boolean passed in', () => {
		const bool = true
		const action = addWishlistForm(bool)
		expect(action.type).toEqual(ADD_WISHLIST_FORM)
		expect(action.addWishlist).toEqual(bool)
	})
});

describe('changeWishlist', () => {
	it('should change current list in state', () => {
		const list = 'Biographies'
		const action = changeWishlist(list)
		expect(action.type).toEqual(CHANGE_WISHLIST)
		expect(action.currentList).toEqual(list)
	})
});

describe('addNewWishlist', () => {
	it('should add new wishlist to database and state', () => {
		const dispatch = jest.fn()
		
		let title = 'Literature'
		
		let wishlist = JSON.stringify({
			title
		})

		let res = {
			wishlist: {
				id: 321341234,
				title: 'Literature',
				items: []
			}
		};


		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json(){
					return res
				}
			})
		);

		return addNewWishlist(title)(dispatch, getState).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/wishlists`, {"body": `${wishlist}`, "headers": {"Authorization": `Bearer ${token}`,  "Content-Type": "application/json"}, "method": "POST"})
			expect(dispatch).toHaveBeenCalledWith(addNewWishlistSuccess(res.wishlist, title))
		})
	})
});

describe('editWishlistTitle', () => {
	it('should update title in wishlist object', () => {
		let oldWishlist= getState().wishlist.wishlists[1]
		let newTitle = 'The Life of Pablo'
		let oldTitle = 'Kanye'


		let newWishlist = {
			listId: oldWishlist.id,
			title: newTitle
		}

		
		let wishlist = {
			id: oldWishlist.id,
			title: 'The Life of Pablo',
			items: []
		}

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json(){
					return wishlist
				}
			})
		);

		let dispatch = jest.fn()

		return editWishlistTitle(oldTitle, newTitle)(dispatch, getState).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/wishlists/${newWishlist.listId}`, {"body": `${JSON.stringify(newWishlist)}`, "headers": {"Authorization": `Bearer ${token}`,  "Content-Type": "application/json"}, "method": "PUT"})
			expect(dispatch).toHaveBeenCalledWith(editWishlistTitleSuccess(wishlist, newTitle, oldTitle))
		})
	})
});

describe('removeWishlist', () => {
	it('should remove wishlist from names and wishlists array', () => {
       
		const res = {
				wishlists: [
							{
								id: 893710983741,
								title: "Biographies",
								items: []

							}, 
							{
								id: 193874198234,
								title: "SciFi",
								items: []
							}, 
							{
								id: 13412341234,
								title: "Fantasy",
								items: []
							}, 
							{
								id: 5948719384,
								title: "Literature",
								items: []
							}
								]
				}


        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return res;
                }
            })
        );

        let title = 'Kanye'
        let wishlist = getState().wishlist.wishlists.filter(list => list.title === title)[0]

        const dispatch = jest.fn()
        const callback = jest.fn()

        return removeWishlist('Kanye')(dispatch, getState).then(() => {
        	expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/wishlists/${wishlist.id}`, {"headers": {"Authorization": `Bearer ${token}`}, "method": "DELETE"})
       		expect(dispatch).toHaveBeenCalledWith(removeWishlistSuccess())
        })
	})
});

describe('saveBookToWishlist', () => {
	it('should save ebook id to wishlist', () => {
		
		let res = {
			ebook: {
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
			list: {
				id: 323,
				title: 'GOAT',
				items: []
			}
		}

		let listId = 323

		let addObj = {
			listId,
			item: res.id
		}

		let list = {
			id: listId,
			'title': 'GOAT',
			items: [40394]
		}

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json(){
					return res
				}
			})
		);

		let dispatch = jest.fn()

		return saveBookToWishlist(listId, res)(dispatch, getState).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/ebooks`, {"body": `${JSON.stringify(res)}`, "headers": {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"}, "method": "POST"})
			expect(dispatch).toHaveBeenCalledWith(saveBookToWishlistRequest())
			expect(dispatch).toHaveBeenCalledWith(saveBookToWishlistSuccess(res))
		})
	});
});

describe('fetchWishlistBooks', () => {
	it('should return all items in wishlist', () => {

		let listId = 65342;

		let res = {
			ebooks: [
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
			]};

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json(){
					return res
				}
			})
		);

		let dispatch = jest.fn()

		return fetchWishlistBooks(listId)(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/ebooks/wishlist/${listId}`)
			expect(dispatch).toHaveBeenCalledWith(fetchWishlistBooksSuccess(res.ebooks))
		})
	})
});

describe('removeBookFromWishlist', () => {
	it('should remove bookid from wishlist items', () => {
		let dispatch = jest.fn();

		let listId = 3958034;
		let ebookId = 874509;

		let res = {
			wishlist: {
				id: listId,
				title: 'Frank Ocean',
				items: []
			}
		};

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json(){
					return res
				}
			})
		);

		return removeBookFromWishlist(listId, ebookId)(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/wishlists/${listId}/delete/${ebookId}`, {
				method: 'PUT', body: JSON.stringify({listId, ebookId}), headers: {"Content-Type": "application/json"}
			});
			expect(dispatch).toHaveBeenCalledWith(removeBookFromWishlistSuccess(res.wishlist))
		})

	})
});