import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom' 

import LandingPage from './components/LandingPage'
import Results from './components/ResultsPage/Results'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'

export default class App extends React.Component{

	render(){
		return(
			<Router>
				<div>
					<NavBar />
					<main>
						<Route exact path='/' component={LandingPage} />
						<Route exact path='/results' component={Results} />
					</main>
					<Footer />
				</div>
			</Router>
		)
	}
}