import {
	SHOW_LOGIN_REGISTER,	
	TOGGLE_LOGIN_REGISTER,
	ADD_TO_WISHLIST,
	REMOVE_FROM_WISHLIST,
	CHANGE_WISHLIST,
	TOGGLE_SUPPLEMENT,
	ADD_WISHLIST_FORM,
	ADD_NEW_WISHLIST,
	TOGGLE_EDIT_WISHLIST_STATUS,
	EDIT_WISHLIST_TITLE,
	DELETE_WISHLIST
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
							}
						],
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
						addWishlist: false,
						wishlists: ['Biographies', 'French Literature', 'SciFi', 'Russian Literature'],
						wishlistsEdit: [{'Biographies': false}, {'French Literature': false}, {'SciFi': false}, {'Russian Literature': false}],
						wishlistItems: [	
								{	'wishlist': 'Biographies',
									'title': 'The Story of Brevity: How I Learned To Pare Down My Writing to Get to the Main Point in Short Order and Not Wax Eloquent about Superfluous Details that Either have No Bearing on My Original Point or Lack Concision',
									'author': 'Hubert Blaine Wolferuhigschlegelsteinhausenbergerkraftenwerkdorffschlosszeug',
									'preview': 'none',
									'publishDate': '1832',
									'languages': ['english'],
									'pages': '643',
									'formats': ['epub', 'pdf'],
									'location': 'project gutenberg',
									'locationIcon': '/',
									'locationUrl': '/'
								},
								{	
									'wishlist': 'Biographies',
									'title': 'Napoleon the Great',
									'author': 'Andrew Roberts',
									'preview': '/',
									'publishDate': '1832',
									'languages': ['english', 'french'],
									'pages': '643',
									'formats': ['epub', 'mobi', 'pdf'],
									'location': 'feedbooks',
									'locationIcon': '/',
									'locationUrl': '/'
								},

								{
									'wishlist': 'French Literature',
									'title': 'Jefferson and His Time',
									'author': 'Thomas Malone',
									'preview': '/',
									'publishDate': '1832',
									'languages': ['english'],
									'pages': '643',
									'formats': ['epub', 'mobi', 'pdf'],
									'location': 'europeana',
									'locationIcon': '/',
									'locationUrl': '/'
								},
								{
									'wishlist': 'French Literature',
									'title': 'Napoleon\'s Letters',
									'author': 'Napoleon Bonaparte',
									'preview': 'none',
									'publishDate': '1832',
									'languages': ['english', 'french'],
									'pages': '643',
									'formats': ['epub', 'mobi', 'pdf'],
									'location': 'open library',
									'locationIcon': '/',
									'locationUrl': '/'
								},
								{
									'wishlist': 'French Literature',
									'title': 'Citizens: A Chronicle of the French Revolution',
									'author': 'Simon Schama',
									'preview': '/',
									'publishDate': '1832',
									'languages': ['english'],
									'pages': '643',
									'formats': ['epub', 'mobi', 'pdf'],
									'location': 'project gutenberg',
									'locationIcon': '/',
									'locationUrl': '/'
								},
								{
									'wishlist': 'SciFi',
									'title': 'Lorem',
									'author': 'Ip Sum',
									'preview': '/',
									'publishDate': '1832',
									'languages': ['english', 'spanish', 'french'],
									'pages': '643',
									'formats': ['epub', 'mobi', 'pdf'],
									'location': 'project gutenberg',
									'locationIcon': '/',
									'locationUrl': '/'
								},
								{
									'wishlist': 'SciFi',
									'title': 'Lore',
									'author': 'M. Ipsum',
									'preview': 'none',
									'publishDate': '1832',
									'languages': ['english'],
									'pages': '643',
									'formats': ['epub', 'mobi', 'pdf'],
									'location': 'project gutenberg',
									'locationIcon': '/',
									'locationUrl': '/'
								}	
						]
			}


