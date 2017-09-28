// subcomponent of LoginRegister

import React from 'react'
import {reduxForm, Field, focus} from 'redux-form';
import {registerUser, registerUserError, login, toggleLoginRegister, showLoginRegister} from '../../actions/auth';
import {addNewWishlist} from '../../actions/wishlist'
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

       return this.props.dispatch(registerUser(newUser))
        	.then(() => this.props.dispatch(login(email, password)))
        	.then(() => this.props.dispatch(addNewWishlist('Favorite')))

    }

	render(){


		let errorMessage;
	    
	    if (this.props.error || this.props.auth.error){
	        let message = (this.props.error) ? this.props.error : this.props.auth.error.message
	        
	       		//prevents this message from being displayed twice
	       if(message !== 'Email already taken'){
		        errorMessage = (
		            <div className="message message-error">{message}</div>
		        );
		        focus('register', this.props.auth.error.location)
		    }
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
				<button className="btn" onClick={() => this.props.dispatch(showLoginRegister(false))}>X</button>
			  </div>
			  
			  <div className="form">
			    <h2>Create an account</h2>
				<form
	                onSubmit={this.props.handleSubmit(values =>
	                    this.onSubmit(values)
                )}>
				 	{successMessage}
            		{errorMessage}
			      
					<div className="form-group">
					  <Field 
					  	name="email" 
					  	type="email"
					  	placeholder="Email"
					  	component={Input}
					  	validate={[required, nonEmpty, isTrimmed]}
					  />
					</div>
				      
					<div className="form-group">
					  <Field 
					  	name="password" 
					  	type="password" 
					  	component={Input}
					  	placeholder='Password'
					  	validate={[required, length({min: 8, max: 72}), isTrimmed]}
					  />
					</div>
				      
					<div className="form-group">
					  <Field 
					  	name="confirmPassword" 
					  	type="password" 
					  	component={Input}
					  	placeholder="Confirm password"
					  	validate={[required, nonEmpty, matches('password')]}
					  />
					</div>
			      	<div className="form-group">
		                <button
		                    type="submit"
		                    className="submitButton"
		                    disabled={this.props.pristine || this.props.submitting}>
		                   	Register
						</button>
					</div>			    
				</form>
			  </div>
			  
				{/*<div className="cta"><a href="/">Forgot your password?</a></div>*/}
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