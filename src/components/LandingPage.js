// subcomponent of App

import React from 'react'

export default function LandingPage(props){
	return(
		<div className="bd-example">
			<div id="landingHeader">
				<h1>Welcome to Book Commons</h1>
				<h2>The Public Domain Ebook Aggregator</h2>
			</div>
			<div>
				<div id="accordion" role="tablist">
				  <div className="card">
				    <div className="card-header" role="tab" id="headingOne">
				      <h5 className="mb-0">
				        <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				          Collapsible Group Item #1
				        </a>
				      </h5>
				    </div>

				    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
				      <div className="card-body">
				        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
				      </div>
				    </div>
				  </div>
				  <div className="card">
				    <div className="card-header" role="tab" id="headingTwo">
				      <h5 className="mb-0">
				        <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
				          Collapsible Group Item #2
				        </a>
				      </h5>
				    </div>
				    <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
				      <div className="card-body">
				        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		</div>
	)
}