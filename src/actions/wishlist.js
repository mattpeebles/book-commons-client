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

        	let wishlistNames = [];
            let wishlistsEdit = {};

        	res.wishlists.forEach(list => {
        		let title = list.title
                wishlistNames.push(title)

                wishlistsEdit[title] = false
        	})


        	dispatch(fetchWishlistsSuccess(res.wishlists, wishlistNames, wishlistsEdit))
        })
        .catch(err => {
        	dispatch(fetchWishlistsError(err))
        })
}

export const RESET_WISHLIST_STATE = 'RESET_WISHLIST_STATE'
export const resetWishlistState = () => ({
    type: RESET_WISHLIST_STATE
})

export const FETCH_WISHLISTS_REQUEST = 'FETCH_WISHLISTS_REQUEST'
export const fetchWishlistsRequest = () => ({
	type: FETCH_WISHLISTS_REQUEST
})

export const FETCH_WISHLISTS_SUCCESS = 'FETCH_WISHLISTS_SUCCESS'
export const fetchWishlistsSuccess = (wishlists, wishlistNames, wishlistsEdit) => ({
	type: FETCH_WISHLISTS_SUCCESS,
	wishlists,
	wishlistNames,
    wishlistsEdit
})

export const FETCH_WISHLISTS_ERROR = 'FETCH_WISHLISTS_ERROR'
export const fetchWishlistsError = (error) => ({
	type: FETCH_WISHLISTS_ERROR,
	error
})

export const CHANGE_WISHLIST = 'CHANGE_WISHLIST'
export const changeWishlist = (list) => ({
    type: CHANGE_WISHLIST,
    currentList: list
})

