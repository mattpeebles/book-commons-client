import React from 'react'
import {connect} from 'react-redux'

import Dropdown from '../Inputs/Dropdown'
export class BookInfo extends React.Component{

	render(){
		
		let dropdown = (this.props.loggedIn) ? <Dropdown ebook={this.props.ebook} type={this.props.dropdownType} dropdownLinks={this.props.dropdownLinks}/> : undefined

		return (
			<div className="row">
				<div className="title col text-truncate">
					{this.props.title}
				</div>
				{dropdown}
				<div className="bookAuthor text-truncate col-12">
					{this.props.author}
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	auth: state.auth,
	loggedIn: state.auth.loggedIn,
})

export default connect(mapStateToProps)(BookInfo)