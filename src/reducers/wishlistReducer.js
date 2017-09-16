import {
	FETCH_WISHLISTS_REQUEST,
	FETCH_WISHLISTS_SUCCESS,
	FETCH_WISHLISTS_ERROR,
	CHANGE_WISHLIST,
	ADD_WISHLIST_FORM,	
	ADD_NEW_WISHLIST_REQUEST,	
	ADD_NEW_WISHLIST_SUCCESS,
	ADD_NEW_WISHLIST_ERROR,
	EDIT_WISHLIST_TITLE_REQUEST,
	EDIT_WISHLIST_TITLE_SUCCESS,
	EDIT_WISHLIST_TITLE_ERROR,
	REMOVE_WISHLIST_REQUEST,
	REMOVE_WISHLIST_SUCCESS,
	REMOVE_WISHLIST_ERROR,
	TOGGLE_EDIT_WISHLIST_STATUS,

} from '../actions/wishlistActions'


const initialState = {
	loading: false,
	error: null,
	firstFetch: false,
	currentList: undefined,
	wishlistNames: [],
	wishlists: null,
	wishlistsEdit: null,
	wishlistItems: [],
	addWishlist: false
}

export default (state, action) => {
	state = state || initialState;


	if(action.type === FETCH_WISHLISTS_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null
		})
	}

	if(action.type === FETCH_WISHLISTS_SUCCESS){
		
		let currentList = (action.wishlistNames !== undefined) ? action.wishlistNames[0] : undefined

		return Object.assign({}, state, {
			loading: false,
			error: null,
			firstFetch: true,
			currentList: currentList,
			wishlistNames: action.wishlistNames,
			wishlists: action.wishlists,
			wishlistsEdit: action.wishlistsEdit
		})
	}

	if (action.type === FETCH_WISHLISTS_ERROR){
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		})
	}

	if(action.type === CHANGE_WISHLIST){
		state = Object.assign({}, state, {
			currentList: action.currentList
		})

		return state
	}

	if(action.type === TOGGLE_EDIT_WISHLIST_STATUS){

		let title = action.list
		let wishlistsEdit = Object.assign({}, state.wishlistsEdit, {
			[title]: !state.wishlistsEdit[title]
		})

		state = Object.assign({}, state, {
			wishlistsEdit
		})

		return state
	}

	if(action.type === ADD_WISHLIST_FORM){
		state = Object.assign({}, state, {
			addWishlist: action.addWishlist
		})

		return state
	}

	if(action.type === ADD_NEW_WISHLIST_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null
		})
	}

	if(action.type === ADD_NEW_WISHLIST_SUCCESS){		
		let wishlistNames = [...state.wishlistNames, action.wishlistName]
		let wishlists = [...state.wishlists, action.wishlist]
		

		return Object.assign({}, state, {
			loading: false,
			error: null,
			wishlistNames,
			wishlists
		})
	}

	if (action.type === ADD_NEW_WISHLIST_ERROR){
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		})
	}

	if (action.type === EDIT_WISHLIST_TITLE_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null 
		})
	}

	if (action.type === EDIT_WISHLIST_TITLE_SUCCESS){
		
		const {wishlistName, oldTitle, wishlist} = action

		let wishlistNamesArray = state.wishlistNames.filter(title => title !== oldTitle)
		
		let wishlists = []

			//places wishlists in same order in array after edit
		state.wishlists.forEach((item, index) => {
			if(item.title === oldTitle){
				wishlists[index] = wishlist
			} else{
				wishlists[index] = item
			}
		})

		let wishlistNames = [...wishlistNamesArray, wishlistName]
		
		let wishlistsEdit = [];


    	wishlistNames.forEach(title => {
            wishlistsEdit[title] = false
    	})


		return Object.assign({}, state, {
			loading: false,
			error: null,
			wishlistNames,
			wishlists,
			wishlistsEdit
		})
	}

	if (action.type === EDIT_WISHLIST_TITLE_ERROR){
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	}

	if (action.type === REMOVE_WISHLIST_REQUEST){
		return Object.assign({}, state, {
			error: null,
			loading: true 
		})
	}
	if (action.type === REMOVE_WISHLIST_SUCCESS){

		return Object.assign({}, state, {
			loading: false,
			error: null
		})
	}
	if (action.type === REMOVE_WISHLIST_ERROR){
		return Object.assign({}, state, {
			error: action.error,
			loading: false 
		})
	}


	return state;
}