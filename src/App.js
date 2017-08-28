import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom' 

import LandingPage from './components/LandingPage'
import Results from './components/ResultsPage/Results'
import Wishlist from './components/WishlistPage/Wishlist'
import WLSettings from './components/WishlistPage/WishlistSettings/WLSettings'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import LoginRegister from './components/LoginRegister/LoginRegister'


export default class App extends React.Component{

	render(){
		let links = ['Register', 'Login', 'Wishlists']
		return(
			<Router>
				<div>
					<NavBar links={links}/>
					<main>
						<Route exact path='/' component={LandingPage} />
						<Route exact path='/results' component={Results} />
						<Route exact path='/wishlist' component={Wishlist} />
						<Route exact path='/settings/wishlist' component={WLSettings} />						
						<Route path='/wishlist/:id' component={Wishlist} />
						<Route exact path='/login' component={LoginRegister} />
						<Route exact path='/register' component={LoginRegister} />					
					</main>
					<Footer />
				</div>
			</Router>
		)
	}
}