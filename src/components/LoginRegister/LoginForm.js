import React from 'react'

export default function Login(props){
	return(
		<form>
		  <label>Login</label>
		  <div className="form-group">
		    <label for="loginEmail">Email</label>
		    <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
		  </div>
		  <div className="form-group">
		    <label for="loginPassword">Password</label>
		    <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
		  </div>
		  <button type="submit" className="btn btn-primary">Submit</button>
		</form>
	)
}