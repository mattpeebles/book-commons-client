import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, isTrimmed} from '../../validators'

import {emptyResults, fetchGutenbergBookId, fetchGoogleBook} from '../../actions/results'

import './NavSearch.css'

export class NavSearch extends React.Component{
	
    onSubmit(values) {
    	let {navSearch: title} = values
       	this.props.dispatch(emptyResults())
       	this.props.dispatch(fetchGutenbergBookId(title))
       	this.props.dispatch(fetchGoogleBook(title))
    }

	render(){
		return (
		  	<form id="navSearchForm" className='form-inline'
		  		onSubmit={this.props.handleSubmit(values =>
		        this.onSubmit(values))}
		    >
			    <Field 
					name="navSearch" 
			      	id="navBookSearch" 
			      	type="text" 
			      	component="input" 
			      	placeholder="Search the public domain"  
			      	validate={[required, nonEmpty, isTrimmed]}
					aria-label="Search" />
			    <input id="navSubmit" className="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit" value="Search"/>
		  </form>
		)
	}
}

export default reduxForm({
	form: 'search'})(NavSearch)