import React from 'react'
import {connect} from 'react-redux'

import {toggleSupplement} from '../../../actions/results'

export class  AuthorSupplement extends React.Component{

	handleClick(e){
		this.props.dispatch(toggleSupplement('book'))
	}

	render(){
		return (
			
			<div className="card text-center">
			  <div className="card-header">
			    <ul className="nav nav-tabs card-header-tabs">
			      <li className="nav-item">
			        <button className="nav-link active">Author</button>
			      </li>
			      <li className="nav-item">
			        <button className="nav-link" onClick={() => this.handleClick()}>Book</button>
			      </li>
			    </ul>
			  </div>
			  <h4 className="card-header cardTitle">{this.props.name}</h4>
			  <div className="centered">
			 	 <img className="card-img-top supplementPhoto" src={this.props.image} alt="author" />
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

export default connect()(AuthorSupplement)