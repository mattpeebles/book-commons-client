import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


import {changeWishlist} from '../../actions/wishlist'
import {logout} from '../../actions/auth'


export class NavDropdown extends React.Component{
	
	handleClick(e){
		this.props.dispatch(changeWishlist(e.target.text))
	}

	logout(){
		this.props.dispatch(logout())
	}


	render(){

		if(this.props.title === 'Wishlists'){
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

		else{
			const links = this.props.links.map((link, index) => {
				if(link === 'Logout'){
					return (
				        <a key={index} className="dropdown-item" onClick={() => this.props.dispatch(logout())}>{link}</a>
			    	)
				}

				return (
				    <a key={index} className="dropdown-item">{link}</a>
				)


			});

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
}

const mapStateToProps = state => ({
	wishlists: state.wishlist.wishlistNames
})

export default connect(mapStateToProps)(NavDropdown)