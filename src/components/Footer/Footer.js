import React from 'react'

import './Footer.css'

export default function Footer(props){
	return(
    	<footer id="footer" className="navbar fixed-bottom navbar-light bg-light">
       		<a href="https://github.com/mattpeebles"><img src="/resources/icons/github.svg" width="30" height="30" className="d-inline-block align-top" alt="github" /></a>
    		<a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">Background Designed by D3Images / Freepik</a>
    	</footer>
	)
}