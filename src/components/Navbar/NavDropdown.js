// subcomponent of NavLinks

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


import {changeWishlist} from '../../actions/wishlist'
import {logout, changeUserInfoInit} from '../../actions/auth'


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
				<li className="nav-item dropdown" id={this.props.id}>
			        <button className="nav-link dropdown-toggle navbarDropdownMenuLink" id="wishlistsMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          {this.props.title}
			        </button>
			        <div className="dropdown-menu" aria-labelledby="wishlistsMenuLink">
		       			{links}
		       			<Link className="dropdown-item" to={`/settings/wishlist`} >Wishlist Settings</Link>
			        </div>
			    </li>
			)	
		}

			//user settings
		else{
			const links = this.props.links.map((link, index) => {
				if(link === 'Logout'){
					return (
				        <a key={index} id={link.toLowerCase()} className="dropdown-item" onClick={() => this.props.dispatch(logout())}>{link}</a>
			    	)
				}

				return (
				    <Link key={index} className="dropdown-item" to={`/settings/user/${link.toLowerCase().split(' ').join('/')}`} onClick={() => this.props.dispatch(changeUserInfoInit())}>{link}</Link>
				)


			});

			return(
				<li className="nav-item dropdown" id={this.props.id}>
			        <button className="nav-link dropdown-toggle navbarDropdownMenuLink" id="accountSettingsLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          {this.props.title}
			        </button>
			        <div className="dropdown-menu" aria-labelledby="accountSettingsLink">
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