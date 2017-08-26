import React from 'react'

import Ebook from '../Ebook/Ebook'
import Header from '../Header/Header'
import WishlistsContainer from './WishlistsContainer'

import './Wishlist.css'

export default class Wishlist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentList: 'Biographies',
			wishlists: {
					'Biographies': [
					{'title': "The Story of Brevity: How I Learned To Pare Down My Writing to Get to the Main Point in Short Order and Not Wax Eloquent about Superfluous Details that Either have No Bearing on My Original Point or Lack Concision",
					'author': "Hubert Blaine Wolferuhigschlegelsteinhausenbergerkraftenwerkdorffschlosszeug",
					'preview': "none",
					'publishDate': "1832",
					'languages': ['english'],
					'pages': "643",
					'formats': ['epub', 'pdf'],
					'location': 'project gutenberg',
					'locationIcon': '/',
					'locationUrl': '/'},
				{'title': "Napoleon the Great",
					'author': "Andrew Roberts",
					'preview': "/",
					'publishDate': "1832",
					'languages': ['english', 'french'],
					'pages': "643",
					'formats': ['epub', 'mobi', 'pdf'],
					'location': 'feedbooks',
					'locationIcon': '/',
					'locationUrl': '/'}],

				'French Literature': [{'title': "Jefferson and His Time",
					'author': "Thomas Malone",
					'preview': "/",
					'publishDate': "1832",
					'languages': ['english'],
					'pages': "643",
					'formats': ['epub', 'mobi', 'pdf'],
					'location': 'europeana',
					'locationIcon': '/',
					'locationUrl': '/'},
				{'title': "Napoleon's Letters",
					'author': "",
					'preview': "none",
					'publishDate': "1832",
					'languages': ['english', 'french'],
					'pages': "643",
					'formats': ['epub', 'mobi', 'pdf'],
					'location': 'open library',
					'locationIcon': '/',
					'locationUrl': '/'},
				{'title': "Citizens: A Chronicle of the French Revolution",
					'author': "Simon Schama",
					'preview': "/",
					'publishDate': "1832",
					'languages': ['english'],
					'pages': "643",
					'formats': ['epub', 'mobi', 'pdf'],
					'location': 'project gutenberg',
					'locationIcon': '/',
					'locationUrl': '/'}],

				"SciFi": [{'title': "Lorem",
					'author': "Ip Sum",
					'preview': "/",
					'publishDate': "1832",
					'languages': ['english', 'spanish', 'french'],
					'pages': "643",
					'formats': ['epub', 'mobi', 'pdf'],
					'location': 'project gutenberg',
					'locationIcon': '/',
					'locationUrl': '/'},
				{'title': "Lore",
					'author': "M. Ipsum",
					'preview': "none",
					'publishDate': "1832",
					'languages': ['english'],
					'pages': "643",
					'formats': ['epub', 'mobi', 'pdf'],
					'location': 'project gutenberg',
					'locationIcon': '/',
					'locationUrl': '/'}]
			}
		}
	}

	changeWishlist(wishlist){
		this.setState({currentList: wishlist})
	}

	render(){
		let dropdownLinks = ['Change Wishlist', 'Delete']
		let wishlistLinks = ["Biographies", "French Literature", "SciFi", "Russian Literature"]

		return(
			<main>

				<Header headerId="header" title="Wishlist" subtitle={this.state.currentList} subtitleId="wishListName" />

				<div id="main-container" className="container-fluid">
					<div id="main-row" className="row">
						
						<Ebook results={this.state.wishlists[this.state.currentList]} dropdownLinks={dropdownLinks}/>
						<WishlistsContainer changeWishlist={this.changeWishlist.bind(this)} links={wishlistLinks}/>
					</div>
				</div>

			</main>
		)
	}
}