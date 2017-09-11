import {
	FETCH_WISHLISTS_REQUEST,
	FETCH_WISHLISTS_SUCCESS,
	FETCH_WISHLISTS_ERROR
} from '../actions/wishlistActions'


const initialState = {
	currentList: undefined,
	wishlistNames: [],
	wishlists: {}
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

	return state;
}