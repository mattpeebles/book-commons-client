import React from 'react'

export default function Register(props){
	return(
		<form>
		  <label>Register</label>
		  <div className="form-group">
		    <label for="registerEmail">Email</label>
		    <input type="email" className="form-control" id="registerEmail" aria-describedby="emailHelp" placeholder="Enter email" />
		  </div>
		  <div className="form-group">
		    <label for="registerPassword">Password</label>
		    <input type="password" className="form-control" id="registerPassword" placeholder="Password" />
		  </div>
		  <div className="form-group">
		    <label for="confirmPassword">Password</label>
		    <input type="password" className="form-control" id="confirmPassword" placeholder="Password" />
		  </div>
		  <button type="submit" className="btn btn-primary">Submit</button>
		</form>
	)
}