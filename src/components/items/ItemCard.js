import React from 'react';


export function ItemCard(props){

	return(
		<div className={props.colNum}>
             <div className="card ds-card">
                <img className="card-img-top" src="http://via.placeholder.com/350x250" alt=""></img>
                <div className="card-block">
                  <h6 className="card-subtitle">Przedmiot &#183; Dostępny</h6>
                  <h4 className="card-title">Najlepsza jakość</h4>
                  <p className="card-text">60PLN &#183; Darmowa wysyłka</p>
                  <a href="" className="card-link">Więcej informacji</a>
                </div>
              </div>
        </div>
   )
}
