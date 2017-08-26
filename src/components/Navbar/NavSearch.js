import React from 'react'


export default function NavSearch(props){
	return (
	  <form className="form-inline">
	    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
	    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
	  </form>
	)
}