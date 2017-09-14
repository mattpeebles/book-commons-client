import {
	FETCH_WISHLISTS_REQUEST,
	FETCH_WISHLISTS_SUCCESS,
	FETCH_WISHLISTS_ERROR,
	ADD_WISHLIST_FORM,	
	ADD_NEW_WISHLIST_REQUEST,	
	ADD_NEW_WISHLIST_SUCCESS,
	ADD_NEW_WISHLIST_ERROR,
	REMOVE_WISHLIST_REQUEST,
	REMOVE_WISHLIST_SUCCESS,
	REMOVE_WISHLIST_ERROR
} from '../actions/wishlistActions'


const initialState = {
	loading: false,
	error: null,
	currentList: undefined,
	wishlistNames: [],
	wishlists: null,
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
		return Object.assign({}, state, {
			loading: false,
			error: null,
			wishlistNames: action.wishlistNames,
			wishlists: action.wishlists
		})
	}

	if (action.type === FETCH_WISHLISTS_ERROR){
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		})
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