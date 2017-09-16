import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {login, toggleLoginRegister, showLoginRegister} from '../../actions/auth';
import {registerUser, } from '../../actions/userActions'
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators'

export class RegisterForm extends React.Component{
	
    onSubmit(values) {
        const {email, password} = values

       return this.props
        	.dispatch(registerUser(values))
        	.then(() => this.props.dispatch(login(email, password)))
    }

	render(){
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
			      <Field 
			      	name="email" 
			      	id="email" 
			      	type="email" 
			      	component="input" 
			      	placeholder="Email"  
			      	validate={[required, nonEmpty, isTrimmed]}/>
			      <Field 
			      	name="password" 
			      	id="password" 
			      	type="password" 
			      	component="input" 
			      	placeholder="Password" 
			      	validate={[required, length({min: 10, max: 72}), isTrimmed]}/>
			      <Field 
			      	name="confirmPassword" 
			      	id="confirmPassword" 
			      	type="password" 
			      	component="input" 
			      	placeholder="Confirm password"  
			      	validate={[required, nonEmpty, matches('password')]}/>
			      <button className="submitButton">Register</button>
			    </form>
			  </div>
			  <div className="cta"><a href="/">Forgot your password?</a></div>
			</div>
		)
	}
}


export default reduxForm({
	form: 'register'})(RegisterForm)