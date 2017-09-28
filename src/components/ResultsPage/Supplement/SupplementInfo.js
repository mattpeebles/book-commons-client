// subcomponent of Results

import React from 'react'

import AuthorSupplement from './AuthorSupplement'
import BookSupplement from './BookSupplement'

import './SupplementInfo.css'

export default function SupplementInfo(props){

		if(props.supplement === 'book'){
			return (
				<div className="supplement">
					<BookSupplement {...props.details}/>
				</div>
			)
		}
		else{
			return (
				<div className="supplement">
					<AuthorSupplement {...props.details}/>
				</div>
			)
		}
}