import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom' 

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