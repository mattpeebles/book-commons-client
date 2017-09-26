// subcomponent of App

import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import EmailForm from './EmailForm'
import PasswordForm from './PasswordForm'

import './ChangeUserSettings.css'

export class ChangeUserSettings extends React.Component{

	componentDidMount(){
		if(this.props.auth.currentUser === null){
			this.props.dispatch(push('/'))
		}
	}

	componentWillReceiveProps(nextProps){
		console.log(nextProps)
		if(nextProps.auth.currentUser === null){
			this.props.dispatch(push('/'))
		}
	}

	render(){
		let locationArray = this.props.router.location.pathname.split('/')
		let location = locationArray[locationArray.length - 1]

		if(location === 'email'){
			return 	<EmailForm auth={this.props.auth}/>
		}

		else{
			return <PasswordForm auth={this.props.auth}/>
		}
	}
}


const mapStateToProps = state => ({
	router: state.router,
	auth: state.auth
})

export default connect(mapStateToProps)(ChangeUserSettings)