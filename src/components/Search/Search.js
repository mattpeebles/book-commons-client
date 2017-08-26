import React from 'react'
import Header from '../Header/Header'
import SearchForm from './SearchForm'


import './Search.css'
export default function Search(props){

	return(
		<main role='main'>
			<div id="container">
				<Header headerId='header' title='Book Commons' subtitle='Search through the public domain'/>
				<SearchForm />
			</div>
		</main>
	)
}