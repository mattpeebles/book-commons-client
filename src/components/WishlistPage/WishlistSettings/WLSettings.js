// subcomponent of App

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {push} from 'react-router-redux'

import Header from '../../Header/Header'
import AddWishlist from './AddWishlist'
import EditWishlistForm from './EditWishlistForm'

import {fetchWishlists,toggleEditWishlistStatus, addWishlistForm, removeWishlist, editWishlistTitle, changeWishlist} from '../../../actions/wishlist'


import './WLSettings.css'


export class WLSettings extends React.Component{


	componentWillMount(){
		if(this.props.loggedIn === false || this.props.wishlists === null){
			this.props.dispatch(push('/'))
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.currentUser === null){
			this.props.dispatch(push('/'))
		}
	}

	handleClick(e){
		this.props.dispatch(changeWishlist(e.target.text))
	}

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

	getWishlists(){
		this.props.dispatch(fetchWishlists());
	}

	render(){
		let formatLinks;
		let newWishlist;
		let addButton;

		if(this.props.wishlists !== null){

			formatLinks = this.props.wishlists.map((list, index) => {
					
					let title = list.title
						//filters wishlists edit, first array item is result, takes value of result
					if(this.props.wishlistsEdit[title] === true){
						return (
							<EditWishlistForm key={index} title={title} index={index}/>
						)
					}

					let bookNum = (list.items.length === 1) ? 'book' : 'books'

					return (
								<div key={index} className="col-12 col-md-6 settingsContainer">
									<div className="row">
										<div className="col">
											<div className="col">
												<Link to={`/wishlist/${title.toLowerCase()}`} onClick={e => this.handleClick(e)}>{title}</Link>
											</div>
											<div className="col">
												<span className="listTitle">{list.items.length}</span> {bookNum}
											</div>
										</div>
										<div className="col-auto row">
											<div className="col">
												<button id={title+"-Edit"} className="btn btn-default btn-sm editWishlist" onClick={e => this.toggleEditForm(e)}>Edit</button>
											</div>
											<div className="col-auto">
												<button id={title+"-Delete"} className="btn btn-default btn-sm deleteWishlist" onClick={e => this.deleteList(e)}>Delete</button>
											</div>
										</div>
									</div>
								</div>
							)
			})
		}

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
				<div id="wishlistSettingsContainer">
					<Header headerId="header" subtitleId="subtitle" title="Settings" subtitle="Wishlists"/>
				</div>
				{addButton}
				<div className="row">	
					{newWishlist}
				</div>
				<div className="row">
					{formatLinks}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	wishlist: state.wishlist,
	loggedIn: state.auth.loggedIn,
	wishlistsNames: state.wishlist.wishlistNames,
	wishlists: state.wishlist.wishlists,
	addWishlist: state.wishlist.addWishlist,
	wishlistsEdit: state.wishlist.wishlistsEdit,
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(WLSettings)
