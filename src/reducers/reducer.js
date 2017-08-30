import {
	TOGGLE_LOGIN_REGISTER,
	SHOW_LOGIN_REGISTER,
	CHANGE_WISHLIST,
	TOGGLE_SUPPLEMENT
} from '../actions/actions'


const initialState = {
						'navLinks': ['Login/Register', 'Wishlists'],
						'loginRegisterForm': {clicked: false,
											  form: 'register'},
						'supplement': 'author',
						'details': 'authorSupplement',
						'results': [
						{
							'title': "The Story of Brevity: How I Learned To Pare Down My Writing to Get to the Main Point in Short Order and Not Wax Eloquent about Superfluous Details that Either have No Bearing on My Original Point or Lack Concision",
							'author': "Hubert Blaine Wolferuhigschlegelsteinhausenbergerkraftenwerkdorffschlosszeug",
							'preview': "none",
							'publishDate': "1832",
							'languages': ['english'],
							'pages': "643",
							'formats': ['epub', 'pdf'],
							'location': 'project gutenberg',
							'locationIcon': '/',
							'locationUrl': '/'
						},
						{
							'title': "Napoleon the Great",
							'author': "Andrew Roberts",
							'preview': "/",
							'publishDate': "1832",
							'languages': ['english', 'french'],
							'pages': "643",
							'formats': ['epub', 'mobi', 'pdf'],
							'location': 'feedbooks',
							'locationIcon': '/',
							'locationUrl': '/'
						},
						{
							'title': "Jefferson and His Time",
							'author': "Thomas Malone",
							'preview': "/",
							'publishDate': "1832",
							'languages': ['english'],
							'pages': "643",
							'formats': ['epub', 'mobi', 'pdf'],
							'location': 'europeana',
							'locationIcon': '/',
							'locationUrl': '/'
						},
						{
							'title': "Napoleon's Letters",
							'author': "",
							'preview': "none",
							'publishDate': "1832",
							'languages': ['english', 'french'],
							'pages': "643",
							'formats': ['epub', 'mobi', 'pdf'],
							'location': 'open library',
							'locationIcon': '/',
							'locationUrl': '/'
						},
						{
							'title': "Citizens: A Chronicle of the French Revolution",
							'author': "Simon Schama",
							'preview': "/",
							'publishDate': "1832",
							'languages': ['english'],
							'pages': "643",
							'formats': ['epub', 'mobi', 'pdf'],
							'location': 'project gutenberg',
							'locationIcon': '/',
							'locationUrl': '/'
						},
						{
							'title': "Lorem",
							'author': "Ip Sum",
							'preview': "/",
							'publishDate': "1832",
							'languages': ['english', 'spanish', 'french'],
							'pages': "643",
							'formats': ['epub', 'mobi', 'pdf'],
							'location': 'project gutenberg',
							'locationIcon': '/',
							'locationUrl': '/'
						},
						{
							'title': "Lore",
							'author': "M. Ipsum",
							'preview': "none",
							'publishDate': "1832",
							'languages': ['english'],
							'pages': "643",
							'formats': ['epub', 'mobi', 'pdf'],
							'location': 'project gutenberg',
							'locationIcon': '/',
							'locationUrl': '/'
						}],
						'authorSupplement': {
												name: 'M. Ipsum',
												dates: '1800-1900',
												image: '/',
												summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
												location: '/'
											},
						'bookSupplement': {
											title: 'Lorem',
											published: '1843',
											cover: '/',
											summary: 'Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
											location: '/'},
					currentList: 'Biographies',
					wishlists: {
								'Biographies': [
								{'title': "The Story of Brevity: How I Learned To Pare Down My Writing to Get to the Main Point in Short Order and Not Wax Eloquent about Superfluous Details that Either have No Bearing on My Original Point or Lack Concision",
								'author': "Hubert Blaine Wolferuhigschlegelsteinhausenbergerkraftenwerkdorffschlosszeug",
								'preview': "none",
								'publishDate': "1832",
								'languages': ['english'],
								'pages': "643",
								'formats': ['epub', 'pdf'],
								'location': 'project gutenberg',
								'locationIcon': '/',
								'locationUrl': '/'},
							{'title': "Napoleon the Great",
								'author': "Andrew Roberts",
								'preview': "/",
								'publishDate': "1832",
								'languages': ['english', 'french'],
								'pages': "643",
								'formats': ['epub', 'mobi', 'pdf'],
								'location': 'feedbooks',
								'locationIcon': '/',
								'locationUrl': '/'}
							],

							'French Literature': [{'title': "Jefferson and His Time",
								'author': "Thomas Malone",
								'preview': "/",
								'publishDate': "1832",
								'languages': ['english'],
								'pages': "643",
								'formats': ['epub', 'mobi', 'pdf'],
								'location': 'europeana',
								'locationIcon': '/',
								'locationUrl': '/'},
							{'title': "Napoleon's Letters",
								'author': "",
								'preview': "none",
								'publishDate': "1832",
								'languages': ['english', 'french'],
								'pages': "643",
								'formats': ['epub', 'mobi', 'pdf'],
								'location': 'open library',
								'locationIcon': '/',
								'locationUrl': '/'},
							{'title': "Citizens: A Chronicle of the French Revolution",
								'author': "Simon Schama",
								'preview': "/",
								'publishDate': "1832",
								'languages': ['english'],
								'pages': "643",
								'formats': ['epub', 'mobi', 'pdf'],
								'location': 'project gutenberg',
								'locationIcon': '/',
								'locationUrl': '/'}],

							"SciFi": [{'title': "Lorem",
								'author': "Ip Sum",
								'preview': "/",
								'publishDate': "1832",
								'languages': ['english', 'spanish', 'french'],
								'pages': "643",
								'formats': ['epub', 'mobi', 'pdf'],
								'location': 'project gutenberg',
								'locationIcon': '/',
								'locationUrl': '/'},
							{'title': "Lore",
								'author': "M. Ipsum",
								'preview': "none",
								'publishDate': "1832",
								'languages': ['english'],
								'pages': "643",
								'formats': ['epub', 'mobi', 'pdf'],
								'location': 'project gutenberg',
								'locationIcon': '/',
								'locationUrl': '/'}],
							
							"Russian Literature": []
					}
				}


export default (state, action) => {
	state = state || initialState;

	if (action.type === TOGGLE_LOGIN_REGISTER){
		state = Object.assign({}, initialState, {
			loginRegisterForm: {
				clicked: true, 
				form: action.form
			}
		});

		return state
	}

	if (action.type === SHOW_LOGIN_REGISTER){
		state = Object.assign({}, initialState, {
			loginRegisterForm: {
				clicked: action.clicked,
			}
		})

		return state
	}

	if(action.type === CHANGE_WISHLIST){
		state = Object.assign({}, initialState, {
			currentList: action.currentList
		})

		return state
	}

	if(action.type === TOGGLE_SUPPLEMENT){
		state = Object.assign({}, initialState, {
			supplement: action.supplement,
			details: action.details
		})
	}

	return state
}