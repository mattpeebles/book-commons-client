import React from 'react'
import {connect} from 'react-redux'

import Header from '../../Header/Header'
import AddWishlist from './AddWishlist'

import {editWishlistTitle, toggleEditWishlistStatus} from '../../../actions/actions'
import {fetchWishlists, addWishlistForm, removeWishlist} from '../../../actions/wishlistActions'



import './WLSettings.css'


export class WLSettings extends React.Component{


	toggleEditForm(e){
		let value = e.target.id.split('-')[0]
		this.props.dispatch(toggleEditWishlistStatus(value))
	}

	editListTitle(e){
		e.preventDefault()
		let oldTitle = e.target.id.split('-')[0]
		console.log(oldTitle)
		let newTitle = this.input.value
		this.props.dispatch(editWishlistTitle(newTitle, oldTitle))
	}

	deleteList(e){
		let value = e.target.id.split('-')[0]
		
		this.props.dispatch(removeWishlist(value))
	}

	addWishlistForm(e){
		this.props.dispatch(addWishlistForm(true))
	}

	render(){

			let formatLinks = this.props.wishlists.map((link, index) => {
				
					//filters wishlists edit, first array item is result, takes value of result
				// if(this.props.wishlists.filter(list => Object.keys(list).toString() === link)[0][link]){
				// 	return (
				// 		<div key={index} className="col-12 col-md-6 settingsContainer">
				// 			<div className="col">
				// 				Edit Title
				// 			</div>
				// 			<form className="col" id={link+"-EditForm"} onSubmit={e => this.editListTitle(e)}>
				// 				<input type="text" name="editTitle" placeholder={link} ref={input => this.input = input}/>
				// 				<input type="submit" name="editSubmit" />
				// 				<button type="cancel" id={link+"-Cancel"} onClick={e=>this.toggleEditForm(e)}>Cancel</button>
				// 			</form>
				// 		</div>
				// 	)
				// }
												//for book number
												// {(this.props.wishlistItems.filter(item => item.wishlist === link)).length}

				return (
							<div key={index} className="col-12 col-md-6 settingsContainer">
								<div className="row">
									<div className="col">
										<div className="col">
											{link}
										</div>
										<div className="col">
											<span className="listTitle">5</span> books
										</div>
									</div>
									<div className="col-auto row">
										<div className="col">
											<button id={link+"-Edit"} className="btn btn-default btn-sm" onClick={e => this.toggleEditForm(e)}>Edit</button>
										</div>
										<div className="col-auto">
											<button id={link+"-Delete"} className="btn btn-default btn-sm" onClick={e => this.deleteList(e)}>Delete</button>
										</div>
									</div>
								</div>
							</div>
						)
		})

		let newWishlist;
		let addButton;

		if(this.props.addWishlist === true){
			newWishlist = <AddWishlist />
		}

		if(this.props.addWishlist === false){
			addButton = 	
				<div className="addContainer col-12">
					<button className="btn btn-default addWLButton" onClick={(e) => this.addWishlistForm(e)}>Add A Wishlist</button>
				</div>
		}

		return (
			<div className="container" >
				<Header headerId="header" subtitleId="subtitle" title="Settings" subtitle="Wishlists"/>
				{addButton}
				<div className="row">
					{newWishlist}
					{formatLinks}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	wishlists: state.wishlist.wishlistNames,
	wishlistItems: state.wishlistItems,
	addWishlist: state.wishlist.addWishlist,
	wishlistsEdit: state.wishlistsEdit
})

export default connect(mapStateToProps)(WLSettings)
