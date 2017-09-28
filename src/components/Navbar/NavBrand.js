// subcomponent of NavBar

import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBrand(props){
	return (
			<Link className="navbar-brand" id="brand" to={"/"}>{props.name}</Link>
	)
}