import React from 'react'
import {connect} from 'react-redux'

import {toggleSupplement} from '../../actions/results'

import Ebook from '../Ebook/Ebook'
import Header from '../Header/Header'
import NavPills from '../Inputs/NavPills'
import SupplementInfo from './Supplement/SupplementInfo'

import './Results.css'

export class Results extends React.Component{

	handleClick(info){
		this.props.dispatch(toggleSupplement(info))
	}


	render(){
		let dropdownLinks = ['Save to Wishlist']

		let supplement;

		if(this.props.results.length !== 0){
			supplement = <div id="supplement-container" className="col-md-4 row">						
							<NavPills toggleSupplement={this.handleClick.bind(this)} supplement={this.props.supplement}/>
							<SupplementInfo supplement={this.props.supplement} details={this.props[this.props.details]} />
						</div>
		}

		return(
			<main>
				<Header headerId='header' title="Results" />

				<div id="main-container" className="container-fluid">
					<div id="main-row" className="row">
						
						<Ebook results={this.props.results} dropdownType='options' dropdownLinks={dropdownLinks}/>

						{supplement}

					</div>
				</div>
				<div /> 
			</main>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user,
	supplement: state.results.supplement,
	details: state.results.details,
	results: state.results.results,
	authorSupplement: state.results.authorSupplement,
	bookSupplement: state.results.bookSupplement
})

export default connect(mapStateToProps)(Results)
