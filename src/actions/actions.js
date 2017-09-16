//const {API_BASE_URL} = require('../config');

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const addToWishlist = (item, list) => ({
	type: ADD_TO_WISHLIST,
	item: item,
	list: list
})

// export const MOVE_BETWEEN_WISHLISTS = 'MOVE_BETWEEN_WISHLISTS'
// export const moveBetweenWishlists = (item, oldList) => ({
// 	type: MOVE_BETWEEN_WISHLISTS,
// 	oldList: oldList
// })

export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'
export const removeFromWishlist = (item, list) => ({
	type: REMOVE_FROM_WISHLIST,
	item: item,
})

export const TOGGLE_SUPPLEMENT = 'TOGGLE_SUPPLEMENT'
export const toggleSupplement = (info) => ({
	type: TOGGLE_SUPPLEMENT,
	supplement: info,
	details: `${info}Supplement`
})