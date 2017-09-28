// subcomponent of App

import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import Header from '../Header/Header'


import './LandingPage.css'

export class LandingPage extends React.Component{
	
	componentWillReceiveProps(nextProps){
		if(nextProps.loggedIn){
			this.props.dispatch(push('/search'))
		}
	}

	render(){
		return(
			<div id="landingPageContainer">
				<div id="landingHeaderContainer">
					<Header headerId='landingHeader' subtitleId="landingSubtitle" title='Book Commons' subtitle='Search through the public domain'/>
				</div>

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

				<div id='userFeatures'>
					<div id='baseicFeaturesHead'>
						<h3 className="accordionTitle">User Features</h3>
					</div>

					<div id="userFeaturesAccordion" role="tablist">
		 
					  <div className="card">
					    <div className="card-header" role="tab" id="saveEbookHead">
					      <h5 className="mb-0">
					        <a className="collapsed" data-toggle="collapse" href="#saveEbookDesc" aria-expanded="false" aria-controls="saveEbookDesc">
					          Save Ebook to Wishlist
					        </a>
					      </h5>
					    </div>
					    <div id="saveEbookDesc" className="collapse" role="tabpanel" aria-labelledby="saveEbookHead" data-parent="#userFeatureAccordion">
					      <div className="card-body">
					        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					      </div>
					    </div>
					  </div>

					   <div className="card">
					    <div className="card-header" role="tab" id="diffWishlistHead">
					      <h5 className="mb-0">
					        <a className="collapsed" data-toggle="collapse" href="#diffWishlistDesc" aria-expanded="false" aria-controls="diffWishlistDesc">
					        	Move Ebook to different wishlist
					        </a>
					      </h5>
					    </div>
					    <div id="diffWishlistDesc" className="collapse" role="tabpanel" aria-labelledby="diffWishlistHead" data-parent="#userFeatureAccordion">
					      <div className="card-body">
					        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					      </div>
					    </div>
					  </div>

					   <div className="card">
					    <div className="card-header" role="tab" id="removeEbookHead">
					      <h5 className="mb-0">
					        <a className="collapsed" data-toggle="collapse" href="#removeEbookDesc" aria-expanded="false" aria-controls="removeEbookDesc">
								Remove Ebook
					        </a>
					      </h5>
					    </div>
					    <div id="removeEbookDesc" className="collapse" role="tabpanel" aria-labelledby="removeEbookHead" data-parent="#userFeatureAccordion">
					      <div className="card-body">
					        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					      </div>
					    </div>
					  </div>

					   <div className="card">
					    <div className="card-header" role="tab" id="addWishlistHead">
					      <h5 className="mb-0">
					        <a className="collapsed" data-toggle="collapse" href="#addWishlistDesc" aria-expanded="false" aria-controls="addWishlistDesc">
					        	Edit Wishlist Title
					        </a>
					      </h5>
					    </div>
					    <div id="addWishlistDesc" className="collapse" role="tabpanel" aria-labelledby="addWishlistHead" data-parent="#userFeatureAccordion">
					      <div className="card-body">
					        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					      </div>
					    </div>
					  </div>

					   <div className="card">
					    <div className="card-header" role="tab" id="editWishlistHead">
					      <h5 className="mb-0">
					        <a className="collapsed" data-toggle="collapse" href="#editWishlistDesc" aria-expanded="false" aria-controls="editWishlistDesc">
					        	Edit Wishlist Title
					        </a>
					      </h5>
					    </div>
					    <div id="editWishlistDesc" className="collapse" role="tabpanel" aria-labelledby="editWishlistHead" data-parent="#userFeatureAccordion">
					      <div className="card-body">
					        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					      </div>
					    </div>
					  </div>
					 

					  <div className="card">
					    <div className="card-header" role="tab" id="removeWishlistHead">
					      <h5 className="mb-0">
					        <a className="collapsed" data-toggle="collapse" href="#removeWishlistDesc" aria-expanded="false" aria-controls="removeWishlistDesc">
					        	Remove Wishlist
					        </a>
					      </h5>
					    </div>
					    <div id="removeWishlistDesc" className="collapse" role="tabpanel" aria-labelledby="removeWishlistHead" data-parent="#userFeatureAccordion">
					      <div className="card-body">
					        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
					      </div>
					    </div>
					  </div>{/* end card div */}		

					</div>{/* end accord div */}
				</div> {/* end basic feature div */}

				<div id='landingButtonContainer'>
					<Link to="/search"><button className="btn btn-lg">Got It</button></Link>
				</div>
			</div>
		)
	}
}

export const mapStateToProps = state => ({
	loggedIn: state.auth.loggedIn
})

export default connect(mapStateToProps)(LandingPage)