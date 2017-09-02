import React from 'react'



export default function SearchForm(props){
	
	function search(e){
		e.preventDefault()
		window.location.href = window.location.origin + '/results'
	}

	return (
		<div className="col-12">
			<form id="bookSearchForm" onSubmit={search}>
				<div className="form-group">
					<input id="bookSearch" type="text" name="bookSearch" placeholder="Search the public domain" />
				</div>
				<div className="form-group">
					<input id='bookSearchSubmit' type='submit' value="Commons Search" />
				</div>
			</form>
		</div>
	)
}