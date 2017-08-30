import React from 'react'
import {connect} from 'react-redux'

import Header from '../../Header/Header'
import AddWishlist from './AddWishlist'

import {addWishlistForm} from '../../../actions/actions'

import './WLSettings.css'


export class WLSettings extends React.Component{
	//let links = ["Biographies", "French Literature", "SciFi", "Russian Literature"]

	render(){
			let formatLinks = Object.keys(this.props.wishlists).map((link, index) => {
				return (
							<div key={index} className="col-12 col-md-6 settingsContainer">
								<div className="row">
									<div className="col">
										<div className="col">
											{link}
										</div>
										<div className="col">
											{this.props.wishlists[link].length} items
										</div>
									</div>
									<div className="col-auto row">
										<div className="col">
											<button className="btn btn-default btn-sm">Edit</button>
										</div>
										<div className="col-auto">
											<button className="btn btn-default btn-sm">Delete</button>
										</div>
									</div>

								</div>
							</div>
						)
		})

		let newWishlist;

		if(this.props.addWishlist === true){
			newWishlist = <AddWishlist />
		}

		return (
			<div className="container" >
				<Header headerId="header" subtitleId="subtitle" title="Settings" subtitle="Wishlists"/>
				<div className="row">
					<div className="addContainer col-12">
						<button className="btn btn-default addWLButton" onClick={() => this.props.dispatch(addWishlistForm(true))}>Add A Wishlist</button>
					</div>
					{newWishlist}
					{formatLinks}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	wishlists: state.wishlists,
	addWishlist: state.addWishlist
})

export default connect(mapStateToProps)(WLSettings)
