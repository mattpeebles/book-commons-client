import React from 'react'

export default function BookFormat(props){
	let formats = props.formats.map((format, index) => {
		let formatSplit = format.split('/')
		let type = formatSplit[formatSplit.length - 1].toString().replace(/\d+/g, '')

		return <a className="col-auto" href={format} target='_blank' key={index}>{type}</a> 
	})

	return(
		<div>
			{formats}
		</div>
	)

}