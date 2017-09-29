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
					<div id='basicFeatures'>
						<div id='basicFeaturesHead'>
						    <a className="collapsed" data-toggle="collapse" href="#basicFeaturesAccord" aria-expanded="false" aria-controls="basicFeaturesAccord">
								<h3 className="accordionTitle" id="basicFeatureTitle">Basic Features</h3>
							</a>
						</div>

						<div id="basicFeaturesAccord" className="collapse" role="tabpanel" aria-labelledby="basicFeatureTitle" data-parent="#basicFeatures">
							<div id="basicFeaturesAccordion" role="tablist">
				 
							  <div className="card">
							    <a className="collapsed" data-toggle="collapse" href="#searchDesc" aria-expanded="false" aria-controls="searchDesc">
								    <div className="card-header" role="tab" id="searchDescHead">
								      <h5 className="mb-0">
								          Search By Title
								      </h5>
								    </div>
							    </a>
							    <div id="searchDesc" className="collapse" role="tabpanel" aria-labelledby="searchDescHead" data-parent="#basicFeaturesAccordion">
							      <div className="card-body">
							      	Search for your favorite book by title on the home page or the navbar. Book Commons will immediately display the results.
							      </div>
							    </div>
							  </div>

							   <div className="card">
								<a className="collapsed" data-toggle="collapse" href="#resultsDesc" aria-expanded="false" aria-controls="resultsDesc">
								    <div className="card-header" role="tab" id="resultDescHead">
								      <h5 className="mb-0">
								        	Results
								      </h5>
								    </div>
								</a>
							    <div id="resultsDesc" className="collapse" role="tabpanel" aria-labelledby="resultDescHead" data-parent="#basicFeaturesAccordion">
							      <div className="card-body">
							      	Results are displayed in two sections - free and paid. All free ebooks are available for download from the hosts website which is found
							      	in the lower right hand corner. If there are no or very few free results, paid ebooks will be displayed below the free results. These are affiliate links which will take you to an Amazon page. Any ebook purchased through that link 
							      	will support Book Commons.

							      	Some ebooks are available for immediate download by clicking one of the formats in the lower left hand corner. This is currently
							      	experimental and may not always return a valid ebook. For best results, always go to the host's website.
							      </div>
							    </div>
							  </div>

							   <div className="card">
								<a className="collapsed" data-toggle="collapse" href="#noResultsDesc" aria-expanded="false" aria-controls="noResultsDesc">
								    <div className="card-header" role="tab" id="noResultDescHead">
								      <h5 className="mb-0">
								        	No Results
								      </h5>
								    </div>
								</a>
							    <div id="noResultsDesc" className="collapse" role="tabpanel" aria-labelledby="noResultDescHead" data-parent="#basicFeaturesAccordion">
							      <div className="card-body">
							      	If you search for books that were recently published, it is unlikely for Book Commons to find a free book to download. In the case, you will 
							      	see another search bar on the results page.

							      	Book Commons will display Amazon links to purchase the book below that search bar.
							      </div>
							    </div>
							  </div>

							  <div className="card">
								<a className="collapsed" data-toggle="collapse" href="#supplementDesc" aria-expanded="false" aria-controls="supplementDesc">
								    <div className="card-header" role="tab" id="supplementDescHeader">
								      <h5 className="mb-0">
								        	Supplemental Information
								      </h5>
								    </div>
								</a>
							    <div id="supplementDesc" className="collapse" role="tabpanel" aria-labelledby="supplementDescHeader" data-parent="#basicFeaturesAccordion">
							      <div className="card-body">
							      	Desktop users can see supplemental information about their search. A short summary of the book and a brief biography of the author is displayed
							      	to the right of the results.
							      </div>
							    </div>
							  </div>{/* end card div */}	
							</div>{/* end accord div */}
						</div>{/*end basic features accordion*/}
					</div> {/* end basic feature div */}

					<div id='userFeatures'>
						<div id='basicFeaturesHead'>
						    <a className="collapsed" data-toggle="collapse" href="#userFeaturesAccord" aria-expanded="false" aria-controls="userFeaturesAccord">
								<h3 className="accordionTitle" id="userFeatureTitle">User Features</h3>
							</a>
						</div>

						<div id="userFeaturesAccord" className="collapse" role="tabpanel" aria-labelledby="userFeatureTitle" data-parent="#userFeatures">
							<div id="userFeaturesAccordion" role="tablist">
				 
							  <div className="card">
								<a className="collapsed" data-toggle="collapse" href="#saveEbookDesc" aria-expanded="false" aria-controls="saveEbookDesc">
								    <div className="card-header" role="tab" id="saveEbookHead">
								      <h5 className="mb-0">
								          Save Ebook to Wishlist
								      </h5>
								    </div>
	    						</a>
							    <div id="saveEbookDesc" className="collapse" role="tabpanel" aria-labelledby="saveEbookHead" data-parent="#userFeatureAccordion">
							      <div className="card-body">
							      	If you are signed in, you may save ebooks to a wishlist by clicking the dropdown menu in the top right corner of the result. 
							      	This dropdown will only appear if you have a wishlist created. If you don't, click Wishlist settings in the navigation bar, to 
							      	create a wishlist.
							      </div>
							    </div>
							  </div>

							   <div className="card">
								<a className="collapsed" data-toggle="collapse" href="#diffWishlistDesc" aria-expanded="false" aria-controls="diffWishlistDesc">
								    <div className="card-header" role="tab" id="diffWishlistHead">
								      <h5 className="mb-0">
								        	Move Ebook to different wishlist
								      </h5>
								    </div>
	    						</a>
							    <div id="diffWishlistDesc" className="collapse" role="tabpanel" aria-labelledby="diffWishlistHead" data-parent="#userFeatureAccordion">
							      <div className="card-body">
							      	On your wishlist page, you may move an ebook to another wishlist by clicking in the top right hand corner of the ebook and selecting the wishlist
							      	you'd like to move it too. This will only appear if you have more than one wishlist. If you'd like to create another wishlist, click on the gear icon
							      	in the upper right hand part of your screen.
							      </div>
							    </div>
							  </div>

							   <div className="card">
								<a className="collapsed" data-toggle="collapse" href="#removeEbookDesc" aria-expanded="false" aria-controls="removeEbookDesc">
								    <div className="card-header" role="tab" id="removeEbookHead">
								      <h5 className="mb-0">
											Remove Ebook
								      </h5>
								    </div>
	    						</a>
							    <div id="removeEbookDesc" className="collapse" role="tabpanel" aria-labelledby="removeEbookHead" data-parent="#userFeatureAccordion">
							      <div className="card-body">
							      	To remove an ebook from a wishlist, click the dropdown menu in the upper right hand corner of the ebook and click delete. 
							      	The ebook is immediately removed. This is <strong>permanent</strong>. If you'd like to add the same ebook to your wishlist, you must
							      	search for it again.
							      </div>
							    </div>
							  </div>

							   <div className="card">
								<a className="collapsed" data-toggle="collapse" href="#wishlistSettingsDesc" aria-expanded="false" aria-controls="wishlistSettingsDesc">
								    <div className="card-header" role="tab" id="wishlistSettingsHead">
								      <h5 className="mb-0">
								        	Wishlist Settings
								      </h5>
								    </div>
	    						</a>
							    <div id="wishlistSettingsDesc" className="collapse" role="tabpanel" aria-labelledby="wishlistSettingsHead" data-parent="#userFeatureAccordion">
							      <div className="card-body">
							      	You can access wishlist settings in two different ways. From the wishlist drop down in the navbar and by clicking the gear in the upper right hand corner
							      	of any wishlist page.
							      </div>
							    </div>
							  </div>

							   <div className="card">
								<a className="collapsed" data-toggle="collapse" href="#addWishlistDesc" aria-expanded="false" aria-controls="addWishlistDesc">
								    <div className="card-header" role="tab" id="addWishlistHead">
								      <h5 className="mb-0">
								        	Edit Wishlist Title
								      </h5>
								    </div>
	    						</a>
							    <div id="addWishlistDesc" className="collapse" role="tabpanel" aria-labelledby="addWishlistHead" data-parent="#userFeatureAccordion">
							      <div className="card-body">
							      	To edit a wishlist title, navigate to wishlist settings by clicking the gear in the upper right hand corner of your wishlist. Click the edit
							      	button next to the wishlist title you wish to edit, enter whatever title you'd like and submit it. Your wishlist title has now been changed.
							      </div>
							    </div>
							  </div>
							 
							  <div className="card">
								<a className="collapsed" data-toggle="collapse" href="#removeWishlistDesc" aria-expanded="false" aria-controls="removeWishlistDesc">
								    <div className="card-header" role="tab" id="removeWishlistHead">
								      <h5 className="mb-0">
								        	Delete Wishlist
								      </h5>
								    </div>
	    						</a>
							    <div id="removeWishlistDesc" className="collapse" role="tabpanel" aria-labelledby="removeWishlistHead" data-parent="#userFeatureAccordion">
							      <div className="card-body">
							      	Navigate to the wishlist settings page by clicking either the wishlist settings link in your navbar or by clicking the gear in the upper right hand
							      	corner of any wishlist page. Click the delete button next to the wishlist you'd like to delete.
							      </div>
							    </div>
							  </div>{/* end card div */}		
							</div>{/* end accord div */}
						</div>
					</div> {/* end basic feature div */}
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