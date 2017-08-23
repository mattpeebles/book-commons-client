import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom' 

import LandingPage from './components/LandingPage'
import NavBar from './components/Navbar/NavBar'

export default class App extends React.Component{

	render(){
		return(
			<Router>
				<div>
					<NavBar />
					<main>
						<Route exact path='/' component={LandingPage} />
					</main>
				</div>
			</Router>
		)
	}
}