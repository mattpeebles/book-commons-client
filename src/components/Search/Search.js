import React from 'react'
import Header from '../Header/Header'
import SearchForm from './SearchForm'
import {connect} from 'react-redux'

import './Search.css'
export class Search extends React.Component{

	render(){
		return(
			<div className="container">
				<div id="searchContainer" className="row">
					<div className="col-12">
						<Header headerId='header' subtitleId="subtitle" title='Book Commons' subtitle='Search through the public domain'/>
					</div>
					<SearchForm history={this.props.history}/>
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	history: state.router
})

export default connect(mapStateToProps)(Search)