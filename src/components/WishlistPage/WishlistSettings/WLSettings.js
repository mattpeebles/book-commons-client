import React from 'react'

import Header from '../../Header/Header'


export default function WLSettings(props){
	let links = ["Biographies", "French Literature", "SciFi", "Russian Literature"]
	
	let formatLinks = links.map((link, index) => {
		return (
					<div key={index} className="col-12 col-md-6">
						<div className="row">
							<div className="col-10">
								{link}
							</div>
							<div className="col-2">
								<button className="btn btn-default"><img alt='cog-icon' src="https://useiconic.com/open-iconic/svg/cog.svg" /></button>
							</div>
							<div className="col-12">
								12 items
							</div>
						</div>
					</div>
				)
	})

	return (
		<div className="container" >
			<Header headerId="header" subtitleId="subtitle" title="Settings" subtitle="Wishlists"/>
			<button className="btn btn-default">Add A Wishlist</button>
			<div className="row">
				{formatLinks}
			</div>
		</div>
	)
}