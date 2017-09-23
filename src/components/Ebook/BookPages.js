import React from 'react'


export default function BookPages(props){
	
	if (props.pages === undefined){
		return <div className='col-auto'></div>
	}

	return (
		<div className="bookPages col-auto">{props.pages} pages</div>
	)
}