import React from 'react'

export default function AuthorSupplement(props){

	return (
		<div id="author" className="col-md-12 supplementType">
			<div id="infoContainer" className="col-md-12">
				<div id="authorName" className=" supplementName col-md-12">
					<h3>{props.name}</h3>
				</div>
				<div id="authorDates" className="supplementDates col-md-12">
					<h4>{props.dates}</h4>
				</div>
			</div>
			<div id="photoContainer" className="supplementImageContainer col-md-12">
				<img id="photo" alt="authorPhoto" className="supplementImage" src={props.image} />
			</div>
			<div id="summaryContainer" className="col-md-12">
				<div id="summary">
					{props.summary}
				</div>
			</div>
			<a id="read-more" href={props.location}><p>Read more</p></a>
		</div>
	)
}