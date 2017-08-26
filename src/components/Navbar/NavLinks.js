import React from 'react'



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
			<ul className="navbar-nav mr-auto">
				{links}
			</ul>
		</div>
	)
}

