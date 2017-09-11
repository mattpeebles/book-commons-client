const {API_BASE_URL} = require('../config');

export const fetchWishlists = () => dispatch => {
	dispatch(fetchWishlistsRequest)
	return fetch(`${API_BASE_URL}/wishlists`)
		.then(res => {
        if (!res.ok) {
            if (
                res.headers.has('content-type') &&
                res.headers
                    .get('content-type')
                    .startsWith('application/json')
            ) {
                // It's a nice JSON error returned by us, so decode it
                return res.json().then(err => Promise.reject(err));
            }
            // It's a less informative error returned by express
            return Promise.reject({
                code: res.status,
                message: res.statusText
            });
        }
        
        return res.json()
    })
    .then(res => {

    	let wishlistNames = []

    	res.wishlists.forEach(list => {
    		wishlistNames.push(list.id)
    	})

    	console.log(wishlistNames, res.wishlists )

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