import React from 'react'



export default function NavBrand(props){
	return (
			<a className="navbar-brand" id="brand" href="/">{props.name}</a>
	)
}