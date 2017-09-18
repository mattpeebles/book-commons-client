import React from 'react'


export default function Preview(props){
	if(props.preview === 'No Preview'){
		return (<div className="preview col-auto">No Preview</div>)
	}

	else{
		return 	(<div className="preview col-auto"><a href={props.preview} target="_blank">Preview</a></div>)

	}
}