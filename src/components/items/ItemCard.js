import React from 'react';
import { Link } from 'react-router-dom'; 

export function ItemCard(props){

  const item = props.item;

	return(
		<div className={props.colNum}>
      <Link to={`/item/${item.id}`}>
         <div className="card ds-card">
                <img className="card-img-top" src={item.image} alt=""></img>
                <div className="card-block">
                  <h6 className="card-subtitle">{item.description} &#183; {item.avaible}</h6>
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-text">{item.price} PLN za {item.unit} &#183; {item.deliverytime}</p>
                </div>
          </div>
      </Link>
    </div>
   )
}
