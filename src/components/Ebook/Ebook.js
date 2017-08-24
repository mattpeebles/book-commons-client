import React from 'react'

import BookDetails from './BookDetails'
import BookInfo from './BookInfo'
import FormatLocation from './FormatLocation'

export default function Ebook(props){
	let results = props.results.map((result, index) => {
		return <div className="result col-12 row" id={index} key={index}>
			<div className="bookInfo col-12">
				<BookInfo title={result.title} author={result.author} />
				<BookDetails preview={result.preview} publishDate={result.publishDate} languages={result.languages} pages={result.pages} />
				<FormatLocation formats={result.formats} location={result.location} locationUrl={result.locationUrl} icon={result.locationIcon} />
			</div>
		</div>
	})

	return (
		<div>
			{results}
		</div>
	)
}