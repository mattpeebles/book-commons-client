import React from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom' 

import LandingPage from './components/LandingPage'


export default class App extends React.Component{

	render(){
		return(
			<Router>
				<div>
					<main>
						<Route exact path='/' component={LandingPage} />
					</main>
				</div>
			</Router>
		)
	}
}