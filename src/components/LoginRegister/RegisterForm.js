import React from 'react'
import {connect} from 'react-redux'

import {toggleLoginRegister, showLoginRegister} from '../../actions/actions'

export class RegisterForm extends React.Component{
	
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
			    <form>
			      <input type="text" placeholder="Email"/>
			      <input type="password" placeholder="Password"/>
			      <input type="email" placeholder="Confirm password"/>
			      <button className="submitButton">Register</button>
			    </form>
			  </div>
			  <div className="cta"><a href="/">Forgot your password?</a></div>
			</div>
		)
	}
}


export default connect()(RegisterForm)