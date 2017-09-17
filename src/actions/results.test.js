import {
	fetchGutenbergBook, fetchGutenbergBookId, fetchGutenbergSuccess, fetchGutenbergRequest
} from './results'

const {API_BASE_URL, GUTENBERG_ID_URL, GUTENBERG_BOOK_URL} = require('../config');


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
});

describe('fetchGutenbergBook', () => {
	it('should fetch book data', () => {
		let bookId = 321;
		let res = { 
			metadata: {
				database: 'project gutenberg',
				icon: '/resources/icons/gutenberg-fav.png',
				rights: ['public domain'],
				author: ['Frank Ocean'],
				title: ['Blonde Hair Like Goku'],
				languages: ['en'],
				pages: undefined,
				preview: 'No Preview',
				publishDate: undefined,
				formaturi: ['txt', 'cheese', 'pdf', 'epub', 'ejadfa'],
				formats: ['epub'],
			}
		}

		let data = res.metadata

		let ebook = {
			database: data.database,
			icon: data.icon,
			rights: data.rights[0],
			author: data.author[0],
			title: data.title[0],
			languages: data.language,
			pages: undefined,
			preview: data.preview,
			publishDate: data.publishDate,
			formats: ['pdf', 'epub'],
			location: `https://www.gutenberg.org/ebooks/${res.text_id}`
		}

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json(){
					return res;
				}
			})
		);

		let dispatch = jest.fn()

		return fetchGutenbergBook(bookId)(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${GUTENBERG_BOOK_URL}/${bookId}`)
			expect(dispatch).toHaveBeenCalledWith({"payload": {"args": ["/results"], "method": "push"}, "type": "@@router/CALL_HISTORY_METHOD"})
			expect(dispatch.mock.calls[0]).toEqual([fetchGutenbergSuccess(ebook)])
		})
	})
});
