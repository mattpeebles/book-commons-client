import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom' 

import LandingPage from './components/LandingPage'
import Results from './components/ResultsPage/Results'
import Wishlist from './components/WishlistPage/Wishlist'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'

export default class App extends React.Component{

	render(){
		let links = ['register', 'login', 'wishlist']
		return(
			<Router>
				<div>
					<NavBar links={links}/>
					<main>
						<Route exact path='/' component={LandingPage} />
						<Route exact path='/results' component={Results} />
						<Route exact path='/wishlist' component={Wishlist} />
						<Route path='/wishlist/:params' component={Wishlist} />
					</main>
					<Footer />
				</div>
			</Router>
		)
	}
}