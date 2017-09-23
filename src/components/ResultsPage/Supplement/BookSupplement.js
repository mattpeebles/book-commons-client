import React from 'react'
import {connect} from 'react-redux'

import {toggleSupplement} from '../../../actions/results'

export class BookSupplement extends React.Component{

	handleClick(e){
		this.props.dispatch(toggleSupplement('author'))
	}

	render() {
		return (
			
				<div className="card text-center">
				  <div className="card-header">
				    <ul className="nav nav-tabs card-header-tabs">
				      <li className="nav-item">
				        <button className="nav-link" href="#" onClick={() => this.handleClick()}>Author</button>
				      </li>
				      <li className="nav-item">
				        <button className="nav-link active" href="#">Book</button>
				      </li>
				    </ul>
				  </div>
				  <h4 className="card-header cardTitle">{this.props.title}</h4>
				  <div className="centered">
				  	<img className="card-img-top supplementPhoto" src={this.props.cover} alt="author" />
				  </div>
				  <div className="card-body">
				    <h4 className="card-title">{this.props.dates}</h4>
				    <p className="card-text">{this.props.summary}</p>
				    <a href={this.props.location} target="_blank" className="btn btn-primary">Read More</a>
				  </div>
				</div>
		)
	}
}


export default connect()(BookSupplement)