import React from 'react'

import NavBrand from './NavBrand'
import NavLinks	from './NavLinks'

import './NavBar.css'

export default function NavBar(props){
	return(

		<div>
			<nav>
				<NavBrand />
				<NavLinks links={['login', 'register']}/>
			</nav>
		</div>

	)
}