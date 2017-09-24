import React from 'react'
import {connect} from 'react-redux'

import {toggleSupplement} from '../../actions/results'

import Ebook from '../Ebook/Ebook'
import AmazonBook from '../Ebook/AmazonBook'
import Header from '../Header/Header'
import SupplementInfo from './Supplement/SupplementInfo'

import './Results.css'

export class Results extends React.Component{

	handleClick(info){
		this.props.dispatch(toggleSupplement(info))
	}


	render(){
		let dropdownLinks = ['Save to Wishlist']

		let supplement;
		let amazon;


		if(this.props.results.length !== 0 || this.props.amazonResult.length !== 0){
			supplement = <div id="supplement-container" className="row">						
							<SupplementInfo supplement={this.props.supplement} details={this.props[this.props.details]} />
						</div>
		}

		if(this.props.loading){
			return (
				<div>
					<img src="/resources/icons/flip-book-loader.gif" alt='Loading Icon' />
				</div>
			)
		}

		if(this.props.results.length < 2){
			amazon = <AmazonBook results={this.props.amazonResult} />
		}

		return(
			<main id="resultsPage">
				<Header headerId='header' title="Results" />

				<div id="main-container" className="container-fluid">
					<div id="main-row" className="row">
						
						<div className="col-sm-12 col-md-8">
							<Ebook results={this.props.results} dropdownType='options' dropdownLinks={dropdownLinks}/>
							{amazon}
						</div>
						<div className="col-sm-12 col-md-4">
							{supplement}
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
	resultsLength: state.results.resultsLength,
	loading: state.results.loading,
	dbCalled: state.results.dbCalled,
	user: state.user,
	supplement: state.results.supplement,
	details: state.results.details,
	results: state.results.results,
	authorSupplement: state.results.authorSupplement,
	bookSupplement: state.results.bookSupplement
})

export default connect(mapStateToProps)(Results)
