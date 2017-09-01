import React from 'react'

import DropdownItem from './DropdownItem'

export default function Dropdown(props){
	
	return(
		<div className="dropdown col-auto">
		  <button className="btn btn-secondary btn-sm dropdown-toggle rightAligned" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		  </button>
		  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				<DropdownItem type={props.type} ebook={props.ebook} dropdownLinks={props.dropdownLinks} />
		  </div>
		</div>
	)
}