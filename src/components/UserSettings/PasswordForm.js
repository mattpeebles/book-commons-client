import React from 'react'
import { push } from 'react-router-redux'
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators'
import Input from '../Inputs/Input'

import {changeUserInfo, changeUserInfoError} from '../../actions/auth'

export class PasswordForm extends React.Component{

    onSubmit(values) {
    	const {newPassword: password, confirmPassword, currentPassword} = values

    	if(password !== confirmPassword){
    		let err = {
    			location: 'confirmPassword',
    			message: 'Passwords do not match'
    		}
    		return this.props.dispatch(changeUserInfoError(err))
    	}

    	let infoObj ={
			confirmPassword,
			password,
			currentPassword
		}
        
		return this.props.dispatch(changeUserInfo(infoObj))
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

		if(this.props.auth.loading === true){
			return (
				<div>
					<img src="/resources/icons/flip-book-loader.gif" alt='Loading Icon' />
				</div>
			)
		}

		if(this.props.auth.userInfoChanged === true){
			setTimeout(() => this.props.dispatch(push('/')), 3000)
			return (
				<div>
					Password changed
				</div>
			)
		}

		return( 
			<div className="form userSettingsForm">
				<h2>Change Password</h2>
				<form
				    onSubmit={this.props.handleSubmit(values =>
				        this.onSubmit(values)
				)}>
				 	{successMessage}
            		{errorMessage}
					<div className="form-group">
						<label htmlFor="currentPassword">Current Password</label>
						<Field 
							name="currentPassword" 
							id="currentPassword"
							className="form-control" 
							component={Input} 
							type="password" 
							placeholder="Current password"
							validate={[required, nonEmpty]}
						/>
						</div>
					<div className="form-group">
					  <label htmlFor="newPassword">New Password</label>
					  <Field 
					      name="newPassword" 
					      id="newPassword"
					      className="form-control" 
					      component={Input} 
					      type="password" 
					      placeholder="New passwod"
						  validate={[required, length({min: 8, max: 72}), isTrimmed]}
					  />
					</div>
					<div className="form-group">
					  <label htmlFor="confirmPassword">Confirm Password</label>
					  <Field 
					      name="confirmPassword" 
					      id="confirmPassword"
					      className="form-control" 
					      component={Input}
					      type="password" 
					      placeholder="Confirm email" 
						  validate={[required, nonEmpty, isTrimmed, matches('newPassword')]}
					  />
					</div>
					<div className="form-group">
		                <button
		                    type="submit"
		                    disabled={this.props.pristine || this.props.submitting}>
		                    Change Password
						</button>
					</div>
				</form>
			</div>
		)
	}
}


export default reduxForm({
	form: 'password'})(PasswordForm)