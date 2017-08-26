import React from 'react'
import {Link} from 'react-router-dom'
import SearchHeader from './SearchHeader'
import SearchForm from './SearchForm'


import './Search.css'
export default function Search(props){

	return(
		<main role='main'>
			<div id="container">
				<SearchHeader />
				<SearchForm />
				<Link to="results"><button id="advanced">Advanced Search</button></Link>
			</div>
		</main>
	)
}