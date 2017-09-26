// subcomponent of WLSettings

import React from 'react'
import {connect} from 'react-redux'

import {addWishlistForm, addNewWishlist} from '../../../actions/wishlist'

export class AddWishlist extends React.Component{
     
     submitWishlist(e) {
        e.preventDefault()
        let title = this.input.value
        let sTitle = title.toString()
        this.props.dispatch(addNewWishlist(sTitle))
      	this.props.dispatch(addWishlistForm(false))
    }

	render(){
		return(
					<div className="col-12">
						<div className="addWishlist">
							<div className="row">
								<div className="col-12 addWishlistTitle">
									<h4>New Wishlist</h4>
								</div>
								<div className="col-12">
									<form onSubmit={e => this.submitWishlist(e)}>
										<input type="text" name="newWishlist" id="newWishlistInput" placeholder="Wishlist name" ref={input => this.input = input}  required/>
										<input type="submit" className="btn btn-sm" />
										<button className="btn btn-sm" onClick={() => this.props.dispatch(addWishlistForm(false))}>Cancel</button>
									</form>
								</div>
							</div>
						</div>
					</div>
		)
	}
}

export default connect()(AddWishlist)