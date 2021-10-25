import React from 'react';
import {ItemCard} from './ItemCard';

export class ItemsList extends React.Component {

	constructor(){
		super();

		this.state = {
			items: [{
				id: "1",
				title: "Jabłko",
				category: "Owoce",
				image: "http://via.placeholder.com/350x250",
				description: "Najlepsza jakość",
				price: "5,99",
				unit: "kg",
				deliverytime: "Szybka Wysyłka",
				avaible: "Dostępny"
			},
			{
				id: "2",
				title: "Banan",
				category: "Owoce",
				image: "http://via.placeholder.com/350x250",
				description: "Najlepsza jakość",
				price: "17,20",
				unit: "kg",
				deliverytime: "Szybka Wysyłka",
				avaible: "Dostępny"
			},
			{
				id: "3",
				title: "Pomidor",
				category: "Warzywa",
				image: "http://via.placeholder.com/350x250",
				description: "Najlepsza jakość",
				price: "10,40",
				unit: "kg",
				deliverytime: "Szybka Wysyłka",
				avaible: "Dostępny"
			},
			{
				id: "4",
				title: "Ogórek zielony",
				category: "Warzywa",
				image: "http://via.placeholder.com/350x250",
				description: "Najlepsza jakość",
				price: "7,20",
				unit: "kg",
				deliverytime: "Szybka Wysyłka",
				avaible: "Dostępny"
			}]
		}

	}

	renderItems(){
		return this.state.items.map((item, index) => {
			return (
				<ItemCard key={index} 
						colNum='col-md-3 col-xs-6'
						item={item}/>
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