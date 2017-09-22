import React from 'react'
import {connect} from 'react-redux'

import EmailForm from './EmailForm'
import PasswordForm from './PasswordForm'

export class ChangeUserSettings extends React.Component{

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