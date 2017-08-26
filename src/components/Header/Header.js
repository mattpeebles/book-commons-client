import React from 'react'

import Subtitle from './Subtitle'

export default function Header(props){
	
	if(!props.subtitle){
		return (
			<h1 id={props.headerId}>{props.title}</h1>
		)
	}

	return(
		<header id={props.headerId}>
			<h1>{props.title}</h1>
			<Subtitle subtitleId={props.subtitleId} subtitle={props.subtitle}/>
		</header>
	)
}