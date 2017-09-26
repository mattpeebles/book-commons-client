// subcomponent of NoResults, Search

import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, isTrimmed} from '../../validators'

import {fetchBooks} from '../../actions/results'

export class SearchForm extends React.Component{
	
    onSubmit(values) {
    	let {title} = values
       	this.props.dispatch(fetchBooks(title))
    }

    render(){
		return (
			<div className="col-12 align-middle">
				<form id="bookSearchForm"  
					onSubmit={this.props.handleSubmit(values =>
		                    this.onSubmit(values))}>
					<div className="form-group row">
						<div className='input-group' id="searchGroup">
							<span className="input-group-addon" id="searchAddon">Title</span>
							<Field
						      	name="title" 
						      	id="bookSearch" 
						      	type="text" 
						      	component="input" 
						      	placeholder="Search the public domain"  
						      	validate={[required, nonEmpty, isTrimmed]}
							/>
						</div>
					</div>
					<div className="form-group text-center">
						<input id='bookSearchSubmit' type='submit' value="Commons Search" />
					</div>
				</form>
			</div>
		)
    }
}


export default reduxForm({
	form: 'search'})(SearchForm)