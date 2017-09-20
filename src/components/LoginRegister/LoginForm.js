import React from 'react'
import {reduxForm, Field} from 'redux-form';

import {login, toggleLoginRegister, showLoginRegister} from '../../actions/auth'

export class LoginForm extends React.Component{

    onSubmit(values) {

    	const {email, password} = values
        
        this.props.dispatch(login(email, password))
    }

	render(){
		return(
			<div className="module form-module">
			  <div className="toggle"><i className="fa fa-times fa-pencil"></i>
				<button className="toggleButton btn btn-default" onClick={() => this.props.dispatch(toggleLoginRegister('register'))}>Register</button>
			  </div>
			  <div className="closeForm">
				<button className="btn btn-danger" onClick={() => this.props.dispatch(showLoginRegister(false))}>X</button>
			  </div>			  
			  <div className="form">
			    <h2>Login to your account</h2>
				<form
	                onSubmit={this.props.handleSubmit(values =>
	                    this.onSubmit(values)
                )}>
			      <Field name="email" id="email" component="input" type="text" placeholder="Email"/>
			      <Field name="password" id="password" component="input" type="password" placeholder="Password"/>
			      <button className="submitButton">Login</button>
			    </form>
			  </div>
			  <div className="cta"><a href="/">Forgot your password?</a></div>
			</div>
		)
	}
}


export default reduxForm({
	form: 'login'})(LoginForm)