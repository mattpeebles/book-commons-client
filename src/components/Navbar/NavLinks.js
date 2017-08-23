import React from 'react'



export default function NavLinks(props){
	
	let links = props.links.map((link, index) => {
		return <li key={index}><a href='/'>{link}</a></li>
	})

	return(
		<div>
			<ul>
				{links}
			</ul>
		</div>
	)
}