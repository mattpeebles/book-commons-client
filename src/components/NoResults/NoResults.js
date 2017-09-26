// subcomponent of Results

import React from 'react'
import {connect} from 'react-redux'
import SearchForm from '../Search/SearchForm'

import './NoResults.css'

export function NoResults(props){

	let {amazonResults} = props

	let purchase = (amazonResults.length === 0) ? undefined : 'You can get them the old fashioned way below, though'  

	return (
		<div className="col-sm-12">
			<div id="noResults">
				<h3>Bummer</h3>
				<p>We've come up empty on free ebooks</p>
				<p>{purchase}</p>
				<SearchForm />
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	amazonResults: state.results.amazonResults
})

export default connect(mapStateToProps)(NoResults)