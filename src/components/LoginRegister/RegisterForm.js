import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {register, toggleLoginRegister, showLoginRegister} from '../../actions/userActions'

export class RegisterForm extends React.Component{
	
    onSubmit(values) {
        let user = {
        	email: values.email,
        	password: values.password
        }

        this.props.dispatch(register(user))
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
			      <Field name="email" id="email" type="email" component="input" placeholder="Email"/>
			      <Field name="password" id="password" type="password" component="input" placeholder="Password"/>
			      <Field name="confirmPassword" id="confirmPassword" type="password" component="input" placeholder="Confirm password"/>
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