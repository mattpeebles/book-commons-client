import React from 'react'
import {connect} from 'react-redux'

import {changeWishlist} from '../../actions/actions'


export class NavDropdown extends React.Component{
	
	handleClick(e){
		e.preventDefault()
		this.props.dispatch(changeWishlist(e.target.text))
	}

	render(){



		const links = this.props.wishlistLinks.map((link, index) => {
				return <a key={index} className="dropdown-item" href={"/wishlist"} onClick={(e) => this.handleClick(e)}>{link}</a>
		})


		return(
			<li className="nav-item dropdown">
		        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          {this.props.title}
		        </a>
		        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	       			{links}
		        </div>
		    </li>
		)	
	}
}

const mapStateToProps = state => ({
	wishlistLinks: Object.keys(state.wishlists)
})

export default connect(mapStateToProps)(NavDropdown)