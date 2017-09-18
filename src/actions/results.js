import { push } from 'react-router-redux'

const {GOOGLE_KEY} = require('../.keys')
const {GOOGLE_ID_URL, GUTENBERG_ID_URL, GUTENBERG_BOOK_URL} = require('../config');

export const EMPTY_RESULTS = "EMPTY_RESULTS"
export const emptyResults = () => ({
	type: EMPTY_RESULTS
})

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
				bookIds.forEach(bookId => {
					dispatch(fetchGutenbergBook(bookId))
				})
			})
			.catch(err => {
				dispatch(fetchGutenbergError(err))
			}) 
	}

	export const fetchGutenbergBook = bookId => dispatch => {
		return fetch(`${GUTENBERG_BOOK_URL}/${bookId}`)
			.then(res => res.json())
			.then(res => {
				let fileTypes = /pdf|mobi|epub/
				
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
				dispatch(push('/results'))
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
		let regTitle = new RegExp(`${title}`, 'i')

			//https://c-w.github.io/gutenberg-http/	
			//get id of ebook
		return fetch(`${GOOGLE_ID_URL} ${title}&download=epub&filter=free-ebooks&key=${GOOGLE_KEY}`)
			.then(res => res.json())
			.then(res => {
				let ebooks = []
				
				res.items.forEach((item) => {
					if(regTitle.test(item.volumeInfo.title)){
						let rights = (item.accessInfo.publicDomain) ? 'Public Domain' : 'Copyrighted'

						let googleFormats = [item.accessInfo.epub, item.accessInfo.pdf]

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