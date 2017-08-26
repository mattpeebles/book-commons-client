import React from 'react'

import WishlistLinks from './WishlistLinks'

export default function WishlistsContainer(props){
	let links = ["Biographies", "French Literature", "SciFi", "Russian Literature"]
	return(
		<div id="wishlists-container" className="col-md-4">
				<div id="wishlists-row">
					<div id="wishlists">
						<div id="wishlistTitle" className="col-md-12">
							<h3>Wishlists</h3>
						</div>
						<div id="lists-container" className="col-md-12">
							<div id="wishlistsList">
								<ol>
									<WishlistLinks changeWishlist={props.changeWishlist} links={links}/>
								</ol>
							</div>
						</div>
					</div>	
				</div>
			</div>
	)
}