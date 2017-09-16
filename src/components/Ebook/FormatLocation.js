import React from 'react'

import BookFormat from './BookFormat'

export default function FormatLocation(props){
	return(
		<div id="formatLocation" className="row">
			<div className="format col-6 row">
				<BookFormat formats={props.formats}/>
			</div>
			<div className="location-container col">
				<div className="database"><img className="icon" src={props.icon} alt="icon"/><span className="location"><a href={props.location} target='_blank'>{props.database}</a></span></div>
			</div>
		</div>
	)
}