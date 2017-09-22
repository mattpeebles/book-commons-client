import React from 'react'
import {connect} from 'react-redux'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

import './LoginRegister.css'

export function LoginRegister(props){

		if(props.form === 'login'){
			return 	<LoginForm auth={props.auth} />
		}

		else{
			return <RegisterForm auth={props.auth} />
		}
}


const mapStateToProps = state => ({
	form: state.auth.loginRegisterForm.form,
	auth: state.auth
})

export default connect(mapStateToProps)(LoginRegister)