import React from 'react'


export default function PublishDate(props){
	return(
		<div className="bookPublishDate ml-md-auto col-auto">Pub<span className="abbr">lished</span>: {props.publishDate}</div>
	)
}