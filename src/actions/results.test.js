import {
	emptyResults, EMPTY_RESULTS,
	toggleSupplement, TOGGLE_SUPPLEMENT,
	fetchGutenbergBook, fetchGutenbergBookId, fetchGutenbergSuccess, fetchGutenbergRequest,
	fetchGoogleBook, fetchGoogleSuccess,
	fetchOpenLibraryBook, fetchOpenLibrarySuccess
} from './results'

const {GOOGLE_KEY} = require('../.keys')
const {API_BASE_URL, GOOGLE_ID_URL, GUTENBERG_ID_URL, GUTENBERG_BOOK_URL, OPEN_LIBRARY_URL} = require('../config');


describe('emptyResults', () => {
	it('should empty results array', () => {
		let action = emptyResults()
		expect(action.type).toEqual(EMPTY_RESULTS)
	})
});

describe('toggleSupplement', () => {
	it('should update supplement and supplement details in state', () => {
		const supplement = 'Author'
		const action = toggleSupplement(supplement)
		expect(action.type).toEqual(TOGGLE_SUPPLEMENT)
		expect(action.supplement).toEqual(supplement)
		expect(action.details).toEqual(`${supplement}Supplement`)
	})
})

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
		let bookId = [321];
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
				formaturi: ['.txt', '.cheese', '.pdf', '.epub', '.ejadfa'],
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
			formats: ['.pdf', '.epub'],
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
			expect(dispatch).toHaveBeenCalledWith(fetchGutenbergSuccess(ebook))
		})
	})
});

describe('fetchGoogleBook', () => {
	it('should return google book', () => {
		let title = 'Emma'
		let res = {
			items: [
				{
					"kind":"books#volume",
					"id":"-TwXAAAAYAAJ",
					"etag":"gDFf3uCA1mY",
					"selfLink":"https://www.googleapis.com/books/v1/volumes/-TwXAAAAYAAJ",
					"volumeInfo":{
						"title":"Emma",
						"subtitle":"A Novel",
						"authors":["Jane Austen"],
						"publishedDate":"1867",
						"industryIdentifiers":[
							{"type":"OTHER",
							"identifier":"HARVARD:HN24ZB"}],
						"readingModes":{"text":false,"image":true},
						"pageCount":450,
						"printType":"BOOK",
						"maturityRating":"NOT_MATURE",
						"allowAnonLogging":false,
						"contentVersion":"1.0.2.0.full.1",
						"imageLinks":{
							"smallThumbnail":"http://books.google.com/books/content?id=-TwXAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
							"thumbnail":"http://books.google.com/books/content?id=-TwXAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
						"language":"en",
						"previewLink":"http://books.google.com/books?id=-TwXAAAAYAAJ&printsec=frontcover&dq=intitle:+Emma&hl=&as_brr=7&as_ebook=1&cd=1&source=gbs_api",
						"infoLink":"https://play.google.com/store/books/details?id=-TwXAAAAYAAJ&source=gbs_api",
						"canonicalVolumeLink":"https://market.android.com/details?id=book--TwXAAAAYAAJ"
					},
					"accessInfo":{
						"country":"US",
						"viewability":"ALL_PAGES",
						"embeddable":true,
						"publicDomain":true,
						"textToSpeechPermission":"ALLOWED",
						"epub":{
							"isAvailable":false,
							"downloadLink":"http://books.google.com/books/download/Emma.epub?id=-TwXAAAAYAAJ&hl=&output=epub&source=gbs_api"
						},
						"pdf":{
							"isAvailable":true,
							"downloadLink":"http://books.google.com/books/download/Emma.pdf?id=-TwXAAAAYAAJ&hl=&output=pdf&sig=ACfU3U1SUH6t3GBMACM-lHgHeTqUyHIwoA&source=gbs_api"
						},
						"webReaderLink":"http://play.google.com/books/reader?id=-TwXAAAAYAAJ&hl=&as_brr=7&as_ebook=1&printsec=frontcover&source=gbs_api",
						"accessViewStatus":"FULL_PUBLIC_DOMAIN",
						"quoteSharingAllowed":false
					}
				}
			]
		}

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json(){
					return res
				}
			})
		);

		let item = res.items[0]

		let ebook = {
			"database":"google books",
			"googleId": "-TwXAAAAYAAJ",
			"icon":"/resources/icons/google-books.ico",
			"title":"Emma",
			"author":"Jane Austen",
			"preview":"http://play.google.com/books/reader?id=-TwXAAAAYAAJ&hl=&as_brr=7&as_ebook=1&printsec=frontcover&source=gbs_api",
			"publishDate":"1867",
			"languages":"en",
			"pages":450,
			"formats":["http://books.google.com/books/download/Emma.epub?id=-TwXAAAAYAAJ&hl=&output=epub&source=gbs_api","http://books.google.com/books/download/Emma.pdf?id=-TwXAAAAYAAJ&hl=&output=pdf&sig=ACfU3U1SUH6t3GBMACM-lHgHeTqUyHIwoA&source=gbs_api"],
			"location":"https://www.googleapis.com/books/v1/volumes/-TwXAAAAYAAJ",
			"rights":"Public Domain"
		}

		let dispatch = jest.fn()

		return fetchGoogleBook(title)(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${GOOGLE_ID_URL} ${title}&download=epub&filter=free-ebooks&key=${GOOGLE_KEY}`)
			expect(dispatch).toHaveBeenCalledWith(fetchGoogleSuccess(ebook))
		})
	})
});

describe('fetchOpenLibraryBook', () => {
	it('should return open library book', () => {
		let title = 'Emma'
		let res = {
			docs: [
				{
					"title":"Emma",
					"author_name":["Jane Austen"],
					"preview":"No Preview",
					"first_publish_year":1816,
					"language":["dut","eng"],
					"ia":['emmaAUST', 'emmaaus00aust'],
					"cover_edition_key":"OL24348229M"
				}
			]
		}

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json(){
					return res
				}
			})
		);

		let ebook = {
			"database":"open library",
			"icon":"/resources/icons/open-library-fav.ico",
			"title":"Emma",
			"author": "Jane Austen",
			"preview": "No Preview",
			"publishDate": 1816,
			"languages":["dut","eng"],
			"formats":["https://archive.org/download/emmaaus00aust/emmaaus00aust.pdf","https://archive.org/download/emmaaus00aust/emmaaus00aust.mobi","https://archive.org/download/emmaaus00aust/emmaaus00aust.epub"],
			"location":"https://openlibrary.org/books/OL24348229M"
		}

		let dispatch = jest.fn()

		return fetchOpenLibraryBook(title)(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${OPEN_LIBRARY_URL} ${title}&limit=1&mode=ebooks`)
			expect(dispatch).toHaveBeenCalledWith(fetchOpenLibrarySuccess(ebook))
		})
	})
});