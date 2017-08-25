import React from 'react'
import SearchHeader from './SearchHeader'
import SearchForm from './SearchForm'


import './Search.css'
export default function Search(props){

	return(
		<main role='main'>
			<div id="container">
				<SearchHeader />
				<SearchForm />
				<button id="advanced">Advanced Search</button>
			</div>
		</main>
	)
}