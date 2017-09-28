// component called in Book Details

import React from 'react'


export default function PublishDate(props){

	if(props.publishDate === undefined){
		return <div className="col-auto"></div>
	}

	return(
		<div className="bookPublishDate ml-md-auto col-auto">Pub<span className="abbr">lished</span>: {props.publishDate}</div>
	)
}