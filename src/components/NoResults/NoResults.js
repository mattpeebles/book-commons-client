// subcomponent of Results

import React from 'react'
import {connect} from 'react-redux'
import SearchForm from '../Search/SearchForm'

import './NoResults.css'

export function NoResults(props){

	return (
		<div className="col-sm-12">
			<div id="noResultsHead">
				<h3>Bummer</h3>
				<p>We've come up empty on free ebooks</p>
			</div>
			<div id="noResults">
				<h3>Search Again?</h3>
				<SearchForm />
			</div>
		</div>
	)
}

export default connect()(NoResults)