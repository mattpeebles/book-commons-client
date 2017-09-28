// subcomponent of WishlistContainer

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {changeWishlist} from '../../actions/wishlist'

export class WishlistLinks extends React.Component{
		
	handleClick(e){
		this.props.dispatch(changeWishlist(e.target.text))
	}

	render(){

		let links = this.props.links.map((link, index) => {
			return (<li key={index}><Link to={`/wishlist/${link.toLowerCase()}`} onClick={e => this.handleClick(e)}>{link}</Link></li>)
		})

		return(
			<div>
				{links}
			</div>
		)	
	}

}

export default connect()(WishlistLinks)