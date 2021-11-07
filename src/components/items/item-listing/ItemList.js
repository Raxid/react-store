import React from 'react';
import { ItemCard } from './ItemCard';

export class ItemList extends React.Component {


    renderItems() {
        return this.props.items.map((item, index) => {
            return (
                    <ItemCard key={index}
                                colNum='col-md-3 col-xs-6'
                                item={item}/>
                )
        });
    }

    render(){
        return (
                <div className="row">
                    {this.renderItems()}
                </div> 
        )
    }
}
