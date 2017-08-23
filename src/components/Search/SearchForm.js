import React from 'react'



export default function SearchForm(props){
	return (
		<div>
			<form id="bookSearchForm">
				<input id="bookSearch" type="text" name="bookSearch" placeholder="Search the public domain" />
			</form>
		</div>
	)
}