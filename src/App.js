import React , {Component} from 'react';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';
import {Header} from './shared/Header';
import {ItemsList} from './components/items/ItemsList';
import {ItemDetails} from './components/items/ItemDetails';
import './App.scss';

class App extends Component {


  render(){
  return (
    <BrowserRouter>
    <div className='App'>
      <Header/>  
      <div className='container'>
        <Route exact path='/' render={() => {return  <Redirect to='/item' />}} />
        <Route exact path='/item' component={ItemsList} />
        <Route exact path='/item/:d' component={ItemDetails} />
      </div>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
