import React from 'react'
import {reduxForm, Field, focus} from 'redux-form';
import {registerUser, registerUserError, login, toggleLoginRegister, showLoginRegister} from '../../actions/auth';
import Input from '../Inputs/Input'
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators'

export class RegisterForm extends React.Component{
	
    onSubmit(values) {
        const {email, password, confirmPassword} = values

       if(password !== confirmPassword){
       	    let err = {
    			location: 'confirmPassword',
    			message: 'Passwords do not match'
    		}
    		return this.props.dispatch(registerUserError(err))
    		
       }

       let newUser = {
	       	email,
	       	password
       }
       return this.props
        	.dispatch(registerUser(newUser))
        	.then(() => {
        		this.props.dispatch(login(email, password))
        	})
    }

	render(){
		
		let errorMessage;
	    
	    		//Redux Form is not consistent with placing labels on errors
	    		//On this form it will on place an error automatically if a user tries to
	    		//enter an email already been used.
	    		//Otherwise, this manually places an error message on the screen
	    if (this.props.error || (this.props.auth.error && this.props.auth.error !== 'Email already taken')){
	        console.log(this.props.auth.error)
	        let message = (this.props.error) ? this.props.error : this.props.auth.error.message
	        errorMessage = (
	            <div className="message message-error">{message}</div>
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
			<div className="module form-module">
			  <div className="toggle">
				<button className="toggleButton btn btn-default" onClick={() => this.props.dispatch(toggleLoginRegister('login'))}>Login</button>
			  </div>
			  <div className="closeForm">
				<button className="btn btn-danger" onClick={() => this.props.dispatch(showLoginRegister(false))}>X</button>
			  </div>
			  
			  <div className="form">
			    <h2>Create an account</h2>
				<form
	                onSubmit={this.props.handleSubmit(values =>
	                    this.onSubmit(values)
                )}>
				 	{successMessage}
            		{errorMessage}
			      <label htmlFor="email">Email</label>
			      <Field 
			      	name="email" 
			      	type="email"
			      	placeholder="Email"
			      	component={Input}
			      	validate={[required, nonEmpty, isTrimmed]}
			      />

			      <label htmlFor="password">Password</label>
			      <Field 
			      	name="password" 
			      	type="password" 
			      	component={Input}
			      	validate={[required, length({min: 8, max: 72}), isTrimmed]}/>

			      <label htmlFor="confirmPassword">Confirm Password</label>
			      <Field 
			      	name="confirmPassword" 
			      	type="password" 
			      	component={Input}
			      	validate={[required, nonEmpty, matches('password')]}/>
	                <button
	                    type="submit"
	                    disabled={this.props.pristine || this.props.submitting}>
	                   	Register
					</button>			    
				</form>
			  </div>
			  <div className="cta"><a href="/">Forgot your password?</a></div>
			</div>
		)
	}
}


export default reduxForm({
	form: 'register',
	onSubmitFail: (errors, dispatch) => {
        dispatch(focus('register', Object.keys(errors)[0]))
    }
})(RegisterForm)