import React from 'react'
import {connect} from 'react-redux'

import {toggleAbout} from '../../actions/results'


import './About.css'

export class About extends React.Component{
	render(){

		return(
			<div className="about">
				<div className="closeAbout">
				</div>
				<h3>About</h3>
					<p>Book Commons is your one stop shop for all public domain ebooks. We try our best to return ebooks in three formats - pdf, mobi, and epub.</p>
					<p>We pull of the ebooks from Project Gutenberg, Google Books, and Open Library. You won't find any better resources.</p>

					<p>The directions couldn't be easier:</p>
						<ol>
							<li>Search for your book by <strong>title</strong></li>
							<li>If there's a free ebook, we'll find it. If there isn't, we'll provide suggestions on where to purchase on</li>
							<li>If you have an account:</li>
								<ul>
									<li>Save as many ebooks to as many wishlists as you'd like</li>
									<li>Move ebooks between wishlists, change your wishlists title</li>
									<li>And of course, remove ebooks and wishlists</li>
								</ul>
							<li>Try a demo account</li>
						</ol>
				<hr />
				<h3>Credits</h3>
				<p>Background Image <a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer"> Designed by D3Images / Freepik</a></p>
				
				<div id="aboutButtonContainer">
					<button className="btn" onClick={() => this.props.dispatch(toggleAbout())}>Got It</button>
				</div>
			</div>
		)	
	}
}


export default connect()(About)