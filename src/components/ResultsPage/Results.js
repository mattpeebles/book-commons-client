import React from 'react'

import Ebook from '../Ebook/Ebook'
import NavPills from './NavPills'
import SupplementInfo from './SupplementInfo'

import './Results.css'

let results = [
			{
				'title': "The Story of Brevity: How I Learned To Pare Down My Writing to Get to the Main Point in Short Order and Not Wax Eloquent about Superfluous Details that Either have No Bearing on My Original Point or Lack Concision",
				'author': "Hubert Blaine Wolferuhigschlegelsteinhausenbergerkraftenwerkdorffschlosszeug",
				'preview': "none",
				'publishDate': "1832",
				'languages': ['english'],
				'pages': "643",
				'formats': ['epub', 'pdf'],
				'location': 'project gutenberg',
				'locationIcon': '/',
				'locationUrl': '/'
			},
			{
				'title': "Napoleon the Great",
				'author': "Andrew Roberts",
				'preview': "/",
				'publishDate': "1832",
				'languages': ['english', 'french'],
				'pages': "643",
				'formats': ['epub', 'mobi', 'pdf'],
				'location': 'feedbooks',
				'locationIcon': '/',
				'locationUrl': '/'
			},
			{
				'title': "Jefferson and His Time",
				'author': "Thomas Malone",
				'preview': "/",
				'publishDate': "1832",
				'languages': ['english'],
				'pages': "643",
				'formats': ['epub', 'mobi', 'pdf'],
				'location': 'europeana',
				'locationIcon': '/',
				'locationUrl': '/'
			},
			{
				'title': "Napoleon's Letters",
				'author': "",
				'preview': "none",
				'publishDate': "1832",
				'languages': ['english', 'french'],
				'pages': "643",
				'formats': ['epub', 'mobi', 'pdf'],
				'location': 'open library',
				'locationIcon': '/',
				'locationUrl': '/'
			},
			{
				'title': "Citizens: A Chronicle of the French Revolution",
				'author': "Simon Schama",
				'preview': "/",
				'publishDate': "1832",
				'languages': ['english'],
				'pages': "643",
				'formats': ['epub', 'mobi', 'pdf'],
				'location': 'project gutenberg',
				'locationIcon': '/',
				'locationUrl': '/'
			},
			{
				'title': "Lorem",
				'author': "Ip Sum",
				'preview': "/",
				'publishDate': "1832",
				'languages': ['english', 'spanish', 'french'],
				'pages': "643",
				'formats': ['epub', 'mobi', 'pdf'],
				'location': 'project gutenberg',
				'locationIcon': '/',
				'locationUrl': '/'
			},
			{
				'title': "Lore",
				'author': "M. Ipsum",
				'preview': "none",
				'publishDate': "1832",
				'languages': ['english'],
				'pages': "643",
				'formats': ['epub', 'mobi', 'pdf'],
				'location': 'project gutenberg',
				'locationIcon': '/',
				'locationUrl': '/'
			}]

export default class Result extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			'supplement': 'author',
			'details': 'authorSupplement',
			'authorSupplement': {
									name: 'M. Ipsum',
									dates: '1800-1900',
									image: '/',
									summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
									location: '/'
								},
			'bookSupplement': {
								title: 'Cheese',
								published: '1843',
								cover: '/',
								summary: 'Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
								location: '/'
							}
		}
	}

	toggleSupplement(info){
		this.setState({
			'supplement': info,
			'details': `${info}Supplement`
		})
	}


	render(){
		
		return(
			<main>
				<header>
					<h1 id="header">Results</h1>
				</header>

				<div id="main-container" className="container-fluid">
					<div id="main-row" className="row">
						
						<Ebook results={results} />

						<div id="supplement-container" className="col-md-4 row">						
							<NavPills toggleSupplement={this.toggleSupplement.bind(this)} supplement={this.state.supplement}/>
							<SupplementInfo supplement={this.state.supplement} details={this.state[this.state.details]} />
						</div>
					</div>
				</div>
				<div /> 
			</main>
		)
	}
}