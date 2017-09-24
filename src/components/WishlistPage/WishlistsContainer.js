import React from 'react'

import WishlistLinks from './WishlistLinks'

import './WishlistsContainer.css'

export default function WishlistsContainer(props){
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
									<WishlistLinks links={props.links}/>
								</ol>
							</div>
						</div>
					</div>	
				</div>
			</div>
	)
}