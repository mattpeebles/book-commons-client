import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { push } from 'react-router-redux'

import {fetchWishlistBooks} from '../../actions/wishlist'

import Ebook from '../Ebook/Ebook'
import Header from '../Header/Header'
import WishlistsContainer from './WishlistsContainer'
import LoginRegister from '../LoginRegister/LoginRegister'

import './Wishlist.css'

export class Wishlist extends React.Component{

	componentWillMount(){
		if(this.props.loggedIn === false){
			this.props.dispatch(push('/'))
		}
	}

	componentWillReceiveProps(nextProps){
			//current list has been changed									wishlist has been changed
		if(nextProps.currentList !== this.props.currentList || nextProps.wishlists !== this.props.wishlists){
			let listId = this.props.wishlists.filter(list => list.title === nextProps.currentList)[0].id

			this.props.dispatch(fetchWishlistBooks(listId))		
		}
	}

	componentDidMount(){
		if(this.props.wishlists !== null){
			let listId = this.props.wishlists.filter(list => list.title === this.props.currentList)[0].id

			this.props.dispatch(fetchWishlistBooks(listId))
		}
	}

	render(){

		let dropdownLinks = ['Change Wishlist', 'Delete']

		if(this.props.loggedIn === false){
			
			return (
				<LoginRegister />
			)
		};

		return(
			<main>
				<Link id="settings" to="/settings/wishlist"><button className="btn btn-default"><img alt='cog-icon' src="https://useiconic.com/open-iconic/svg/cog.svg" /></button></Link>
				<Header headerId="header" title="Wishlist" subtitle={this.props.currentList} subtitleId="wishListName" />
				<div id="main-container" className="container-fluid">
					<div id="main-row" className="row">
						
						<Ebook results={this.props.wishlistItems} dropdownType='wishlistDrop' dropdownLinks={dropdownLinks}/>
						<WishlistsContainer links={this.props.wishlistNames}/>
					</div>
				</div>

			</main>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.loggedIn,
	wishlist: state.wishlist,
	wishlists: state.wishlist.wishlists,
	currentList: state.wishlist.currentList,
	wishlistNames: state.wishlist.wishlistNames,
	wishlistItems: state.wishlist.wishlistItems
})

export default connect(mapStateToProps)(Wishlist)