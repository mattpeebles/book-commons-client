import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Ebook from '../Ebook/Ebook'
import Header from '../Header/Header'
import WishlistsContainer from './WishlistsContainer'

import './Wishlist.css'

export class Wishlist extends React.Component{

	render(){

		let dropdownLinks = ['Change Wishlist', 'Delete']

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
	currentList: state.wishlist.currentList,
	wishlistNames: state.wishlist.wishlistNames,
	wishlistItems: state.wishlist.wishlistItems
})

export default connect(mapStateToProps)(Wishlist)