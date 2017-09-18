import {
	EMPTY_RESULTS,
	FETCH_GUTENBERG_REQUEST, FETCH_GUTENBERG_SUCCESS, FETCH_GUTENBERG_ERROR,
	FETCH_GOOGLE_REQUEST, FETCH_GOOGLE_SUCCESS, FETCH_GOOGLE_ERROR,
	FETCH_OPEN_LIBRARY_REQUEST, FETCH_OPEN_LIBRARY_SUCCESS, FETCH_OPEN_LIBRARY_ERROR,
	BOOK_SUPPLEMENT, TOGGLE_SUPPLEMENT
} from '../actions/results'

const initialState = {
						loading: false,
						error: null,
						'supplement': 'author',
						'details': 'authorSupplement',
						'results': [],
						'authorSupplement': {
												name: 'M. Ipsum',
												dates: '1800-1900',
												image: '/',
												summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
												location: '/'
											},
						'bookSupplement': {
											title: 'Lorem',
											publishDate: '1843',
											cover: '/',
											firstSentence: 'Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
											location: '/'},
			}


export default (state, action) => {
	state = state || initialState

	if(action.type === EMPTY_RESULTS){
		return Object.assign({}, state, {
			results: []
		})
	}

	if(action.type === BOOK_SUPPLEMENT){
		let {title, publishDate, firstSentence, cover, location} = action.bookInfo

		let bookSupplement = {title, publishDate, cover, firstSentence, location}

		return Object.assign({}, state, {
			bookSupplement
		})
	}

	if(action.type === TOGGLE_SUPPLEMENT){
		state = Object.assign({}, state, {
			supplement: action.supplement,
			details: action.details
		})
	}

	if(action.type === FETCH_GUTENBERG_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null
		})
	};

	if(action.type === FETCH_GUTENBERG_ERROR){
		return Object.assign({}, state, {
			loading: false,
			error: action.err
		})
	};

	if(action.type === FETCH_GUTENBERG_SUCCESS){
		let results = [...state.results, action.ebook]

		return Object.assign({}, state, {
			loading: false,
			error: null,
			results
		})
	};

	if(action.type === FETCH_GOOGLE_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null
		})
	};

	if(action.type === FETCH_GOOGLE_ERROR){
		return Object.assign({}, state, {
			loading: false,
			error: action.err
		})
	};

	if(action.type === FETCH_GOOGLE_SUCCESS){
		let results = [...state.results, action.ebook]

		return Object.assign({}, state, {
			loading: false,
			error: null,
			results
		})
	};

	if(action.type === FETCH_OPEN_LIBRARY_REQUEST){
		return Object.assign({}, state, {
			loading: true,
			error: null
		})
	};

	if(action.type === FETCH_OPEN_LIBRARY_ERROR){
		return Object.assign({}, state, {
			loading: false,
			error: action.err
		})
	};

	if(action.type === FETCH_OPEN_LIBRARY_SUCCESS){
		let results = [...state.results, action.ebook]

		return Object.assign({}, state, {
			loading: false,
			error: null,
			results
		})
	};

	return state;
}