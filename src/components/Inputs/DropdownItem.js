import React from 'react'
import {connect} from 'react-redux'

import {addToWishlist} from '../../actions/actions'

//return (<button className="dropdown-item" key={index}>{item}</button>)

export class DropdownItem extends React.Component{
	
	addBook(e){
		e.preventDefault()
		let ebook = this.props.ebook
		let index = e.target['wishlist'].selectedIndex
		let list = e.target['wishlist'][index].value

		this.props.dispatch(addToWishlist(ebook, list))
	}


	render(){

			//Wishlist render
		if(this.props.type === 'button'){
				let button = this.props.dropdownLinks.map((item, index) => {
					return (<button className="dropdown-item" key={index}>{item}</button>)
				})


				return (
					<div>
						{button}
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
	wishlists: state.wishlists
})

export default connect(mapStateToProps)(DropdownItem)