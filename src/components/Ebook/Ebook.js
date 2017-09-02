import React from 'react'
import {connect} from 'react-redux';

import BookDetails from './BookDetails'
import BookInfo from './BookInfo'
import FormatLocation from './FormatLocation'
import NoResults from '../NoResults/NoResults'

import './Ebook.css'

export class Ebook extends React.Component{
		
	render(){
		let results;


		if(this.props.results.length === 0) {
			results = <NoResults />
		}

		else{
			results = this.props.results.map((result, index) => {

				
				let ebook = {	
									'wishlist': result.wishlist,
									'title': result.title,
									'author': result.author,
									'preview': result.preview,
									'publishDate': result.publishDate,
									'languages': result.languages,
									'pages': result.pages,
									'formats': result.formats,
									'location': result.location,
									'locationIcon': result.locationIcon,
									'locationUrl': result.locationUrl
						};

				return <div className="result col-12 row" id={index} key={index}>
					<div className="bookInfo col">
						<BookInfo title={result.title} author={result.author} ebook={ebook} dropdownType={this.props.dropdownType} dropdownLinks={this.props.dropdownLinks}/>
						<BookDetails preview={result.preview} publishDate={result.publishDate} languages={result.languages} pages={result.pages} />
						<FormatLocation formats={result.formats} location={result.location} locationUrl={result.locationUrl} icon={result.locationIcon} />
					</div>
				</div>
			})	
		}

		return (
			<div id="results" className="align-self-end col-12 col-md-8">
				{results}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	wishlistItems: state.wishlistItems
})

export default connect(mapStateToProps)(Ebook);
