// subcomponent of App

import React from 'react'

import NavBrand from './NavBrand'
import NavLinks	from './NavLinks'
import NavButton from './NavButton'

import './NavBar.css'

export default function NavBar(props){
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<NavBrand name={'Book Commons'}/>
			<NavButton />
			<NavLinks/>
		</nav>
	)
}
