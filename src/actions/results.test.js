import {
	fetchGutenbergBook, fetchGutenbergBookId, fetchGutenbergSuccess, fetchGutenbergRequest
} from './results'

const {GUTENBERG_ID_URL, GUTENBERG_BOOK_URL} = require('../config');


describe('fetchGutenbergBookId', () => {
	it('should return ebook from gutenberg', () => {
		let title = 'Jane Eyre';


		let res = {
			texts: [{text_id: 321}, {text_id: 543}]
		}
		
		global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return res;
                }
            })
        );

		let dispatch = jest.fn();

		return fetchGutenbergBookId(title)(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${GUTENBERG_ID_URL} ${title}`)
			expect(dispatch).toHaveBeenCalled()
		})
	})
})

describe('fetchGutenbergBook', () => {
	let bookId = 321;
	let res = { 
		metadata: {
			rights: ['public domain'],
			author: ['Frank Ocean'],
			title: ['Blonde Hair Like Goku'],
			languages: ['en'],
			pages: undefined,
			formaturi: [],
			formats: ['epub'],
		}
	}

	let data = res.metadata

	let ebook = {
		rights: data.rights[0],
		author: data.author[0],
		title: data.title[0],
		languages: data.language,
		pages: undefined,
		formats: undefined,
		location: `https://www.gutenberg.org/ebooks/${res.text_id}`
	}

	global.fetch = jest.fn().mockImplementation(() => 
		Promise.resolve({
			ok: true,
			json(){
				return ebook;
			}
		})
	);

	let dispatch = jest.fn()

	return fetchGutenbergBook(bookId)(dispatch).then(() => {
		expect(fetch).toHaveBeenCalledWith(`${GUTENBERG_BOOK_URL}/${bookId}`)
		expect(dispatch).toHaveBeenCalled()
	})
})
