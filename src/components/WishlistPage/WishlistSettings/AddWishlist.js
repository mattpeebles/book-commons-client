import React from 'react'
import {connect} from 'react-redux'

import {addWishlistForm} from '../../../actions/actions'

export class AddWishlist extends React.Component{
	render(){
		return(
					<div className="col-12 col-md-6 addWishlist">
						<div className="row">
							<div className="col-12">
								New Wishlist
							</div>
							<div className="col-12">
								<form>
									<input type="text" placeholder="Wishlist name" />
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