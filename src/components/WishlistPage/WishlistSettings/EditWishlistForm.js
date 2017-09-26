// subcomponent of WLSettings

import React from 'react'
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../../Inputs/Input'
import {editWishlistTitle, toggleEditWishlistStatus} from '../../../actions/wishlist'

import {required, nonEmpty} from '../../../validators'


import './EditWishlistForm.css'

export class EditWishlistForm extends React.Component{

    onSubmit(values) {
    	const {editTitle: newTitle} = values
    	const oldTitle = this.props.title
        
        return this.props.dispatch(editWishlistTitle(oldTitle, newTitle))
    }

    toggleEditForm(e){
		let value = e.target.id.split('-')[0]
		this.props.dispatch(toggleEditWishlistStatus(value))
	}

	render(){
		
		let errorMessage;
	    
	    if (this.props.error){
	        let message = (this.props.error) ? this.props.error : this.props.auth.error.message
	        errorMessage = (
	            <div className="message message-error">{message}</div>
	        );
	        focus('email', 'password')
	    }

		let successMessage;
	    if (this.props.submitSucceeded) {
	        successMessage = (
	            <div className="message message-success">
	                Message submitted successfully
	            </div>
	        );
	    }

	    	//passed in as props from WLSettings
	    let {title, index} = this.props

		return(

			<div key={index} className="col-12 col-md-6 settingsContainer">
				<div id='editForm'>
					<div className="col">
						<h4>Edit Title</h4>
					</div>
		            	{successMessage}
		            	{errorMessage}
					<form 
						id={title+"-EditForm"} 
						onSubmit={this.props.handleSubmit(values =>
		                    this.onSubmit(values))}
		            >	
			            <div className="form-row">
			            	<label className="sr-only" htmlFor='editTitle' />
							<Field 
								type="text" 
								name="editTitle"
								id="editTitle"
								className='form-control'
								component={Input} 
								placeholder={title} 
								validate={[required, nonEmpty]}
							/>

							<div className="editWishlistButtonGroup">
								<button
								    type="submit"
								    className="editTitleSubmit btn btn-sm"
								    disabled={this.props.pristine || this.props.submitting}>
								   	Edit
								</button>	
								<button 
									type="cancel" 
									className="editTitleCancel btn btn-sm"
									id={title+"-Cancel"} 
									onClick={e=>this.toggleEditForm(e)}
								>
								Cancel
								</button>
							</div>
						</div>
					
					</form>
				</div>
			</div>
		)	
	}
}


export default reduxForm({
	form: 'editWishlist',
	onSubmitFail: (errors, dispatch) => {
	        dispatch(focus('editWishlist', Object.keys(errors)[0]))
	    }
})(EditWishlistForm)