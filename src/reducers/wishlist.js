import {
	FETCH_WISHLISTS_REQUEST, FETCH_WISHLISTS_SUCCESS, FETCH_WISHLISTS_ERROR,
	CHANGE_WISHLIST,
	ADD_WISHLIST_FORM,	
	ADD_NEW_WISHLIST_REQUEST, ADD_NEW_WISHLIST_SUCCESS, ADD_NEW_WISHLIST_ERROR,
	EDIT_WISHLIST_TITLE_REQUEST, EDIT_WISHLIST_TITLE_SUCCESS, EDIT_WISHLIST_TITLE_ERROR,
	REMOVE_WISHLIST_REQUEST, REMOVE_WISHLIST_SUCCESS, REMOVE_WISHLIST_ERROR,
	TOGGLE_EDIT_WISHLIST_STATUS,
	SAVE_BOOK_TO_WISHLIST_REQUEST, SAVE_BOOK_TO_WISHLIST_SUCCESS, SAVE_BOOK_TO_WISHLIST_ERROR,
	FETCH_WISHLIST_BOOKS_REQUEST, FETCH_WISHLIST_BOOKS_SUCCESS, FETCH_WISHLIST_BOOKS_ERROR,
	REMOVE_BOOK_FROM_WISHLIST_REQUEST, REMOVE_BOOK_FROM_WISHLIST_SUCCESS, REMOVE_BOOK_FROM_WISHLIST_ERROR
} from '../actions/wishlist'


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
		
		let wishlists = []
		let wishlistNames = [];

			//places wishlists in same order in array after edit
		state.wishlists.forEach((item, index) => {
			if(item.title === oldTitle){
				wishlists[index] = wishlist
			} else{
				wishlists[index] = item
			}
		})

		state.wishlistNames.forEach((item, index) => {
			if(item === oldTitle){
				wishlistNames[index] = wishlistName
			} else{
				wishlistNames[index] = item
			}
		})
		
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

	if(action.type === SAVE_BOOK_TO_WISHLIST_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null
		})
	};

	if(action.type === SAVE_BOOK_TO_WISHLIST_SUCCESS){
		
			//filter out list with new list id
		let wishlistsArray = state.wishlists.filter(list => list.id !== action.wishlist.id)
			//add new list into array
		let wishlists = [...wishlistsArray, action.wishlist]

		return Object.assign({}, state, {
			wishlists
		})
	};

	if(action.type === SAVE_BOOK_TO_WISHLIST_ERROR){
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	};

	if(action.type === FETCH_WISHLIST_BOOKS_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null
		})
	};

	if(action.type === FETCH_WISHLIST_BOOKS_SUCCESS){
		return Object.assign({}, state, {
			loading: false,
			error: null,
			wishlistItems: action.items
		})
	};

	if(action.type === FETCH_WISHLIST_BOOKS_ERROR){
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	};

	if(action.type === REMOVE_BOOK_FROM_WISHLIST_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null
		})
	};

	if(action.type === REMOVE_BOOK_FROM_WISHLIST_SUCCESS){
		
		let wishlists = []

			//places wishlists in same order in array after item is removed
		state.wishlists.forEach((item, index) => {
			if(item.title === action.wishlist.title){
				wishlists[index] = action.wishlist
			} else{
				wishlists[index] = item
			}
		})

		return Object.assign({}, state, {
			loading: false,
			error: null,
			wishlists
		})
	};

	if(action.type === REMOVE_BOOK_FROM_WISHLIST_ERROR){
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	};


	return state;
}