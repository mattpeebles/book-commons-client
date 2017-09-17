import React from 'react'
import {connect} from 'react-redux'

import {saveBookToWishlist, removeBookFromWishlist} from '../../actions/wishlist'

export class DropdownItem extends React.Component{
	
	addBook(e){
		e.preventDefault()
		let ebook = this.props.ebook
		let index = e.target['wishlist'].selectedIndex
		let listId = e.target['wishlist'][index].id

		this.props.dispatch(saveBookToWishlist(listId, ebook))
	}

	removeEbook(e){
		e.preventDefault()
		let ebookId = this.props.ebook.id
		let listId = this.props.wishlists.filter(list => list.title === this.props.currentList)[0].id
		this.props.dispatch(removeBookFromWishlist(listId, ebookId))
	}

	render(){

			//Wishlist render
		if(this.props.type === 'wishlistDrop'){
				
					let items = this.props.dropdownLinks.map((item, index) => {
						
						if(item === 'Delete'){
							return (<button className="dropdown-item" key={index} onClick={e => this.removeEbook(e)}>{item}</button>)
						}

						else if(item === 'Change Wishlist'){
							let options = this.props.wishlists.map((item, index) => {
								return <option key={index} value={item.title}>{item.title}</option>
							})

							return (
								<form key={index} onSubmit={e => this.addBook(e)}>
									<select name='wishlist'>
										{options}
									</select>
									<input type='submit' value='Change Wishlist' />
								</form>
							)
						}

						return item
						
					})


				return (
					<div>
						{items}
					</div>
				)		
		}

			//Results render
		let options = this.props.wishlists.map((item, index) => {
			return <option key={index} id={item.id} value={item.title}>{item.title}</option>
		})


		return (
			<form onSubmit={e => this.addBook(e)}>
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
	wishlistItems: state.app.wishlistItems
})

export default connect(mapStateToProps)(DropdownItem)