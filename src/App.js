import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import {connect} from 'react-redux'


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

		if(this.props.clicked === true){
			loginRegisterForm = <LoginRegister />
		}

		return(
			<Router>
				<div>
					<NavBar />
					{loginRegisterForm}
					<main>
						<Route exact path='/' component={LandingPage} />
						<Route exact path='/results' component={Results} />
						<Route exact path='/wishlist' component={Wishlist} />
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
	clicked: state.loginRegisterForm.clicked
})


export default connect(mapStateToProps)(App)
