// import {
// 	TOGGLE_SUPPLEMENT
// } from '../actions/actions'


// const initialState = {
// 						'supplement': 'author',
// 						'details': 'authorSupplement',
// 						'results': [
// 							{
// 								'title': "The Story of Brevity: How I Learned To Pare Down My Writing to Get to the Main Point in Short Order and Not Wax Eloquent about Superfluous Details that Either have No Bearing on My Original Point or Lack Concision",
// 								'author': "Hubert Blaine Wolferuhigschlegelsteinhausenbergerkraftenwerkdorffschlosszeug",
// 								'preview': "none",
// 								'publishDate': "1832",
// 								'languages': ['english'],
// 								'pages': "643",
// 								'formats': ['epub', 'pdf'],
// 								'location': 'project gutenberg',
// 								'locationIcon': '/',
// 								'locationUrl': '/'
// 							},
// 							{
// 								'title': "Napoleon the Great",
// 								'author': "Andrew Roberts",
// 								'preview': "/",
// 								'publishDate': "1832",
// 								'languages': ['english', 'french'],
// 								'pages': "643",
// 								'formats': ['epub', 'mobi', 'pdf'],
// 								'location': 'feedbooks',
// 								'locationIcon': '/',
// 								'locationUrl': '/'
// 							},
// 							{
// 								'title': "Jefferson and His Time",
// 								'author': "Thomas Malone",
// 								'preview': "/",
// 								'publishDate': "1832",
// 								'languages': ['english'],
// 								'pages': "643",
// 								'formats': ['epub', 'mobi', 'pdf'],
// 								'location': 'europeana',
// 								'locationIcon': '/',
// 								'locationUrl': '/'
// 							},
// 							{
// 								'title': "Napoleon's Letters",
// 								'author': "",
// 								'preview': "none",
// 								'publishDate': "1832",
// 								'languages': ['english', 'french'],
// 								'pages': "643",
// 								'formats': ['epub', 'mobi', 'pdf'],
// 								'location': 'open library',
// 								'locationIcon': '/',
// 								'locationUrl': '/'
// 							},
// 							{
// 								'title': "Citizens: A Chronicle of the French Revolution",
// 								'author': "Simon Schama",
// 								'preview': "/",
// 								'publishDate': "1832",
// 								'languages': ['english'],
// 								'pages': "643",
// 								'formats': ['epub', 'mobi', 'pdf'],
// 								'location': 'project gutenberg',
// 								'locationIcon': '/',
// 								'locationUrl': '/'
// 							},
// 							{
// 								'title': "Lorem",
// 								'author': "Ip Sum",
// 								'preview': "/",
// 								'publishDate': "1832",
// 								'languages': ['english', 'spanish', 'french'],
// 								'pages': "643",
// 								'formats': ['epub', 'mobi', 'pdf'],
// 								'location': 'project gutenberg',
// 								'locationIcon': '/',
// 								'locationUrl': '/'
// 							},
// 							{
// 								'title': "Lore",
// 								'author': "M. Ipsum",
// 								'preview': "none",
// 								'publishDate': "1832",
// 								'languages': ['english'],
// 								'pages': "643",
// 								'formats': ['epub', 'mobi', 'pdf'],
// 								'location': 'project gutenberg',
// 								'locationIcon': '/',
// 								'locationUrl': '/'
// 							}
// 						],
// 						'authorSupplement': {
// 												name: 'M. Ipsum',
// 												dates: '1800-1900',
// 												image: '/',
// 												summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 												location: '/'
// 											},
// 						'bookSupplement': {
// 											title: 'Lorem',
// 											published: '1843',
// 											cover: '/',
// 											summary: 'Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
// 											location: '/'},
// 			}


// export default (state, action) => {
// 	state = state || initialState;

// 		//WILL BE FULLY FLESHED OUT IN THE BACKEND	
// 	// if(action.type === ADD_TO_WISHLIST){
		
// 	// 	let {title, author, preview, publishDate, languages, 
// 	// 	pages, formats, location, locationIcon, locationUrl} = action.item
		
// 	// 			//overly complicated, can just assing object
// 	// 	let ebook = {
// 	// 		wishlist: action.list,
// 	// 		title,
// 	// 		author,
// 	// 		preview,
// 	// 		publishDate,
// 	// 		languages,
// 	// 		pages,
// 	// 		formats,
// 	// 		location,
// 	// 		locationIcon,
// 	// 		locationUrl

// 	// 	}
			
// 	// 		//prevents duplicates of same title from being added
// 	// 	if(state.wishlistItems.filter(item => item.wishlist === ebook.wishlist && item.title === ebook.title).length >= 1){
// 	// 		return state
// 	// 	}

// 	// 	else {
// 	// 		const wishlistItems = [...state.wishlistItems, ebook]


// 	// 		state = Object.assign({}, state, {
// 	// 			wishlistItems
// 	// 		})

// 	// 		return state
// 	// 	}
// 	// }

// 	// if(action.type === REMOVE_FROM_WISHLIST){
// 	// 	const ebook = action.item

// 	// 	console.log(state.wishlistItems.filter(item => item !== ebook))

// 	// 	let wishlistItems = state.wishlistItems.filter(item => item !== ebook)

// 	// 	state = Object.assign({}, state, {
// 	// 		wishlistItems
// 	// 	})

// 	// 	return state
// 	// }

// 	if(action.type === TOGGLE_SUPPLEMENT){
// 		state = Object.assign({}, state, {
// 			supplement: action.supplement,
// 			details: action.details
// 		})
// 	}

// 	return state
// }