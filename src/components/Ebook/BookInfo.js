import React from 'react'

import Dropdown from '../Inputs/Dropdown'
export default function BookInfo(props){

	return (
		<div className="row">
			<div className="title col text-truncate">
				{props.title}
			</div>
			<Dropdown ebook={props.ebook} type={props.dropdownType} dropdownLinks={props.dropdownLinks}/>
			<div className="bookAuthor text-truncate col-12">
				{props.author}
			</div>
		</div>
	)
}