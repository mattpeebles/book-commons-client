import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, isTrimmed} from '../../validators'

import {emptyResults, fetchGutenbergBookId, fetchGoogleBook} from '../../actions/results'

export class SearchForm extends React.Component{
	
    onSubmit(values) {
    	let {title} = values
       	this.props.dispatch(emptyResults())
       	this.props.dispatch(fetchGutenbergBookId(title))
       	this.props.dispatch(fetchGoogleBook(title))
    }

    render(){
		return (
			<div className="col-12">
				<form id="bookSearchForm"  
					onSubmit={this.props.handleSubmit(values =>
		                    this.onSubmit(values))}>
					<div className="form-group">
						<Field
					      	name="title" 
					      	id="bookSearch" 
					      	type="text" 
					      	component="input" 
					      	placeholder="Search the public domain"  
					      	validate={[required, nonEmpty, isTrimmed]}
						/>
					</div>
					<div className="form-group">
						<input id='bookSearchSubmit' type='submit' value="Commons Search" />
					</div>
				</form>
			</div>
		)
    }
}


export default reduxForm({
	form: 'search'})(SearchForm)