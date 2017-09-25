import React from 'react'
import {connect} from 'react-redux';

import BookDetails from './BookDetails'
import BookInfo from './BookInfo'
import FormatLocation from './FormatLocation'

import './Ebook.css'

export class Ebook extends React.Component{
		
	render(){
			
		let results = this.props.results.map((result, index) => {

			return <div className="result col-12 row" id={index} key={index}>
				<div className="bookInfo col">
					<BookInfo title={result.title} author={result.author} ebook={result} dropdownType={this.props.dropdownType} dropdownLinks={this.props.dropdownLinks}/>
					<BookDetails preview={result.preview} publishDate={result.publishDate} languages={result.languages} pages={result.pages} />
					<FormatLocation formats={result.formats} location={result.location} database={result.database} icon={result.icon} />
				</div>
			</div>
		})	

		return (
			<div id="results">
				{results}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	wishlistItems: state.wishlist.wishlistItems
})

export default connect(mapStateToProps)(Ebook);
