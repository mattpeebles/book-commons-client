import React from 'react'
import {connect} from 'react-redux'


import Ebook from '../Ebook/Ebook'
import Header from '../Header/Header'
import WishlistsContainer from './WishlistsContainer'

import './Wishlist.css'

export class Wishlist extends React.Component{

	render(){

		let dropdownLinks = ['Change Wishlist', 'Delete']

		return(
			<main>
				<a id="settings" href="/settings/wishlist"><button className="btn btn-default"><img alt='cog-icon' src="https://useiconic.com/open-iconic/svg/cog.svg" /></button></a>
				<Header headerId="header" title="Wishlist" subtitle={this.props.currentList} subtitleId="wishListName" />
				<div id="main-container" className="container-fluid">
					<div id="main-row" className="row">
						
						<Ebook results={this.props.wishlists[this.props.currentList]} dropdownLinks={dropdownLinks}/>
						<WishlistsContainer links={Object.keys(this.props.wishlists)}/>
					</div>
				</div>

			</main>
		)
	}
}

const mapStateToProps = state => ({
	currentList: state.currentList,
	wishlists: state.wishlists
})

export default connect(mapStateToProps)(Wishlist)