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

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const addToWishlist = (item, list) => ({
	type: ADD_TO_WISHLIST,
	item: item,
	list: list
})

export const CHANGE_WISHLIST = 'CHANGE_WISHLIST'
export const changeWishlist = (list) => ({
	type: CHANGE_WISHLIST,
	currentList: list
})

export const TOGGLE_SUPPLEMENT = 'TOGGLE_SUPPLEMENT'
export const toggleSupplement = (info) => ({
	type: TOGGLE_SUPPLEMENT,
	supplement: info,
	details: `${info}Supplement`
})

export const ADD_WISHLIST_FORM = 'ADD_WISHLIST_FORM'
export const addWishlistForm = (bool) => ({
	type: ADD_WISHLIST_FORM,
	addWishlist: bool
})

export const ADD_NEW_WISHLIST = 'ADD_NEW_WISHLIST'
export const addNewWishlist = (list) => ({
	type: ADD_NEW_WISHLIST,
	newWishlist: list
})

export const TOGGLE_EDIT_WISHLIST_STATUS = 'TOGGLE_EDIT_WISHLIST_STATUS'
export const toggleEditWishlistStatus = (list) => ({
	type: TOGGLE_EDIT_WISHLIST_STATUS,
	list: list
})

export const EDIT_WISHLIST_TITLE = 'EDIT_WISHLIST_TITLE'
export const editWishlistTitle = (newTitle, oldTitle) => ({
	type: EDIT_WISHLIST_TITLE,
	newTitle,
	oldTitle
})

export const DELETE_WISHLIST = 'DELETE_WISHLIST'
export const deleteWishlist = (list) => ({
	type: DELETE_WISHLIST,
	deleteWishlist: list
})