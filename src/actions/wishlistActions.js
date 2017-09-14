import {setCurrentUser} from './auth'

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
        		wishlistNames.push(list.title)
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

export const ADD_WISHLIST_FORM = 'ADD_WISHLIST_FORM'
export const addWishlistForm = (bool) => ({
    type: ADD_WISHLIST_FORM,
    addWishlist: bool
})

export const addNewWishlist = (title) => (dispatch, getState) => {
    dispatch(addNewWishlistRequest)
    const token = getState().auth.authToken
    let wishlist = JSON.stringify({
        title: title
    })

    return fetch(`${API_BASE_URL}/wishlists`, {
        method: 'POST',
        body: wishlist,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        let wishlistName = res.wishlist.title

        let wishlist = res.wishlist

        dispatch(addNewWishlistSuccess(wishlist, wishlistName))
        dispatch(setCurrentUser(res.user))
    })
    .catch(err => {
        dispatch(addNewWishlistError(err))
    })
}

export const ADD_NEW_WISHLIST_REQUEST = 'ADD_NEW_WISHLIST_REQUEST'
export const addNewWishlistRequest = () => ({
    type: ADD_NEW_WISHLIST_REQUEST
})

export const ADD_NEW_WISHLIST_SUCCESS = 'ADD_NEW_WISHLIST_SUCCESS'
export const addNewWishlistSuccess = (wishlist, wishlistName) => ({
    type: ADD_NEW_WISHLIST_SUCCESS,
    wishlist,
    wishlistName
})

export const ADD_NEW_WISHLIST_ERROR = 'ADD_NEW_WISHLIST_ERROR'
export const addNewWishlistError = (error) => ({
    type: ADD_NEW_WISHLIST_ERROR,
    error
})


export const removeWishlist = (title) => (dispatch, getState) => {
    dispatch(removeWishlistRequest)
    let token = getState().auth.authToken
    let wishlist = getState().wishlist.wishlists.filter(list => list.title === title)[0];
    
    return fetch(`${API_BASE_URL}/wishlists/${wishlist.id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        dispatch(removeWishlistSuccess())
        dispatch(fetchWishlists())
    })
    .catch(err => {
        dispatch(removeWishlistError(err))
    })
}

export const REMOVE_WISHLIST_REQUEST = 'REMOVE_WISHLIST_REQUEST'
export const removeWishlistRequest = () => ({
    type: REMOVE_WISHLIST_REQUEST
})

export const REMOVE_WISHLIST_SUCCESS = 'REMOVE_WISHLIST_SUCCESS'
export const removeWishlistSuccess = (title, wishlistId) => ({
    type: REMOVE_WISHLIST_SUCCESS
})

export const REMOVE_WISHLIST_ERROR = 'REMOVE_WISHLIST_ERROR'
export const removeWishlistError = (error) => ({
    type: REMOVE_WISHLIST_ERROR,
    error
})