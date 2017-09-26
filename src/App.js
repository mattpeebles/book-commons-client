// subcomponet of index

import React from 'react'
import {Route} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {history} from './store'

import {connect} from 'react-redux'
import {fetchWishlists} from './actions/wishlist'
import {refreshAuthToken} from './actions/auth';


import LandingPage from './components/LandingPage'
import Results from './components/ResultsPage/Results'
import Wishlist from './components/WishlistPage/Wishlist'
import WLSettings from './components/WishlistPage/WishlistSettings/WLSettings'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import LoginRegister from './components/LoginRegister/LoginRegister'
import ChangeUserSettings from './components/UserSettings/ChangeUserSettingsPage'
import About from './components/About/About'

let count = 0;

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

		if(this.props.loggedIn === true && this.props.firstFetch === false && count === 0){
            count++
            this.props.dispatch(fetchWishlists());
		}

		let about;
		if(this.props.showAbout === true){
			about = <About />
		}

		return(
			<ConnectedRouter history={history}>
				<div>
					<NavBar />
					{loginRegisterForm}
					{about}
					<main>
						<Route exact path='/' component={LandingPage} />
						<Route exact path='/results' component={Results} />
						
						<Route exact path='/settings/wishlist' component={WLSettings} />						
						<Route path='/wishlist/:id' component={Wishlist} />
						<Route path='/settings/user/change/:setting' component={ChangeUserSettings} />

					</main>
					<Footer />
				</div>
			</ConnectedRouter>
		)
	}
}


const mapStateToProps = state => ({
	router: state.router,
	auth: state.auth,
	firstFetch: state.wishlist.firstFetch,
	wishlist: state.wishlist,
	wishlists: state.wishlist.wishlists,
	token: state.auth.authToken,
	showAbout: state.results.showAbout,
	user: state.auth.currentUser,
	display: state.auth.loginRegisterForm.display,
	loggedIn: state.auth.loggedIn,
	authToken: state.auth.authToken,
	hasAuthToken: state.auth.authToken !== null
})


export default connect(mapStateToProps)(App)
