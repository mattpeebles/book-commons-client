import React from 'react'

import BookFormat from './BookFormat'

export default function FormatLocation(props){
	return(
		<div id="formatLocation" className="row">
			<div className="format col-6 row">
				<BookFormat formats={props.formats}/>
			</div>
			<div className="location-container col">
				<div className="location"><img className="icon" src={props.icon} alt="icon"/><span className="locationUrl"><a href={props.locationUrl}>{props.location}</a></span></div>
			</div>
		</div>
	)
}