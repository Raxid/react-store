import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';


export class ItemDetails extends React.Component{
	
	componentWillMount(){
		//Dispatch action
		const itemId = this.props.match.params.id;
		this.props.dispatch(actions.fetchItemById(itemId));
	}

	render () {
		const item = this.props.item;
		if(item.id) {
			return (
				<div>
				<img src={item.image}></img>
				<h1>To są szczegóły przedmiotu {item.title} o id: {item.id} </h1>
				</div>
				)
			}
		else{
			return(
				<h1>WCZYTYWANIE....</h1>
				)
		}
	}
}

function mapStateToProps(state){
	return{
		item: state.item.data
	}
}

export default connect(mapStateToProps)(ItemDetails)