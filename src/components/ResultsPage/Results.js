import React from 'react'
import {connect} from 'react-redux'

import {toggleSupplement} from '../../actions/results'

import Ebook from '../Ebook/Ebook'
import AmazonBook from '../Ebook/AmazonBook'
import Header from '../Header/Header'
import SupplementInfo from './Supplement/SupplementInfo'
import NoResults from '../NoResults/NoResults'


import './Results.css'

export class Results extends React.Component{

	handleClick(info){
		this.props.dispatch(toggleSupplement(info))
	}


	render(){
		
		let {amazonResult, loading,
			details, results, supplement, authorSupplement, bookSupplement} = this.props

		let dropdownLinks = ['Save to Wishlist']

		let supplementDiv;
		let amazon;
		let noResults;

		if((results.length !== 0 || amazonResult.length !== 0) && (Object.keys(authorSupplement).length !== 0 && Object.keys(bookSupplement).length !== 0)){
			supplementDiv = <div id="supplement-container" className="row">						
							<SupplementInfo supplement={supplement} details={this.props[details]} />
						</div>
		}


		let header = <Header headerId='header' title="Results" />

		if(loading){
			return (
				<div>
					<img src="/resources/icons/flip-book-loader.gif" alt='Loading Icon' />
				</div>
			)
		}

		if(results.length < 2){
			amazon = <AmazonBook results={amazonResult} />
		}


		if(results.length === 0) {
			noResults = <NoResults />
			header = undefined;
		}

		return(
			<main id="resultsPage">
				
				<div id="resultsHeader">
					{header}
				</div>
				<div id="main-container" className="container-fluid">
					<div id="main-row" className="row">
						{noResults}	
						<div className="col-sm-12 col-md-8">
							<Ebook results={results} dropdownType='options' dropdownLinks={dropdownLinks}/>
							{amazon}
						</div>
						<div className="col-sm-12 col-md-4">
							{supplementDiv}
						</div>
					</div>
				</div>
				<div /> 
			</main>
		)
	}
}

const mapStateToProps = state => ({
	amazonResult: state.results.amazonResults,
	loading: state.results.loading,
	supplement: state.results.supplement,
	details: state.results.details,
	results: state.results.results,
	authorSupplement: state.results.authorSupplement,
	bookSupplement: state.results.bookSupplement
})

export default connect(mapStateToProps)(Results)
