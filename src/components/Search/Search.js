import React from 'react'
import Header from '../Header/Header'
import SearchForm from './SearchForm'


import './Search.css'
export default function Search(props){

	return(
			<div className="container">
				<div id="searchContainer" className="row">
					<div className="col-12">
						<Header headerId='header' subtitleId="subtitle" title='Book Commons' subtitle='Search through the public domain'/>
					</div>
					<SearchForm />
				</div>
			</div>
	)
}