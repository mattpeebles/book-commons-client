import React from 'react'


export default class NavPills extends React.Component{
	

	handleClick(e){
		this.props.toggleSupplement(e.target.id)
	}

	render(){		
		
		if(this.props.supplement === 'author'){
			return (
				<div className="col-md-12">
					<ul className="nav nav-pills">
					  <li className="nav-item">
					    <button className="nav-link active" id="author" onClick={this.handleClick.bind(this)}>Author</button>
					  </li>
					  <li className="nav-item">
					    <button className="nav-link" id="book" onClick={this.handleClick.bind(this)}>Book</button>
					  </li>
					</ul>
				</div>
			)
		}
		else{
			return (
				<div className="col-md-12">
					<ul className="nav nav-pills">
					  <li className="nav-item">
					    <button className="nav-link" id="author" onClick={this.handleClick.bind(this)}>Author</button>
					  </li>
					  <li className="nav-item">
					    <button className="nav-link active" id="book" onClick={this.handleClick.bind(this)}>Book</button>
					  </li>
					</ul>
				</div>
			)
		}
	}
}