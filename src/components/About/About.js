// subcomponent of App

import React from 'react'
import {connect} from 'react-redux'
import faker from 'faker'

import {toggleAbout} from '../../actions/results'
import {demoUser, login} from '../../actions/auth'
import {addNewWishlist} from '../../actions/wishlist'

import './About.css'

export class About extends React.Component{
	
	demo(){
		let email = faker.internet.email()
    	let password = faker.internet.password()

    	let user = {
    		email,
    		password
    	}

    	return this.props.dispatch(demoUser(user))
    		.then(() => this.props.dispatch(login(email, password)))
        	.then(() => this.props.dispatch(addNewWishlist('Favorite')))
        	.then(() => this.props.dispatch(toggleAbout()))

	}

	render(){

		return(
			<div className="about">
				<div id="aboutAbout">
					<h3>About</h3>
						<p>Book Commons is your one stop shop for all public domain ebooks. We try our best to return ebooks in three formats - pdf, mobi, and epub.</p>
						<p>The directions couldn't be easier:</p>
						<ol>
							<li>Search for your book by <strong>title</strong></li>
							<li>If there's a free ebook, we'll find it. If there isn't, we'll provide suggestions on where to purchase it</li>
							<li>If you have an account:</li>
								<ul>
									<li>Save as many ebooks to as many wishlists as you'd like</li>
									<li>Move ebooks between wishlists, change your wishlists title</li>
									<li>And of course, remove ebooks and wishlists</li>
								</ul>
						</ol>
						<div id="aboutButtonContainer">
							<button className="btn" id="aboutDemo" onClick={() => this.demo()}>Try a Demo</button>
						</div>
				</div>
				<hr />
				<div id="aboutCredits">			
					<h3>Credits</h3>
					<p>We pull of the ebooks from <a href="http://www.gutenberg.org/">Project Gutenberg</a>, <a href="https://books.google.com/">Google Books</a>, and <a href="https://openlibrary.org/">Open Library</a>. You won't find any better resources.</p>
					<p>Background Image <a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer"> Designed by D3Images / Freepik</a></p>
					
					<div id="aboutButtonContainer">
						<button className="btn" id="aboutClose" onClick={() => this.props.dispatch(toggleAbout())}>Got It</button>
					</div>
				</div>
			</div>
		)	
	}
}


export default connect()(About)