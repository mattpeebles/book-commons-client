import { push } from 'react-router-redux'

const {GOOGLE_KEY, GOOGLE_ID_URL, OPEN_LIBRARY_URL, GUTENBERG_ID_URL, GUTENBERG_BOOK_URL} = require('../config');

export const EMPTY_RESULTS = "EMPTY_RESULTS"
export const emptyResults = () => ({
	type: EMPTY_RESULTS
})

export const NO_DATABASE_RESULTS = 'NO_DATABASE_RESULTS'
export const noDatabaseResults = () => ({
	type: NO_DATABASE_RESULTS
})

export const BOOK_SUPPLEMENT = 'BOOK_SUPPLEMENT'
export const bookSupplement = (bookInfo) => ({
	type: BOOK_SUPPLEMENT,
	bookInfo
})

export const AUTHOR_SUPPLEMENT = 'AUTHOR_SUPPLEMENT'
export const authorSupplement = (authorInfo) => ({
	type: AUTHOR_SUPPLEMENT,
	authorInfo
})

export const TOGGLE_SUPPLEMENT = 'TOGGLE_SUPPLEMENT'
export const toggleSupplement = (info) => ({
	type: TOGGLE_SUPPLEMENT,
	supplement: info,
	details: `${info}Supplement`
})

export const fetchBooks = title => dispatch => {
		//clears results before each search
	dispatch(emptyResults())
	
	let wikiTitle = title.replace(' ', '_')
	dispatch(wikiBook(wikiTitle))

	dispatch(fetchGutenbergBookId(title))
	dispatch(fetchGoogleBook(title))
	dispatch(fetchOpenLibraryBook(title))
	dispatch(push('/results'))
}

// gutenberg
	export const fetchGutenbergBookId = title => dispatch => {
		dispatch(fetchGutenbergRequest)

			//https://c-w.github.io/gutenberg-http/	
			//get id of ebook
		return fetch(`${GUTENBERG_ID_URL} ${title}`)
			.then(res => res.json())
			.then(res => {
				let ids = []

				res.texts.forEach(text => {
					for(let k in text){
						ids.push(text[k])
					}
				})

				return ids.sort()
			})
				//use id to query guteberg
			.then(bookIds => {
				
					//no books were found in gutenberg
				if(bookIds.length === 0){
					return dispatch(noDatabaseResults())
				}
				else{
					bookIds.forEach(bookId => {
						dispatch(fetchGutenbergBook(bookId))
					})
				}
			})
			.catch(err => {
				console.log(err)
				dispatch(fetchGutenbergError(err))
			}) 
	}

	export const fetchGutenbergBook = bookId => dispatch => {
		return fetch(`${GUTENBERG_BOOK_URL}/${bookId}`)
			.then(res => res.json())
			.then(res => {
					//regex of approved filetypes
				let fileTypes = /\.pdf|\.mobi|\.epub/
				
					//filters through format uri looking for approved filetypes
				let goodTypes = res.metadata.formaturi.filter(uri => uri.match(fileTypes) !== null)

				let data = res.metadata

				let ebook = {
					database: 'project gutenberg',
					icon: '/resources/icons/gutenberg-fav.png',
					title: data.title[0],
					author: data.author[0],
					preview: 'No Preview',
					publishDate: undefined,
					languages: data.language,
					pages: undefined,
					formats: goodTypes,
					location: `https://www.gutenberg.org/ebooks/${res.text_id}`,
					rights: data.rights[0]
				}

				dispatch(fetchGutenbergSuccess(ebook))
			})
			.catch(err => {
				dispatch(fetchGutenbergError(err))
			}) 
	}

	export const FETCH_GUTENBERG_REQUEST = 'FETCH_GUTENBERG_REQUEST'
	export const fetchGutenbergRequest = () => ({
		type: FETCH_GUTENBERG_REQUEST
	})

	export const FETCH_GUTENBERG_SUCCESS = 'FETCH_GUTENBERG_SUCCESS'
	export const fetchGutenbergSuccess = (ebook) => ({
		type: FETCH_GUTENBERG_SUCCESS,
		ebook
	})

	export const FETCH_GUTENBERG_ERROR = 'FETCH_GUTENBERG_ERROR'
	export const fetchGutenbergError = (err) => ({
		type: FETCH_GUTENBERG_ERROR,
		err
	})
//

// google books
	export const fetchGoogleBook = title => dispatch => {
		dispatch(fetchGoogleRequest)
		
			//passes title into a regex object that removes all special characters
			//and splits on spaces to make it easier to compare with returned title
		let regTitle = new RegExp(`${title.split(/[^A-Za-z]/)}`, 'i')

		return fetch(`${GOOGLE_ID_URL} ${title}&download=epub&filter=free-ebooks&key=${GOOGLE_KEY}`)
			.then(res => res.json())
			.then(res => {
				let ebooks = []
				
				res.items.forEach((item) => {
					
						//res doesn't always contain relevant books
						//splits returned title in a similar way to above and compares
						//if it passes then it is returned
					if(regTitle.test(item.volumeInfo.title.split(/[^A-Za-z]/))){
						
						let rights = (item.accessInfo.publicDomain) ? 'Public Domain' : 'Copyrighted'

						let googleFormats = [item.accessInfo.epub, item.accessInfo.pdf]

							//res.item.accessInfo contains epub and pdf keys
							//adds url to format if it exists
						let formats = []
						
						googleFormats.forEach(item => {
							if(item.downloadLink !== undefined){
								formats.push(item.downloadLink)
							}
						});
						
						let ebook = {
							database: 'google books',
							icon: '/resources/icons/google-books.ico',
							title: item.volumeInfo.title,
							author: item.volumeInfo.authors[0],
							preview: item.accessInfo.webReaderLink,
							publishDate: item.volumeInfo.publishedDate,
							languages: item.volumeInfo.language,
							pages: item.volumeInfo.pageCount,
							formats,
							location: item.selfLink,
							rights,
							googleId: item.id
						};

						ebooks.push(ebook)
					}
				});

				ebooks.forEach(ebook => {
					dispatch(fetchGoogleSuccess(ebook))
				})
			})
			.catch(err => {
				dispatch(fetchGoogleError(err))
			}) 
	}

	export const FETCH_GOOGLE_REQUEST = 'FETCH_GOOGLE_REQUEST'
	export const fetchGoogleRequest = () => ({
		type: FETCH_GOOGLE_REQUEST
	})

	export const FETCH_GOOGLE_SUCCESS = 'FETCH_GOOGLE_SUCCESS'
	export const fetchGoogleSuccess = (ebook) => ({
		type: FETCH_GOOGLE_SUCCESS,
		ebook
	})

	export const FETCH_GOOGLE_ERROR = 'FETCH_GOOGLE_ERROR'
	export const fetchGoogleError = (err) => ({
		type: FETCH_GOOGLE_ERROR,
		err
	})
