import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {showLoginRegister} from '../../actions/auth'

import NavSearch from './NavSearch'
import NavDropdown from './NavDropdown'

export class NavLinks extends React.Component{

	render(){ 
		let links = this.props.navLinks.map((link, index) => {


			if (link === "Wishlists" && this.props.wishlists.length === 0){
				return (
					<li key={index} id={link} className="nav-item">
			        	<Link className="nav-link" to={`/settings/wishlist`} >Wishlist Settings</Link>
			    	</li>
			    )
			}
			
			else if (link ==="Wishlists"){
				return <NavDropdown id={link+"-Dropdown"} key={index} title={link}/>
			}

			if(link === 'Login/Register'){
				return ( 
					<li key={index} id={link} className="nav-item">
			        	<a className="nav-link" onClick={()=> this.props.dispatch(showLoginRegister(!this.props.display))}>{link}</a>
			    	</li>
			    )
			}

			if(link === 'Signed in'){
				let title = `${link} as ${this.props.user.email.split('@')[0]}`
				return (
					<NavDropdown id={link+"-Dropdown"} key={index} title={title} links={['Change Email', 'Change Password', 'Logout']}/> 
				)
			}

			return (
				<li key={index} id={link} className="nav-item">
		        	<Link className="nav-link" to={`/${link.toLowerCase()}`}
		        	>{link}</Link>
		    	</li>
		    )
		})

		let navSearch;

				//displays navbar search on routes other than home
		if(this.props.router.location.pathname !== '/'){
			navSearch = <NavSearch className="navbar-nav mr-auto" />
		}

		console.log(links)

		return(
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					{links}
				</ul>
				{navSearch}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	navLinks: state.auth.navLinks,
	router: state.router,
	display: state.auth.loginRegisterForm.display,
	loggedIn: state.auth.loggedIn,
	user: state.auth.currentUser,
	links: state.auth.navLinks,
	wishlists: state.wishlist.wishlists,
	wishlistNames: state.wishlist.wishlistNames
})

export default connect(mapStateToProps)(NavLinks)

