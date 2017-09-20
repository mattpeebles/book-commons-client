import React from 'react'
import {connect} from 'react-redux'

import './AmazonBook.css'

export class AmazonBook extends React.Component{
	render(){
			let results;

			results = this.props.results.map((result, index) => {
				let price = (result.ItemAttributes[0].ListPrice !== undefined) ? result.ItemAttributes[0].ListPrice[0].FormattedPrice[0] : result.OfferSummary[0].LowestNewPrice[0].FormattedPrice[0];
				
				return	<div key={index} className="product-box">
						    <a target="_blank" href={result.DetailPageURL[0]}>
						        <img alt="cover" src={result.ImageSets[0].ImageSet[0].MediumImage[0].URL[0]} width='122' height='160' />
						    </a>
						    <div className="product-title">
						        <h3>{result.ItemAttributes[0].Title[0]}</h3>
						    </div>
						    <p className="product-price">{price}<br />
						       <a target="_blank" style={{"color": '#337ab7', "textDecoration":'none'}} href={result.Offers[0].MoreOffersUrl[0]}> More offers </a>
						   </p>
						    <div>
						        <span className="a-button a-button-primary">
						            <a target="_blank" href={result.DetailPageURL[0]} style={{'textDecoration':'none'}}>
						                <span className="a-button-inner">
						                    <img alt="amazon icon" src="http://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" className="a-icon a-icon-shop-now" />
						                    <input className="a-button-input" type="submit" value="Add to cart" />
						                    <span className="a-button-text">Shop Now</span>
						                </span>
						            </a>
						        </span>
						    </div>
						</div>
			})
		
		return(
			<div>
				<div id="amazonResultsContainer" className="row">
					{results}
				</div>
			</div>
		)
	}
}


// const mapStateToProps = state => ({
// 	results: state.results.amazonResults
// })

export default connect()(AmazonBook)