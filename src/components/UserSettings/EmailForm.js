import React from 'react'
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {API_BASE_URL} from '../../config';
import {required, nonEmpty, matches, isTrimmed} from '../../validators'
import Input from '../Inputs/Input'
import {changeUserInfo, changeUserInfoError} from '../../actions/auth'



export class EmailForm extends React.Component{

    onSubmit(values) {
    	const {newEmail: email, confirmEmail, currentPassword} = values

    	if(email !== confirmEmail){
    		let err = {
    			location: 'confirmEmail',
    			message: 'Emails do not match'
    		}
    		return this.props.dispatch(changeUserInfoError(err))
    	}

    	let infoObj ={
			email,
			confirmEmail,
			currentPassword
		}
        
		this.props.dispatch(changeUserInfo(infoObj))
    }

	render(){

	    let errorMessage;
	    if (this.props.error || this.props.auth.error){
	        errorMessage = (
	            <div className="message message-error">{this.props.error || this.props.auth.error.message}</div>
	        );
	        focus('email', this.props.auth.error.location)
	    }


		let successMessage;
	    if (this.props.submitSucceeded && this.props.auth.error === null) {
	        successMessage = (
	            <div className="message message-success">
	                Message submitted successfully
	            </div>
	        );
	    }


		return( 
			<div className="form">
				<h2>Change Email</h2>
				<form
				    onSubmit={this.props.handleSubmit(values =>
				        this.onSubmit(values)
				)}>
				 	{successMessage}
            		{errorMessage}
					<div className="form-group">
					<label htmlFor="newEmail">New Email</label>
					<Field 
						name="newEmail" 
						id="newEmail"
						className="form-control" 
						component={Input} 
						type="email" 
						placeholder="New email"
						validate={[required, nonEmpty, isTrimmed]}
					/>
					</div>
					<div className="form-group">
						<label htmlFor="confirmEmail">Confirm Email</label>
						<Field 
							name="confirmEmail" 
							id="confirmEmail"
							className="form-control" 
							component={Input}
							type="email" 
							placeholder="Confirm email" 
							validate={[required, nonEmpty, isTrimmed, matches('newEmail')]}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Enter Password</label>
						<Field 
							name="currentPassword" 
							id="currentPassword"
							className="form-control" 
							component={Input}
							type="password" 
							placeholder="Password"
							validate={[required, nonEmpty]}
						/>
					</div>
					<div className="form-group">
		                <button
		                    type="submit"
		                    disabled={this.props.pristine || this.props.submitting}>
		                    Change Email
						</button>
					</div>
				</form>
			</div>
		)
	}
}


export default reduxForm({
    form: 'email',
    onSubmitFail: (errors, dispatch) => {
        dispatch(focus('email', Object.keys(errors)[0]))
    }
})(EmailForm);