import React from 'react'

export default function NavDropdown(props){
	const wishlistLinks = ["Biographies", "French Literature", "SciFi", "Russian Literature"]

	const links = wishlistLinks.map((link, index) => {
			return <a key={index} className="dropdown-item" href={"/wishlist"}>{link}</a>
	})


	return(
		<li className="nav-item dropdown">
	        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          {props.title}
	        </a>
	        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
       			{links}
	        </div>
	    </li>
	)
}