import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {connect} from 'react-redux'

import {
	fetchWishlists
} from './actions/wishlistActions'

import {refreshAuthToken} from './actions/auth';


import LandingPage from './components/LandingPage'
import Results from './components/ResultsPage/Results'
import Wishlist from './components/WishlistPage/Wishlist'
import WLSettings from './components/WishlistPage/WishlistSettings/WLSettings'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import LoginRegister from './components/LoginRegister/LoginRegister'


export class App extends React.Component{

	componentDidMount() {
        if (this.props.hasAuthToken) {
            // Try to get a fresh auth token if we had an existing one in
            // localStorage
            this.props.dispatch(refreshAuthToken());
		}
    }

  componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
	}

	render(){
		
		let loginRegisterForm;
				
		if(this.props.display === true){
			loginRegisterForm = <LoginRegister />
		}

		if(this.props.loggedIn === true && this.props.firstFetch === false){
            this.props.dispatch(fetchWishlists());
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
	state: state,
	firstFetch: state.wishlist.firstFetch,
	wishlists: state.wishlist.wishlists,
	token: state.auth.authToken,
	user: state.auth.currentUser,
	display: state.auth.loginRegisterForm.display,
	loggedIn: state.auth.loggedIn,
	authToken: state.auth.authToken,
	hasAuthToken: state.auth.authToken !== null
})


export default connect(mapStateToProps)(App)
