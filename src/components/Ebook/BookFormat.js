import React from 'react'

export default function BookFormat(props){
	let formats = props.formats.map((format, index) => {
		return <a className="col-auto" href="/" key={index}>{format}</a> 
	})

	return(
		<div>
			{formats}
		</div>
	)

}