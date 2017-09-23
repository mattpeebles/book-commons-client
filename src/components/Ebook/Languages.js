import React from 'react'
import langs from 'langs'


export default function Languages(props){
	
	if(props.languages === undefined){
		return <div className='col-4'></div>
	}

	else {
		let languages = []

			if(typeof props.languages === 'object'){
				props.languages.forEach(lang => {
					if(langs.has('1', `${lang}`)){
						let local = langs.where('1', `${lang}`).local

						return languages.push(local)
					}
					if(langs.has('2', `${lang}`)){
						let local = langs.where('2', `${lang}`).local

						return languages.push(local)
					}
				})
			}

			else{
				if(langs.has('1', `${props.languages}`)){
					let local = langs.where('1', `${props.languages}`).local
					languages.push(local)
				}
			}
		return 	(
			<div className="bookLanguage col">Lang<span className="abbr">uage</span>: {languages.toString().replace(/[,]/g, ' ')}</div>
		)
	}
}