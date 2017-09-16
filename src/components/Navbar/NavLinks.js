import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {showLoginRegister, logout} from '../../actions/userActions'

import NavSearch from './NavSearch'
import NavDropdown from './NavDropdown'

export class NavLinks extends React.Component{

	render(){ 
		let links = this.props.links.map((link, index) => {


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

			if(link === 'Logout'){
				return (
					<li key={index} id={link} className="nav-item">
			        	<a className="nav-link" onClick={()=> this.props.dispatch(logout())}>{link}</a>
			    	</li>
		    	)
			}

			return (
				<li key={index} id={link} className="nav-item">
		        	<Link className="nav-link" to={`/${link.toLowerCase()}`}
		        	>{link}</Link>
		    	</li>
		    )
		})

		return(
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<NavSearch />
				<ul className="navbar-nav mr-auto">
					{links}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	display: state.user.loginRegisterForm.display,
	loggedIn: state.user.loggedIn,
	user: state.user.user,
	links: state.user.navLinks,
	wishlists: state.app.wishlists
})

export default connect(mapStateToProps)(NavLinks)

