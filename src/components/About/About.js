import React from 'react'
import {connect} from 'react-redux'

import './About.css'

export class About extends React.Component{
	render(){

		return(
			<div className="about">
				<h3>Instructions</h3>
				<p>Lorem Ipsum</p>
				<hr />
				<h3>Credits</h3>
				<p>Background Image <a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer"> Designed by D3Images / Freepik</a></p>
			</div>
		)	
	}
}


export default connect()(About)