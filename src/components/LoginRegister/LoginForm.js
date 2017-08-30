import React from 'react'
import {connect} from 'react-redux';

import {toggleLoginRegister, showLoginRegister} from '../../actions/actions'

export class LoginForm extends React.Component{

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
			    <form>
			      <input type="text" placeholder="Email"/>
			      <input type="password" placeholder="Password"/>
			      <button className="submitButton">Login</button>
			    </form>
			  </div>
			  <div className="cta"><a href="/">Forgot your password?</a></div>
			</div>
		)
	}
}


export default connect()(LoginForm)