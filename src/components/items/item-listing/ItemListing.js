import React from 'react';
import { ItemList } from './ItemList';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

class ItemListing extends React.Component {

    componentWillMount() {
        this.props.dispatch(actions.fetchItems());
    }

    render(){
        return (
            <section id="itemListing">
                <h1 className="page-title">Najlepszy sklep w Twojej okolicy</h1>
                <ItemList items={this.props.items}/>
            </section>
        )
    }
}

function mapStateToProps(state){
    return{
        items: state.items.data
    }
}

export default connect(mapStateToProps)(ItemListing)