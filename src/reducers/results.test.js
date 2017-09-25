import { 
toggleAbout,
fetchGutenbergRequest,
fetchGutenbergSuccess,
fetchGutenbergError,
fetchGoogleRequest,
fetchGoogleSuccess,
fetchGoogleError,
fetchOpenLibraryRequest,
fetchOpenLibrarySuccess,
fetchOpenLibraryError,
} from '../actions/results'

import {default as reducer} from './results'
import {expect, should} from 'chai'
describe('results reducer', () => {
	
	describe('toggleAbout', () => {
		let state;

		state = reducer(state, toggleAbout())
		expect(state.showAbout).to.be.equal(true)

		state = reducer(state, toggleAbout())
		expect(state.showAbout).to.be.equal(false)
	})

	describe('fetchGutenbergRequest', () => {
		it('should set loading to true', () => {
			let state;

			state = reducer(state, fetchGutenbergRequest())

			expect(state.loading).to.be.equal(true)
			expect(state.error).to.be.equal(null)
		});
	});

	describe('fetchGutenbergSuccess', () => {
		it('should include ebook into result', () => {
			let state;
			let ebook = {
				database: 'project gutenberg',
				icon: '/resources/icons/gutenberg-fav.png',
				rights: 'public domain',
				author: 'kanye west',
				title: 'who will survive in america',
				languages: ['en'],
				pages: 1776,
				formats: ['epub'],
				location: `https://www.gutenberg.org/ebooks/goat`
			}

			state = reducer(state, fetchGutenbergSuccess(ebook))
 			expect(state.results).to.be.a('array')
			expect(state.results).to.include(ebook)
			expect(state.loading).to.be.equal(false)
			expect(state.error).to.be.equal(null)


		});
	});

	describe('fetchGutenbergError', () => {
		it('should set error and loading false', () => {
			let state;
			let err = 'Invalid Type Error'

			state = reducer(state, fetchGutenbergError(err))

			expect(state.error).to.be.equal(err)
			expect(state.loading).to.be.equal(false)
		});
	});


	describe('fetchGoogleRequest', () => {
		it('should set loading to true', () => {
			let state;

			state = reducer(state, fetchGoogleRequest())

			expect(state.loading).to.be.equal(true)
			expect(state.error).to.be.equal(null)
		});
	});

	describe('fetchGoogleSuccess', () => {
		it('should include ebook into result', () => {
			let state;
			let ebook = {
				database: 'project gutenberg',
				icon: '/resources/icons/gutenberg-fav.png',
				rights: 'public domain',
				author: 'kanye west',
				title: 'who will survive in america',
				languages: ['en'],
				pages: 1776,
				formats: ['epub'],
				location: `https://www.gutenberg.org/ebooks/goat`
			}

			state = reducer(state, fetchGoogleSuccess(ebook))
 			expect(state.results).to.be.a('array')
			expect(state.results).to.include(ebook)
			expect(state.loading).to.be.equal(false)
			expect(state.error).to.be.equal(null)


		});
	});

	describe('fetchGoogleError', () => {
		it('should set error and loading false', () => {
			let state;
			let err = 'Invalid Type Error'

			state = reducer(state, fetchGoogleError(err))

			expect(state.error).to.be.equal(err)
			expect(state.loading).to.be.equal(false)
		});
	});

	describe('fetchOpenLibraryRequest', () => {
		it('should set loading to true', () => {
			let state;

			state = reducer(state, fetchGoogleRequest())

			expect(state.loading).to.be.equal(true)
			expect(state.error).to.be.equal(null)
		});
	});

	describe('fetchOpenLibrarySuccess', () => {
		it('should include ebook into result', () => {
			let state;
			let ebook = {
				database: 'open library',
				icon: '/resources/icons/gutenberg-fav.png',
				rights: 'public domain',
				author: 'kanye west',
				title: 'who will survive in america',
				languages: ['en'],
				pages: 1776,
				formats: ['epub'],
				location: `https://www.gutenberg.org/ebooks/goat`
			}

			state = reducer(state, fetchGoogleSuccess(ebook))
 			expect(state.results).to.be.a('array')
			expect(state.results).to.include(ebook)
			expect(state.loading).to.be.equal(false)
			expect(state.error).to.be.equal(null)


		});
	});

	describe('fetchOpenLibraryError', () => {
		it('should set error and loading false', () => {
			let state;
			let err = 'Invalid Type Error'

			state = reducer(state, fetchGoogleError(err))

			expect(state.error).to.be.equal(err)
			expect(state.loading).to.be.equal(false)
		});
	});

})