export const TOGGLE_EDIT_WISHLIST_STATUS = 'TOGGLE_EDIT_WISHLIST_STATUS'
export const toggleEditWishlistStatus = (list) => ({
    type: TOGGLE_EDIT_WISHLIST_STATUS,
    list: list
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


export const editWishlistTitle = (oldTitle, newTitle) => (dispatch, getState) => {
    dispatch(editWishlistTitleRequest)

    let token = getState().auth.authToken
    let wishlist = getState().wishlist.wishlists.filter(list => list.title === oldTitle)[0]

    let updateWishlist = {
        listId: wishlist.id,
        title: newTitle
    }

    return fetch(`${API_BASE_URL}/wishlists/${wishlist.id}`, {
        method: 'PUT',
        body: JSON.stringify(updateWishlist),
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(wishlist => {
        let wishlistName = wishlist.title
        dispatch(editWishlistTitleSuccess(wishlist, wishlistName, oldTitle))
    })
    .catch(err => {
        dispatch(editWishlistTitleError(err))
    })
};

export const EDIT_WISHLIST_TITLE_REQUEST = 'EDIT_WISHLIST_TITLE_REQUEST'
export const editWishlistTitleRequest = () => ({
    type: EDIT_WISHLIST_TITLE_REQUEST
})

export const EDIT_WISHLIST_TITLE_SUCCESS = 'EDIT_WISHLIST_TITLE_SUCCESS'
export const editWishlistTitleSuccess = (wishlist, wishlistName, oldTitle) => ({
    type: EDIT_WISHLIST_TITLE_SUCCESS,
    wishlist,
    wishlistName,
    oldTitle
})
export const EDIT_WISHLIST_TITLE_ERROR = 'EDIT_WISHLIST_TITLE_ERROR'
export const editWishlistTitleError = (err) => ({
    type: EDIT_WISHLIST_TITLE_ERROR,
    error: err
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

export const saveBookToWishlist = (listId, ebook) => (dispatch, getState)=> {
    dispatch(saveBookToWishlistRequest())

    let token = getState().auth.authToken
    let book = JSON.stringify(ebook)
        
        //save ebook to database
        //api checks to see if ebook already exists
        //in database
    return fetch(`${API_BASE_URL}/ebooks`, {
        method: 'POST',
        body: book,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(res => {
        let ebookId = res.ebook.id;

        let addObj = {
            listId,
            item: ebookId
        }

            //save id to wishlist
        return fetch(`${API_BASE_URL}/wishlists/${listId}/add/${ebookId}`, {
            method: 'PUT',
            body: JSON.stringify(addObj),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
    })
    .then(res => res.json())
    .then(list => {
        dispatch(saveBookToWishlistSuccess(list))
    })
    .catch(err => dispatch(saveBookToWishlistError(err)))
};

export const SAVE_BOOK_TO_WISHLIST_REQUEST = 'SAVE_BOOK_TO_WISHLIST_REQUEST'
export const saveBookToWishlistRequest = () => ({
    type: SAVE_BOOK_TO_WISHLIST_REQUEST
});

export const SAVE_BOOK_TO_WISHLIST_SUCCESS = 'SAVE_BOOK_TO_WISHLIST_SUCCESS'
export const saveBookToWishlistSuccess = (list) => ({
    type: SAVE_BOOK_TO_WISHLIST_SUCCESS,
    wishlist: list
});

export const SAVE_BOOK_TO_WISHLIST_ERROR = 'SAVE_BOOK_TO_WISHLIST_ERROR'
export const saveBookToWishlistError = (err) => ({
    type: SAVE_BOOK_TO_WISHLIST_ERROR,
    error: err
});

export const fetchWishlistBooks = listId => dispatch => {
    dispatch(fetchWishlistBooksRequest())

    return fetch(`${API_BASE_URL}/ebooks/wishlist/${listId}`)
        .then(res => res.json())
        .then(res => {
            let ebooks = res.ebooks

            dispatch(fetchWishlistBooksSuccess(ebooks))
        })
        .catch(err => dispatch(fetchWishlistBooksError(err)))
};

export const FETCH_WISHLIST_BOOKS_REQUEST = 'FETCH_WISHLIST_BOOKS_REQUEST'
export const fetchWishlistBooksRequest = () => ({
    type: FETCH_WISHLIST_BOOKS_REQUEST
});

export const FETCH_WISHLIST_BOOKS_SUCCESS = 'FETCH_WISHLIST_BOOKS_SUCCESS'
export const fetchWishlistBooksSuccess = (ebooks) => ({
    type: FETCH_WISHLIST_BOOKS_SUCCESS,
    items: ebooks
});

export const FETCH_WISHLIST_BOOKS_ERROR = 'FETCH_WISHLIST_BOOKS_ERROR'
export const fetchWishlistBooksError = (err) => ({
    type: FETCH_WISHLIST_BOOKS_ERROR,
    error: err
});

export const removeBookFromWishlist = (listId, ebookId) => dispatch => {
    dispatch(removeBookFromWishlistRequest())

    let updateBody = {
        listId: listId,
        ebookId: ebookId
    };

    return fetch(`${API_BASE_URL}/wishlists/${listId}/delete/${ebookId}`, {
        method: 'PUT',
        body: JSON.stringify(updateBody),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        let list = res.wishlist;

        dispatch(removeBookFromWishlistSuccess(list))
    })
    .catch(err => dispatch(removeBookFromWishlistError))
};

export const REMOVE_BOOK_FROM_WISHLIST_REQUEST = 'REMOVE_BOOK_FROM_WISHLIST_REQUEST'
export const removeBookFromWishlistRequest = () => ({
    type: REMOVE_BOOK_FROM_WISHLIST_REQUEST
});
export const REMOVE_BOOK_FROM_WISHLIST_SUCCESS = 'REMOVE_BOOK_FROM_WISHLIST_SUCCESS'
export const removeBookFromWishlistSuccess = (list) => ({
    type: REMOVE_BOOK_FROM_WISHLIST_SUCCESS,
    wishlist: list
});
export const REMOVE_BOOK_FROM_WISHLIST_ERROR = 'REMOVE_BOOK_FROM_WISHLIST_ERROR'
export const removeBookFromWishlistError = (err) => ({
    type: REMOVE_BOOK_FROM_WISHLIST_ERROR,
    error: err
});

