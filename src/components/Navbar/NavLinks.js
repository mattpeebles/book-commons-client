import React from 'react'

import NavSearch from './NavSearch'

export default function NavLinks(props){
	
	let links = props.links.map((link, index) => {
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

