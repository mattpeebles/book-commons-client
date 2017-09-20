import React from 'react'
import {connect} from 'react-redux'

import EmailForm from './EmailForm'
import PasswordForm from './PasswordForm'

export class ChangeUserSettings extends React.Component{

	render(){
		let locationArray = this.props.router.location.pathname.split('/')
		let location = locationArray[locationArray.length - 1]

		if(location === 'email'){
			return 	<EmailForm />
		}

		else{
			return <PasswordForm />
		}
	}
}


const mapStateToProps = state => ({
	router: state.router
})

export default connect(mapStateToProps)(ChangeUserSettings)