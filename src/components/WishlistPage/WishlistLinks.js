import React from 'react'
import {connect} from 'react-redux'
import {changeWishlist} from '../../actions/actions'

export class WishlistLinks extends React.Component{
		
	handleClick(e){
		e.preventDefault()
		this.props.dispatch(changeWishlist(e.target.text))
	}

	render(){

		let links = this.props.links.map((link, index) => {
			return (<li key={index}><a href={"/wishlist"} onClick={e => this.handleClick(e)}>{link}</a></li>)
		})

		return(
			<div>
				{links}
			</div>
		)	
	}

}

export default connect()(WishlistLinks)