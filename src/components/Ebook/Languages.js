import React from 'react'


export default function Languages(props){
	return 	(
		<div className="bookLanguage col-4">Lang<span className="abbr">uage</span>: {props.languages.toString().replace(/[,]/g, ' ')}</div>
	)
}