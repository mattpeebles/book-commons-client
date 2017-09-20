import React from 'react'
import {connect} from 'react-redux'

import {addWishlistForm, addNewWishlist} from '../../../actions/wishlist'

export class AddWishlist extends React.Component{
     
     submitWishlist(e) {
        e.preventDefault()
        let title = this.input.value

        this.props.dispatch(addNewWishlist(title))
      	this.props.dispatch(addWishlistForm(false))
    }

	render(){
		return(
					<div className="col-12 col-md-6 addWishlist">
						<div className="row">
							<div className="col-12">
								New Wishlist
							</div>
							<div className="col-12">
								<form onSubmit={e => this.submitWishlist(e)}>
									<input type="text" name="newWishlist" placeholder="Wishlist name" ref={input => this.input = input}  />
									<input type="submit" />
									<button onClick={() => this.props.dispatch(addWishlistForm(false))}>Cancel</button>
								</form>
							</div>
						</div>
					</div>
		)
	}
}

export default connect()(AddWishlist)