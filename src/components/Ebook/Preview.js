import React from 'react'


export default function Preview(props){
	if(props.preview === 'none'){
		return (<div className="preview col-auto">No Preview</div>)
	}

	else{
		return 	(<div className="preview col-auto"><a href={props.preview}>Preview</a></div>)

	}
}