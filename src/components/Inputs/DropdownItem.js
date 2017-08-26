import React from 'react'



export default function DropdownItem(props){
	let items = props.dropdownLinks.map((item, index) => {
		return (<button className="dropdown-item" key={index}>{item}</button>)
	})

	return (
		<div>
			{items}
		</div>
	)
}