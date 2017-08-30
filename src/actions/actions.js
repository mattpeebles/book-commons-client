export const SHOW_LOGIN_REGISTER = 'SHOW_LOGIN_REGISTER'
export const showLoginRegister = (show) => ({
	type: SHOW_LOGIN_REGISTER,
	clicked: show,

})

export const TOGGLE_LOGIN_REGISTER = 'TOGGLE_LOGIN_REGISTER'
export const toggleLoginRegister = (form) => ({
	type: TOGGLE_LOGIN_REGISTER,
	form: form,
})

export const CHANGE_WISHLIST = 'CHANGE_WISHLIST'
export const changeWishlist = (list) => ({
	type: CHANGE_WISHLIST,
	currentList: list
})

export const TOGGLE_SUPPLEMENT = 'TOGGLE_SUPPLEMENT'
export const toggleSupplement = (info) => ({
	type: TOGGLE_SUPPLEMENT,
	'supplement': info,
	'details': `${info}Supplement`
})

export const ADD_WISHLIST_FORM = 'ADD_WISHLIST_FORM'
export const addWishlistForm = (bool) => ({
	type: ADD_WISHLIST_FORM,
	'addWishlist': bool
})