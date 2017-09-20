import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators'

import {changeUserInfo} from '../../actions/auth'



export class PasswordForm extends React.Component{

    onSubmit(values) {
    	const {newPassword: password} = values

    	let infoObj ={
			password
		}
        
		this.props.dispatch(changeUserInfo(infoObj))
    }

	render(){

		return( 
			<div className="form">
				<h2>Change Password</h2>
				<form
				    onSubmit={this.props.handleSubmit(values =>
				        this.onSubmit(values)
				)}>
					<div className="form-group">
						<label htmlFor="currentPassword">Current Password</label>
						<Field 
							name="currentPassword" 
							id="currentPassword"
							className="form-control" 
							component="input" 
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
					      component="input" 
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
					      component="input" 
					      type="password" 
					      placeholder="Confirm email" 
						  validate={[required, nonEmpty, isTrimmed, matches('newPassword')]}
					  />
					</div>
					<div className="form-group">
						<input type="submit" className="submitButton" value="Change Password" /> 
					</div>
				</form>
			</div>
		)
	}
}


export default reduxForm({
	form: 'password'})(PasswordForm)