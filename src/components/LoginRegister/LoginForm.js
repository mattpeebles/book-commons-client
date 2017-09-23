import React from 'react'
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../Inputs/Input'
import {login, toggleLoginRegister, showLoginRegister} from '../../actions/auth'

export class LoginForm extends React.Component{

    onSubmit(values) {

    	const {email, password} = values
        
        return this.props.dispatch(login(email, password))
    }

	render(){
		
		let errorMessage;
	    
	    if (this.props.error || (this.props.auth.error)){
	        let message = (this.props.error) ? this.props.error : this.props.auth.error.message
	        errorMessage = (
	            <div className="message message-error">{message}</div>
	        );
	        focus('email', 'password')
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
			<div className="loginRegisterContainer">	
				<div className="module form-module">
				  <div className="toggle"><i className="fa fa-times fa-pencil"></i>
					<button className="toggleButton btn btn-default" onClick={() => this.props.dispatch(toggleLoginRegister('register'))}>Register</button>
				  </div>
				  <div className="closeForm">
					<button className="btn" onClick={() => this.props.dispatch(showLoginRegister(false))}>X</button>
				  </div>			  
				  <div className="form">
				    <h2>Login to your account</h2>
					<form
		                onSubmit={this.props.handleSubmit(values =>
		                    this.onSubmit(values)
		            )}>
					 	{successMessage}
		        		{errorMessage}
				      <Field name="email" id="email" component={Input} type="text" placeholder="Email"/>
				      <Field name="password" id="password" component={Input} type="password" placeholder="Password"/>
		                
					<div className='form-group'>
						<button
						    type="submit"
						    className="submitButton"
						    disabled={this.props.pristine || this.props.submitting}>
						   	Login
						</button>	
					</div>

				    </form>
				  </div>
				  <div className="cta"><a href="/">Forgot your password?</a></div>
				</div>
			</div>
		)	
	}
}


export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => {
	        dispatch(focus('login', Object.keys(errors)[0]))
	    }
})(LoginForm)