import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {showLoginRegister} from '../../actions/actions'

import NavSearch from './NavSearch'
import NavDropdown from './NavDropdown'

export class NavLinks extends React.Component{

	render(){ 
		let links = this.props.links.map((link, index) => {

			if (link ==="Wishlists" && this.props.wishlists.length === 0){
				return (
					<li key={index} className="nav-item">
			        	<Link className="nav-link" to={`/settings/wishlist`}>Wishlist Settings</Link>
			    	</li>
			    )
			}
			
			else if (link ==="Wishlists"){
				return <NavDropdown key={index} title={link} />
			}

			if(link === 'Login/Register'){
				return ( 
					<li key={index} className="nav-item">
			        	<a className="nav-link" onClick={()=> this.props.dispatch(showLoginRegister(!this.props.clicked))}>{link}</a>
			    	</li>
			    )
			}

			return (
				<li key={index} className="nav-item">
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
	clicked: state.loginRegisterForm.clicked,
	links: state.navLinks,
	wishlists: state.wishlists
})

export default connect(mapStateToProps)(NavLinks)

