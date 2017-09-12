const {API_BASE_URL} = require('../config');

export const fetchWishlists = () => (dispatch, getState) => {
    dispatch(fetchWishlistsRequest)
	const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/wishlists`, {
            method: 'GET',
            headers: {
                // Provide our email and password as login credentials
                Authorization: `Bearer ${authToken}`
            }
        })
		.then(res => res.json())
        .then(res => {

        	let wishlistNames = []

        	res.wishlists.forEach(list => {
        		wishlistNames.push(list.id)
        	})

        	dispatch(fetchWishlistsSuccess(res.wishlists, wishlistNames))
        })
        .catch(err => {
        	dispatch(fetchWishlistsError(err))
        })
}


export const FETCH_WISHLISTS_REQUEST = 'FETCH_WISHLISTS_REQUEST'
export const fetchWishlistsRequest = () => ({
	type: FETCH_WISHLISTS_REQUEST
})

export const FETCH_WISHLISTS_SUCCESS = 'FETCH_WISHLISTS_SUCCESS'
export const fetchWishlistsSuccess = (wishlists, wishlistNames) => ({
	type: FETCH_WISHLISTS_SUCCESS,
	wishlists,
	wishlistNames
})

export const FETCH_WISHLISTS_ERROR = 'FETCH_WISHLISTS_ERROR'
export const fetchWishlistsError = (error) => ({
	type: FETCH_WISHLISTS_ERROR,
	error
})