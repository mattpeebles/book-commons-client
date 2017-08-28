import React from 'react'

import NavSearch from './NavSearch'
import NavDropdown from './NavDropdown'

export default function NavLinks(props){
	
	let links = props.links.map((link, index) => {
		
		if (link ==="wishlist"){
			return <NavDropdown key={index} title={link} />
		}

		return (
			<li key={index} className="nav-item">
	        	<a className="nav-link" href={"/" + link}>{link}</a>
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

