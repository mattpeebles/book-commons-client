//subcomponent of Ebook

import React from 'react'

import Preview from './Preview'
import PublishDate from './PublishDate'
import Languages from './Languages'
import BookPages from './BookPages'

export default function BookDetails(props){
	return(
		<div className="row">
			<div className="details col-12">
				<div className="row">
					<Preview preview={props.preview} />
					<PublishDate publishDate={props.publishDate} />
					<Languages languages={props.languages} />
					<BookPages pages={props.pages} />
				</div>
			</div>
		</div>
	)
}