//

//open library
	export const fetchOpenLibraryBook = title => dispatch => {
		dispatch(fetchOpenLibraryRequest())
		return fetch(`${OPEN_LIBRARY_URL} ${title}&limit=1&mode=ebooks`)
			.then(res => res.json())
			.then(res => {
				let data = res.docs[0]			
					//if has_fulltext is false then it is not public domain
					//gets book and author info for supplement here as well
				if(data.has_fulltext === false){
					let wikiAuthor = data.author_name[0].replace(' ', '_')
					let wikiTitle = title.replace(' ', '_')
					dispatch(wikipediaAuthor(wikiAuthor))
					dispatch(wikiBook(wikiTitle))
					return dispatch(noDatabaseResults())
				}


					//ia array contains internet archive ids
					//for whatever reason, they seem to store english links in the second position
					//this is not always the case - CAVEAT EMPTOR
				let type = `https://archive.org/download/${data.ia[1]}/${data.ia[1]}`

				let ebook = {
					database: 'open library',
					icon: '/resources/icons/open-library-fav.ico',
					title: data.title,
					author: data.author_name[0],
					preview: 'No Preview',
					publishDate: data.first_publish_year,
					languages: data.language,
					pages: undefined,
					formats: [`${type}.pdf`, `${type}.mobi`, `${type}.epub`],
					location: `https://openlibrary.org/books/${data.cover_edition_key}`
				}

				// let bookInfo = {
				// 	title: data.title,
				// 	publishDate: data.first_publish_year,
				// 	firstSentence: data.first_sentence,
				// 	cover: `http://covers.openlibrary.org/b/olid/${data.cover_edition_key}-M.jpg`,
				// 	location: `https://openlibrary.org${data.key}`
				// }

				let wikiAuthor = data.author_name[0].replace(' ', '_')
				dispatch(wikipediaAuthor(wikiAuthor))
				//dispatch(bookSupplement(bookInfo))

				dispatch(fetchOpenLibrarySuccess(ebook))

			})
			.catch(err => dispatch(fetchOpenLibraryError(err)))
	};

	export const FETCH_OPEN_LIBRARY_REQUEST = 'FETCH_OPEN_LIBRARY_REQUEST'
	export const fetchOpenLibraryRequest = () => ({
		type: FETCH_OPEN_LIBRARY_REQUEST
	})

	export const FETCH_OPEN_LIBRARY_SUCCESS = 'FETCH_OPEN_LIBRARY_SUCCESS'
	export const fetchOpenLibrarySuccess = (ebook) => ({
		type: FETCH_OPEN_LIBRARY_SUCCESS,
		ebook
	})

	export const FETCH_OPEN_LIBRARY_ERROR = 'FETCH_OPEN_LIBRARY_ERROR'
	export const fetchOpenLibraryError = (err) => ({
		type: FETCH_OPEN_LIBRARY_ERROR,
		err
	})
//

export const wikipediaAuthor = name => dispatch => {
	return fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`)
		.then(res => res.json())
		.then(res => {
			let dateIndex1 = res.extract.indexOf('(')
			let dateIndex2 = res.extract.indexOf(')')
			let dates = res.extract.slice(dateIndex1+1, dateIndex2).replace(';', '').trim()

			let authorInfo = {
				name: res.title,
				dates: dates,
				image: res.thumbnail.source,
				summary: `${res.extract.slice(0, 250)}...`,
				location: `https://en.wikipedia.org/wiki/${name}`
			}
			dispatch(authorSupplement(authorInfo))
		})
		.catch(err => {
			console.log(err)
		})
}

export const wikiBook = name => dispatch => {
	return fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`)
		.then(res => res.json())
		.then(res => {
			if(res.description === "Wikimedia disambiguation page"){
				return fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}_(novel)`)
					.then(res => res.json())
					.then(res => {
						let bookInfo = {
							title: res.title,
							publishDate: undefined,
							firstSentence: `${res.extract.slice(0, 250)}...`,
							cover: res.thumbnail.source,
							location: `https://en.wikipedia.org/wiki/${name}_(novel)`
						};

						dispatch(bookSupplement(bookInfo))
					})
			}

			let bookInfo = {
				title: res.title,
				publishDate: undefined,
				firstSentence: `${res.extract.slice(0, 250)}...`,
				cover: res.thumbnail.source,
				location: `https://en.wikipedia.org/wiki/${name}`
			}

			console.log(res)

			dispatch(bookSupplement(bookInfo))

		})
		.catch(err => {
			console.log(err)
		})	
}