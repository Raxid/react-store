import React , {Component} from 'react';
import {Header} from './shared/Header';
import {ItemsList} from './components/items/ItemsList';
import {ItemDetails} from './components/items/ItemDetails';
import './App.scss';

class App extends Component {

  constructor(){
    super();

   this.state = {
    isItemsList: true
   };
  }

  navigate(){
    this.setState({
      isItemsList: !this.state.isItemsList
    })
  }

  render(){
  return (
    <div className="App">
      <Header/>  
      <button onClick={() => { this.navigate()} }> NAWIGUJ</button>
      <div className="container">
        { this.state.isItemsList ? <ItemsList />:  <ItemDetails  />}  
      </div>
    </div>
  );
}
}

export default App;
