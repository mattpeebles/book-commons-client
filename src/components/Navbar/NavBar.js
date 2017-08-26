import React from 'react'

import NavBrand from './NavBrand'
import NavLinks	from './NavLinks'
import NavButton from './NavButton'

export default function NavBar(props){
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<NavBrand />
			<NavButton />
			<NavLinks links={props.links}/>
		</nav>
	)
}
