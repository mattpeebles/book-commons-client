import React from 'react'
import {connect} from 'react-redux'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

import './LoginRegister.css'

export function LoginRegister(props){

		if(props.form === 'login'){
			return 	<LoginForm />
		}

		else{
			return <RegisterForm />
		}
}


const mapStateToProps = state => ({
	form: state.auth.loginRegisterForm.form
})

export default connect(mapStateToProps)(LoginRegister)