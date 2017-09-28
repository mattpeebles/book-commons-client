// subcomponent of Dropdown

import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import {saveBookToWishlist, removeBookFromWishlist} from '../../actions/wishlist'

import './DropdownItem.css'

export class DropdownItem extends React.Component{
	
	addBook(e){
		e.preventDefault()
		let ebook = this.props.ebook
		let index = e.target['wishlist'].selectedIndex
		let listId = e.target['wishlist'][index].id
		let name = e.target['wishlist'][index].value

		this.props.dispatch(saveBookToWishlist(listId, ebook))
		this.props.dispatch(push(`/wishlist/${name.toLowerCase()}`))
	}

	removeEbook(e){
		e.preventDefault()
		let ebookId = this.props.ebook.id
		let listId = this.props.wishlists.filter(list => list.title === this.props.currentList)[0].id
		this.props.dispatch(removeBookFromWishlist(listId, ebookId))
	}

	changeWishlist(e){
		e.preventDefault()
		let ebookId = this.props.ebook.id
		let ebook = this.props.ebook
		let index = e.target['wishlist'].selectedIndex
		let newListId = e.target['wishlist'][index].id
		let oldListId = this.props.wishlists.filter(list => list.title === this.props.currentList)[0].id

		this.props.dispatch(removeBookFromWishlist(oldListId, ebookId))
		this.props.dispatch(saveBookToWishlist(newListId, ebook))
	}

	render(){

			//Wishlist render
		if(this.props.type === 'wishlistDrop'){
					let items = this.props.dropdownLinks.map((item, index) => {
						
						if(item === 'Delete'){
							return (
								<div key={index} className="col-12">
									<button className="dropdown-item btn btn-sm"  onClick={e => this.removeEbook(e)}>{item}</button>
								</div>
							)
						}

						else if(item === 'Change Wishlist'){
							
							if(this.props.wishlistNames.length > 1){
								let options = this.props.wishlists.map((item, index) => {
										//doesn't add current list to options
									if(item.title !== this.props.currentList){
										return <option key={index} id={item.id} value={item.title}>{item.title}</option>
									}
									return undefined
								});

								return (
									<form key={index} className="dropdownWishlistForm col-12" onSubmit={e => this.changeWishlist(e)}>
										<select name='wishlist'>
											{options}
										</select>
										<input type='submit' className='btn btn-sm' value='Change Wishlist' />
									</form>
								)
							}

							else{
								return undefined
							}
						};

						return item
						
					})


				return (
					<div className="row">
						{items}
					</div>
				)		
		}

			//Results render
		let options = this.props.wishlists.map((item, index) => {
			return <option key={index} id={item.id} value={item.title}>{item.title}</option>
		})


		return (
			<form className="dropdownForm" onSubmit={e => this.addBook(e)}>
				<select name='wishlist'>
					{options}
				</select>
				<input type='submit' value='Add to Wishlist' />
			</form>
		)		
	}
}

const mapStateToProps = state => ({
	wishlists: state.wishlist.wishlists,
	currentList: state.wishlist.currentList,
	wishlistItems: state.wishlist.wishlistItems,
	wishlistNames: state.wishlist.wishlistNames
})

export default connect(mapStateToProps)(DropdownItem)