import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {connect} from 'react-redux'

import {
	fetchWishlists
} from './actions/wishlistActions'


import LandingPage from './components/LandingPage'
import Results from './components/ResultsPage/Results'
import Wishlist from './components/WishlistPage/Wishlist'
import WLSettings from './components/WishlistPage/WishlistSettings/WLSettings'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import LoginRegister from './components/LoginRegister/LoginRegister'


export class App extends React.Component{

	render(){
		
		let loginRegisterForm;
				
		if(this.props.display === true){
			loginRegisterForm = <LoginRegister />
		}

		if(this.props.user !== null && this.props.wishlists === null){
	 		this.props.dispatch(fetchWishlists())
		}

		return(
			<Router>
				<div>
					<NavBar />
					{loginRegisterForm}
					<main>
						<Route exact path='/' component={LandingPage} />
						<Route exact path='/results' component={Results} />
						
						<Route exact path='/settings/wishlist' component={WLSettings} />						
						<Route path='/wishlist/:id' component={Wishlist} />
					</main>
					<Footer />
				</div>
			</Router>
		)
	}
}


const mapStateToProps = state => ({
	wishlists: state.wishlist.wishlists,
	token: state.auth.authToken,
	user: state.auth.currentUser,
	display: state.auth.loginRegisterForm.display
})


export default connect(mapStateToProps)(App)
