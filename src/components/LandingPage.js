import React from 'react'

import Search from './Search/Search'
import NavBar from './Navbar/NavBar'
import Footer from './Footer/Footer'



export default function LandingPage(props){
	return(
		<div>
			<NavBar />
			<Search />
			<Footer />
		</div>
	)
}