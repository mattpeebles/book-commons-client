import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {connect} from 'react-redux'

import {
	showLoginRegister
} from './actions/userActions'

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

	
	componentWillReceiveProps(){
		if(this.props.currentUser !== null){
			this.props.dispatch(showLoginRegister(false))
		}
	}

	render(){
		
		let loginRegisterForm;

		console.log(this.props.auth)
		
		if(this.props.display === true){
			loginRegisterForm = <LoginRegister />
		}

		// if(this.props.user !== undefined){
	 // 		setTimeout(() => this.props.dispatch(fetchWishlists()), 5000)
		// }



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
	auth: state.auth,
	currentUser: state.auth.currentUser,
	display: state.user.loginRegisterForm.display
})


export default connect(mapStateToProps)(App)
