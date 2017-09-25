import React from 'react'
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../Inputs/Input'
import {required, nonEmpty, isTrimmed} from '../../validators'

import {fetchBooks} from '../../actions/results'

import './NavSearch.css'

export class NavSearch extends React.Component{
	
    onSubmit(values) {
    	let {navSearch: title} = values
       	this.props.dispatch(fetchBooks(title))
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
			      	component={Input}
			      	placeholder="Search the public domain"  
			      	validate={[required, nonEmpty, isTrimmed]}
					aria-label="Search" />

				<button
					id="navSubmit"
				    type="submit"
				    className="btn btn-outline-success btn-sm my-2 my-sm-0"
				    disabled={this.props.pristine || this.props.submitting}>
				   	Search
				</button>	
		  </form>
		)
	}
}

export default reduxForm({
	form: 'navSearch',
	onSubmitFail: (errors, dispatch) => {
		        dispatch(focus('navSearch', Object.keys(errors)[0]))
		    }
})(NavSearch)