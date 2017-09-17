import { push } from 'react-router-redux'

const {GUTENBERG_ID_URL, GUTENBERG_BOOK_URL} = require('../config');

export const fetchGutenbergBookId = title => dispatch => {
	dispatch(fetchGutenbergRequest)

		//https://c-w.github.io/gutenberg-http/	
		//get id of ebook
	return fetch(`${GUTENBERG_ID_URL} ${title}`)
		.then(res => res.json())
		.then(res => {
			let ids = []

			console.log(res.texts)
			res.texts.forEach(text => {
				for(let k in text){
					ids.push(text[k])
				}
			})

			return ids.sort()[0]
		})
		
			//use id to query guteberg
		.then(bookId => {
			dispatch(fetchGutenbergBook(bookId))
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