export default (state, action) => {
	state = state || initialState;

	
	if (action.type === SHOW_LOGIN_REGISTER){
		state = Object.assign({}, state, {
			loginRegisterForm: {
				clicked: action.clicked,
			}
		})

		return state
	}

	if (action.type === TOGGLE_LOGIN_REGISTER){
		state = Object.assign({}, state, {
			loginRegisterForm: {
				clicked: true, 
				form: action.form
			}
		});

		return state
	}

		//WILL BE FULLY FLESHED OUT IN THE BACKEND	
	// if(action.type === ADD_TO_WISHLIST){
		
	// 	let {title, author, preview, publishDate, languages, 
	// 	pages, formats, location, locationIcon, locationUrl} = action.item
		
	// 			//overly complicated, can just assing object
	// 	let ebook = {
	// 		wishlist: action.list,
	// 		title,
	// 		author,
	// 		preview,
	// 		publishDate,
	// 		languages,
	// 		pages,
	// 		formats,
	// 		location,
	// 		locationIcon,
	// 		locationUrl

	// 	}
			
	// 		//prevents duplicates of same title from being added
	// 	if(state.wishlistItems.filter(item => item.wishlist === ebook.wishlist && item.title === ebook.title).length >= 1){
	// 		return state
	// 	}

	// 	else {
	// 		const wishlistItems = [...state.wishlistItems, ebook]


	// 		state = Object.assign({}, state, {
	// 			wishlistItems
	// 		})

	// 		return state
	// 	}
	// }

	// if(action.type === REMOVE_FROM_WISHLIST){
	// 	const ebook = action.item

	// 	console.log(state.wishlistItems.filter(item => item !== ebook))

	// 	let wishlistItems = state.wishlistItems.filter(item => item !== ebook)

	// 	state = Object.assign({}, state, {
	// 		wishlistItems
	// 	})

	// 	return state
	// }

	if(action.type === CHANGE_WISHLIST){
		state = Object.assign({}, state, {
			currentList: action.currentList
		})

		return state
	}

	if(action.type === TOGGLE_SUPPLEMENT){
		state = Object.assign({}, state, {
			supplement: action.supplement,
			details: action.details
		})
	}

	if(action.type === ADD_WISHLIST_FORM){
		state = Object.assign({}, state, {
			addWishlist: action.addWishlist
		})

		return state
	}

	if(action.type === ADD_NEW_WISHLIST){
		let wishlists = [...state.wishlists, action.newWishlist]
		let wishlistsEdit = [...state.wishlistsEdit, {[action.newWishlist]: false}]
		
		state = Object.assign({}, state, {
			wishlists,
			wishlistsEdit
		})

		return state
	}

	if(action.type === TOGGLE_EDIT_WISHLIST_STATUS){

			//targeted list status to updated
		let listObject = state.wishlistsEdit.filter(list => Object.keys(list).toString() === action.list)[0]

		listObject[action.list] = !listObject[action.list]

			//grabs all others besides targeted
		let wishlistEditTotal = state.wishlistsEdit.filter(list => Object.keys(list).toString() !== action.list)

			//concats others and updated
		let wishlistsEdit = [...wishlistEditTotal, listObject]

		state = Object.assign({}, state, {
			wishlistsEdit
		})

		return state
	}

	if(action.type === EDIT_WISHLIST_TITLE){
			//Update Wishlist name
		let wishlists = state.wishlists.filter(list => list !== action.oldTitle)
		wishlists.splice(state.wishlists.indexOf(action.oldTitle), 0, action.newTitle)

			//Update wishlist edit object
		let listObject = {[action.newTitle]: false}
		let wishlistEditTotal = state.wishlistsEdit.filter(list => Object.keys(list).toString() !== action.oldTitle)
		let wishlistsEdit = [...wishlistEditTotal, listObject]
		
		
			//Update wishlist items with new name
			//TODO: This is directly modifying state for some reason -- need to modify
		let wishlistItemsArray = state.wishlistItems.filter(item => item.wishlist === action.oldTitle)						
		wishlistItemsArray.forEach(item => item.wishlist = action.newTitle)
		let wishlistItemsTotal = state.wishlistItems.filter(item => item.wishlist !== action.newTitle)
		let wishlistItems = [...wishlistItemsTotal, ...wishlistItemsArray]
		
		state = Object.assign({}, state, {
			wishlists,
			wishlistsEdit,
			wishlistItems
		})
		
		return state

	}

	if(action.type === DELETE_WISHLIST){
		let wishlists = state.wishlists.filter(list => list !== action.deleteWishlist)
		let wishlistsEdit = state.wishlistsEdit.filter(list => Object.keys(list).toString() !== action.deleteWishlist)
		let wishlistItems = state.wishlistItems.filter(items => items.wishlist !== action.deleteWishlist)

		state = Object.assign({}, state, {
			wishlists,
			wishlistsEdit,
			wishlistItems
		})

		return state
	}

	return state
}