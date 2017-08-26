import React from 'react'

export default function BookSupplement(props){

	return (
		<div id="book" className="supplementType col-md-12">
			<div id="infoContainer" className="col-md-12">
				<div id="bookTitle" className="supplementName col-md-12">
					<h3>{props.title}</h3>
				</div>
				<div id="published" className="supplementDates col-md-12">
					<h4>{props.published}</h4>
				</div>
			</div>
			<div id="coverContainer" className="supplementImageContainer col-md-12">
				<img id="cover" alt="bookCover" className="supplementImage" src={props.cover} />
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