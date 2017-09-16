import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {changeWishlist} from '../../actions/actions'


export class NavDropdown extends React.Component{
	
	handleClick(e){
		this.props.dispatch(changeWishlist(e.target.text))
	}

	render(){

		const links = this.props.wishlists.map((link, index) => {
				return <Link key={index} className="dropdown-item" to={`/wishlist/${link.toLowerCase()}`} onClick={(e) => this.handleClick(e)}>{link}</Link>
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
	wishlists: state.app.wishlists
})

export default connect(mapStateToProps)(NavDropdown)