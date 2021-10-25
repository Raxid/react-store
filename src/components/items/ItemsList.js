import React from 'react';
import {ItemCard} from './ItemCard';

export class ItemsList extends React.Component {

	constructor(){
		super();

		this.state = {
			items: [1,2,3]
		}

	}

	renderItems(){
		return this.state.items.map((item, index) => {
			return (
				<ItemCard key={index} colNum='col-md-3 col-xs-6'/>
				)
		});
	}

	render(){
		debugger;
		return(
			<section id="itemListing">
          		<h1 className="page-title">Najlepszy sklep w Twojej okolicy</h1>      		
           		<div className="row">
          		{this.renderItems()}
         		</div>
        	</section>
		)
	};
}