// subcomponent of Results

import React from 'react'

import AuthorSupplement from './AuthorSupplement'
import BookSupplement from './BookSupplement'

import './SupplementInfo.css'

export default function SupplementInfo(props){

		if(props.supplement === 'book'){
			return (<BookSupplement {...props.details}/>)
		}
		else{
			return (<AuthorSupplement {...props.details}/>)
		}
}