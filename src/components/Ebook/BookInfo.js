import React from 'react'


export default function BookInfo(props){
	return (
		<div className="row">
			<div className="title col-12 text-truncate">
				{props.title}
			</div>
			<div className="bookAuthor text-truncate col-12">
				{props.author}
			</div>
		</div>
	)
}