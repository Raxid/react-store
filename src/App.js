import React , {Component} from 'react';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';

import {Provider} from 'react-redux';

import {Header} from './shared/Header';
import ItemListing from './components/items/item-listing/ItemListing';
import ItemDetails from './components/items/item-detail/ItemDetails';



import './App.scss';

const store = require('./reducers').init();

class App extends Component {


  render(){

  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className='App'>
        <Header/>  
        <div className='container'>
          <Route exact path='/' render={() =>  <Redirect to='/item' /> }/>
          <Route exact path='/item' component={ItemListing} />
          <Route exact path='/item/:id' component={ItemDetails} />
        </div>
      </div>
      </BrowserRouter>
    </Provider>
  );
}
}

export default App;
