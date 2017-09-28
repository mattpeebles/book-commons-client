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
						
				<div id='basicFeatures'>
					<div id='basicFeaturesHead'>
						<h3 className="accordionTitle">Basic Features</h3>
					</div>

					<div id="basicFeaturesAccordion" role="tablist">
		 
					  <div className="card">
					    <div className="card-header" role="tab" id="searchDescHead">
					      <h5 className="mb-0">
					        <a className="collapsed" data-toggle="collapse" href="#searchDesc" aria-expanded="false" aria-controls="searchDesc">
					          Search By Title
					        </a>
					      </h5>
					    </div>
					    <div id="searchDesc" className="collapse" role="tabpanel" aria-labelledby="searchDescHead" data-parent="#basicFeaturesAccordion">
					      <div className="card-body">
					        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					      </div>
					    </div>
					  </div>

					   <div className="card">
					    <div className="card-header" role="tab" id="resultDescHead">
					      <h5 className="mb-0">
					        <a className="collapsed" data-toggle="collapse" href="#resultsDesc" aria-expanded="false" aria-controls="resultsDesc">
					        	Results
					        </a>
					      </h5>
					    </div>
					    <div id="resultsDesc" className="collapse" role="tabpanel" aria-labelledby="resultDescHead" data-parent="#basicFeaturesAccordion">
					      <div className="card-body">
					        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					      </div>
					    </div>
					  </div>

					   <div className="card">
					    <div className="card-header" role="tab" id="downloadHead">
					      <h5 className="mb-0">
					        <a className="collapsed" data-toggle="collapse" href="#downloadDesc" aria-expanded="false" aria-controls="downloadDesc">
					        	Download Ebook
					        </a>
					      </h5>
					    </div>
					    <div id="downloadDesc" className="collapse" role="tabpanel" aria-labelledby="downloadHead" data-parent="#basicFeaturesAccordion">
					      <div className="card-body">
					        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					      </div>
					    </div>
					  </div>
					 

					  <div className="card">
					    <div className="card-header" role="tab" id="supplementDescHeader">
					      <h5 className="mb-0">
					        <a className="collapsed" data-toggle="collapse" href="#supplementDesc" aria-expanded="false" aria-controls="supplementDesc">
					        	Supplemental Information
					        </a>
					      </h5>
					    </div>
					    <div id="supplementDesc" className="collapse" role="tabpanel" aria-labelledby="supplementDescHeader" data-parent="#basicFeaturesAccordion">
					      <div className="card-body">
					        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					      </div>
					    </div>
					  </div>{/* end card div */}	
					</div>{/* end accord div */}
				</div> {/* end basic feature div */}

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
							<button className="btn" id="aboutDemo" onClick={() => this.demo()}>Try a Demo Account</button>
						</div>
				</div>
				<hr />
				<div id="aboutCredits">			
					<h3>Credits</h3>
					<p>We pull all of the ebooks from <a href="http://www.gutenberg.org/">Project Gutenberg</a>, <a href="https://books.google.com/">Google Books</a>, and <a href="https://openlibrary.org/">Open Library</a>. You won't find any better resources.</p>
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