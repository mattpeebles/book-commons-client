import React from 'react'

export default class WishlistsLinks extends React.Component{
		
	handleWishlistChange(e){
		e.preventDefault()
		this.props.changeWishlist(e.target.text)
	}

	render(){

		let links = this.props.links.map((link, index) => {
			return (<li key={index}><a href={"/wishlist/" + link} onClick={this.handleWishlistChange.bind(this)}>{link}</a></li>)
		})

		return(
			<div>
				{links}
			</div>
		)	
	}


}