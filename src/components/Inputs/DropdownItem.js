import React from 'react'
import {connect} from 'react-redux'

import {addToWishlist, removeFromWishlist} from '../../actions/actions'

export class DropdownItem extends React.Component{
	
	addBook(e){
		e.preventDefault()
		let ebook = this.props.ebook
		let index = e.target['wishlist'].selectedIndex
		let list = e.target['wishlist'][index].value

		this.props.dispatch(addToWishlist(ebook, list))
	}

	removeEbook(e){
		e.preventDefault()
		let ebook = this.props.ebook
		this.props.dispatch(removeFromWishlist(ebook))
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
								return <option key={index} value={item}>{item}</option>
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
			return <option key={index} value={item}>{item}</option>
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
	wishlists: state.wishlist.wishlistNames,
	wishlistItems: state.app.wishlistItems
})

export default connect(mapStateToProps)(DropdownItem)