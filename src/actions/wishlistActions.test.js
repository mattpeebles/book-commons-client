import { 
	fetchWishlists, 
	FETCH_WISHLISTS_SUCCESS, fetchWishlistsSuccess,
	ADD_WISHLIST_FORM, addWishlistForm,
	addNewWishlist, ADD_NEW_WISHLIST_SUCCESS, addNewWishlistSuccess,
	removeWishlist, REMOVE_WISHLIST_SUCCESS, removeWishlistSuccess
} from './wishlistActions';

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
	       		expect(dispatch).toHaveBeenCalledWith(fetchWishlistsSuccess(res.wishlists, wishlistNames))
	        })
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
})
