// subcomponent of FormatLocation

import React from 'react'

export default function BookFormat(props){
	
	if(props.formats.length === 0){
		return <p className="col audioBook">Audio Book</p> 
	}

	let formats = props.formats.map((format, index) => {
		let type = (/pdf|epub|mobi/).exec(format)[0]

		return <a className="col-auto" href={format} target='_blank' key={index}>{type}</a> 
	})

	return(
		<div>
			{formats}
		</div>
	)

}