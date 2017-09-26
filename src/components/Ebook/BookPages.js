// called in BookDetails

import React from 'react'

export default function BookPages(props){
	
	if (props.pages === undefined){
		return <div></div>
	}

	return (
		<div className="bookPages col-auto">{props.pages} pages</div>
	)
}