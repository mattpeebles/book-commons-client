// subcomponent of App
import React from 'react'

import './Footer.css'

export default function Footer(props){
	return(
    	<footer id="footer" className="navbar fixed-bottom navbar-light bg-light">
       		<a href="https://github.com/mattpeebles"><img src="/resources/icons/github.svg" width="30" height="30" className="d-inline-block align-top" alt="github" /></a>
    	</footer>
	)
}