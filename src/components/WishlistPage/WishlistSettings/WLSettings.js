import React from 'react'
import {connect} from 'react-redux'

import Header from '../../Header/Header'
import AddWishlist from './AddWishlist'

import {toggleEditWishlistStatus} from '../../../actions/actions'
import {addWishlistForm, removeWishlist, editWishlistTitle} from '../../../actions/wishlistActions'


import './WLSettings.css'


export class WLSettings extends React.Component{

	toggleEditForm(e){
		let value = e.target.id.split('-')[0]
		this.props.dispatch(toggleEditWishlistStatus(value))
	}

	editListTitle(e){
		e.preventDefault()
		let oldTitle = e.target.id.split('-')[0]
		let newTitle = this.input.value
		this.props.dispatch(editWishlistTitle(oldTitle, newTitle))
	}

	deleteList(e){
		let value = e.target.id.split('-')[0]
		
		this.props.dispatch(removeWishlist(value))
	}

	addWishlistForm(e){
		this.props.dispatch(addWishlistForm(true))
	}

	render(){

			let formatLinks = this.props.wishlists.map((list, index) => {
				
				let title = list.title
					//filters wishlists edit, first array item is result, takes value of result
				if(this.props.wishlistsEdit[title] === true){
					return (
						<div key={index} className="col-12 col-md-6 settingsContainer">
							<div className="col">
								Edit Title
							</div>
							<form className="col" id={title+"-EditForm"} onSubmit={e => this.editListTitle(e)}>
								<input type="text" name="editTitle" placeholder={title} ref={input => this.input = input}/>
								<input type="submit" name="editSubmit" />
								<button type="cancel" id={title+"-Cancel"} onClick={e=>this.toggleEditForm(e)}>Cancel</button>
							</form>
						</div>
					)
				}

				return (
							<div key={index} className="col-12 col-md-6 settingsContainer">
								<div className="row">
									<div className="col">
										<div className="col">
											{title}
										</div>
										<div className="col">
											<span className="listTitle">{list.items.length}</span> books
										</div>
									</div>
									<div className="col-auto row">
										<div className="col">
											<button id={title+"-Edit"} className="btn btn-default btn-sm" onClick={e => this.toggleEditForm(e)}>Edit</button>
										</div>
										<div className="col-auto">
											<button id={title+"-Delete"} className="btn btn-default btn-sm" onClick={e => this.deleteList(e)}>Delete</button>
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
	loggedIn: state.auth.loggedIn,
	wishlistsNames: state.wishlist.wishlistNames,
	wishlists: state.wishlist.wishlists,
	addWishlist: state.wishlist.addWishlist,
	wishlistsEdit: state.wishlist.wishlistsEdit
})

export default connect(mapStateToProps)(WLSettings)
