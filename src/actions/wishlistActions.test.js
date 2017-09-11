import { 
	fetchWishlists, fetchWishlistsRequest, FETCH_WISHLISTS_SUCCESS, fetchWishlistsSuccess
} from './wishlistActions'

describe('fetchWishlists', () => {
	it('should return wishlists and wishlistNames action', () => {
			const wishlists = [893710983741, 193874198234, 13412341234, 5948719384]
			const wishlistNames = ['Biographies', 'SciFi', 'Fantasy', 'Literature']
			const action = fetchWishlistsSuccess(wishlists, wishlistNames)
			expect(action.type).toEqual(FETCH_WISHLISTS_SUCCESS)
			expect(action.wishlists).toEqual(wishlists)
			expect(action.wishlistNames).toEqual(wishlistNames)
	})
})

describe('fetchWishlists', () => {
	it('should return wishlists and wishlistNames', () => {
		const wishlistData = [
			{
				id: 809813094,
				title: 'Biographies',
				ebooks: [21232, 1431234, 13413, 513412]
			},
			{
				id: 4514513,
				title: 'SciFi',
				ebooks: [314, 142334, 6234513, 1234412]
			},
		];

		global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return wishlistData;
                }
            })
        );

        const dispatch = jest.fn()

        return fetchWishlists()(dispatch).then(() => {
        	expect(fetch).toHaveBeenCalledWith(`https://quiet-cliffs-16571.herokuapp.com/wishlists`)
        	expect(dispatch).toHaveBeenCalledWith(fetchWishlistsRequest())

        })
	})
})