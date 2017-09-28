// subcomponent of Results

import React from 'react'
import {connect} from 'react-redux'
import SearchForm from '../Search/SearchForm'

import './NoResults.css'

export function NoResults(props){

	return (
		<div id="noResultsContainer" className="col-sm-12">
			<div id="noResults">
				<h3 id="noResultsHead">Bummer - Search Again?</h3>
				<SearchForm />
			</div>
		</div>
	)
}

export default connect()(NoResults)