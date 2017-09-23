import {
	EMPTY_RESULTS, NO_DATABASE_RESULTS,
	FETCH_GUTENBERG_REQUEST, FETCH_GUTENBERG_SUCCESS, FETCH_GUTENBERG_ERROR,
	FETCH_GOOGLE_REQUEST, FETCH_GOOGLE_SUCCESS, FETCH_GOOGLE_ERROR,
	FETCH_OPEN_LIBRARY_REQUEST, FETCH_OPEN_LIBRARY_SUCCESS, FETCH_OPEN_LIBRARY_ERROR,
	FETCH_AMAZON_BOOKS_SUCCESS, FETCH_AMAZON_BOOKS_ERROR,
	BOOK_SUPPLEMENT, AUTHOR_SUPPLEMENT, TOGGLE_SUPPLEMENT
} from '../actions/results'

const initialState = {
						loading: false,
						error: null,
						dbCalled: [],
						'resultsFromDatabase': null,
						'supplement': 'author',
						'details': 'authorSupplement',
						'results': [],
						'amazonResults': [],
						resultsLength: 0,
						'authorSupplement': {},
						'bookSupplement': {},
			}


export default (state, action) => {
	state = state || initialState

	if(action.type === EMPTY_RESULTS){
		return Object.assign({}, state, {
			results: [],
			authorSupplement: {},
			bookSupplement: {},
			amazonResults: [],
			resultsLength: 0
		})
	}

	if(action.type === NO_DATABASE_RESULTS){
		let dbCalled = [...state.dbCalled, action.db]

		return Object.assign({}, state, {
			loading: false,
			resultsFromDatabase: false,
			dbCalled
		})
	}

	if(action.type === BOOK_SUPPLEMENT){
		let {title, publishDate, cover, summary, location} = action.bookInfo

		let bookSupplement = {title, publishDate, cover, summary, location}

		return Object.assign({}, state, {
			bookSupplement
		})
	}

	if(action.type === AUTHOR_SUPPLEMENT){
		let {name, dates, image, summary, location} = action.authorInfo

		let authorSupplement = {name, dates, image, summary, location}

		return Object.assign({}, state, {
			authorSupplement
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
			resultsFromDatabase: true,
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
			resultsFromDatabase: true,
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
			resultsFromDatabase: true,
			results
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
			resultsFromDatabase: true,
			results
		})
	};

	if(action.type === FETCH_AMAZON_BOOKS_ERROR){
		return Object.assign({}, state, {
			loading: false,
			error: action.err
		})
	};

	if(action.type === FETCH_AMAZON_BOOKS_SUCCESS){
		let amazonResults = [...state.amazonResults, action.ebook]

		return Object.assign({}, state, {
			loading: false,
			error: null,
			dbCalled: ['Amazon'],
			amazonResults,
			resultsLength: action.length
		})
	};

	return state;
}