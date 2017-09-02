import {SHOW_LOGIN_REGISTER, showLoginRegister, TOGGLE_LOGIN_REGISTER, toggleLoginRegister, ADD_TO_WISHLIST, addToWishlist,
		REMOVE_FROM_WISHLIST, removeFromWishlist, CHANGE_WISHLIST, changeWishlist, TOGGLE_SUPPLEMENT, toggleSupplement, ADD_WISHLIST_FORM, addWishlistForm, 
		ADD_NEW_WISHLIST, addNewWishlist, TOGGLE_EDIT_WISHLIST_STATUS, toggleEditWishlistStatus, 
		EDIT_WISHLIST_TITLE, editWishlistTitle, DELETE_WISHLIST, deleteWishlist} from './actions'

import {expect} from 'chai'

describe('showLoginRegister', () => {
	it('should set clicked to boolean passed in', () => {
		const action = showLoginRegister(true)
		expect(action.type).to.be.equal(SHOW_LOGIN_REGISTER)
		expect(action.clicked).to.be.equal(true)	
	})
})

describe('toggleLoginRegister', () => {
	it('should set form to be equal to passed in value', () => {
		const action = toggleLoginRegister('form')
		expect(action.type).to.be.equal(TOGGLE_LOGIN_REGISTER)
		expect(action.form).to.be.equal('form')
	})
})

describe('addToWishlist', () => {
	const ebook = {
						'title': "Lorem",
						'author': "Ip Sum",
						'preview': "/",
						'publishDate': "1832",
						'languages': ['english', 'spanish', 'french'],
						'pages': "643",
						'formats': ['epub', 'mobi', 'pdf'],
						'location': 'project gutenberg',
						'locationIcon': '/',
						'locationUrl': '/'}
	const wishlist = 'Biographies'
	
	it('should set item as ebook and list as wishlist', () => {
		const action = addToWishlist(ebook, wishlist)
		expect(action.type).to.be.equal(ADD_TO_WISHLIST)
		expect(action.item).to.be.equal(ebook)
	})
})

describe('removeFromWishlist', () => {
	it('should remove ebook from wishlist', () => {
		const ebook = {
						'wishlist': 'Biographies',
						'title': "Lorem",
						'author': "Ip Sum",
						'preview': "/",
						'publishDate': "1832",
						'languages': ['english', 'spanish', 'french'],
						'pages': "643",
						'formats': ['epub', 'mobi', 'pdf'],
						'location': 'project gutenberg',
						'locationIcon': '/',
						'locationUrl': '/'}
		const action = removeFromWishlist(ebook)
		expect(action.type).to.be.equal(REMOVE_FROM_WISHLIST)
		expect(action.item).to.be.equal(ebook)
	})
})

describe('changeWishlist', () => {
	it('should change current list in state', () => {
		const list = 'Biographies'
		const action = changeWishlist(list)
		expect(action.type).to.be.equal(CHANGE_WISHLIST)
		expect(action.currentList).to.be.equal(list)
	})
})

describe('toggleSupplement', () => {
	it('should update supplement and supplement details in state', () => {
		const supplement = 'Author'
		const action = toggleSupplement(supplement)
		expect(action.type).to.be.equal(TOGGLE_SUPPLEMENT)
		expect(action.supplement).to.be.equal(supplement)
		expect(action.details).to.be.equal(`${supplement}Supplement`)
	})
})

describe('addWishlistForm', () => {
	it('should change addwishlist value to boolean passed in', () => {
		const bool = true
		const action = addWishlistForm(bool)
		expect(action.type).to.be.equal(ADD_WISHLIST_FORM)
		expect(action.addWishlist).to.be.equal(bool)
	})
})

describe('addNewWishlist', () => {
	it('should add a new wishlist', () => {
		const list = 'High Fantasy'
		const action = addNewWishlist(list)
		expect(action.type).to.be.equal(ADD_NEW_WISHLIST)
		expect(action.newWishlist).to.be.equal(list)
	})
})

describe('toggleEditWishlistStatus', () => {
	it('should toggle boolean value of wishlist in wishlistEdit', () => {
		const list = "Biographies"
		const action = toggleEditWishlistStatus(list)
		expect(action.type).to.be.equal(TOGGLE_EDIT_WISHLIST_STATUS)
		expect(action.list).to.be.equal(list)
	})
})

describe('editWishlistTitle', () => {
	it('should edit title of old wishlist', () => {
		const oldTitle = 'Biographies'
		const newTitle = 'Magical Realism'
		const action = editWishlistTitle(newTitle, oldTitle)
		expect(action.type).to.be.equal(EDIT_WISHLIST_TITLE)
		expect(action.oldTitle).to.be.equal(oldTitle)
		expect(action.newTitle).to.be.equal(newTitle)
	})
})

describe('deleteWishlist', () => {
	it('should remove wishlist', () => {
		const list = "Biograhpies"
		const action = deleteWishlist(list)
		expect(action.type).to.be.equal(DELETE_WISHLIST)
		expect(action.deleteWishlist).to.be.equal(list)
	})
})