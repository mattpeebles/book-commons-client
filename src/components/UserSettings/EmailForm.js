import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, matches, isTrimmed} from '../../validators'

import {changeUserInfo} from '../../actions/auth'


export class EmailForm extends React.Component{

    onSubmit(values) {
    	const {newEmail: email} = values

    	let infoObj ={
			email
		}
        
		this.props.dispatch(changeUserInfo(infoObj))
    }

	render(){
		return( 
			<div className="form">
				<h2>Change Email</h2>
				<form
				    onSubmit={this.props.handleSubmit(values =>
				        this.onSubmit(values)
				)}>
					<div className="form-group">
					<label htmlFor="newEmail">New Email</label>
					<Field 
						name="newEmail" 
						id="newEmail"
						className="form-control" 
						component="input" 
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
							component="input" 
							type="email" 
							placeholder="Confirm email" 
							validate={[required, nonEmpty, isTrimmed, matches('newEmail')]}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Enter Password</label>
						<Field 
							name="password" 
							id="password"
							className="form-control" 
							component="input" 
							type="password" 
							placeholder="Password"
							validate={[required, nonEmpty]}
						/>
					</div>
					<div className="form-group">
						<input type='submit' className="submitButton" value="Change Email" />
					</div>
				</form>
			</div>
		)
	}
}


export default reduxForm({
	form: 'email'})(EmailForm)