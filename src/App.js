import React, { Component } from 'react';
import logo from './quadraphic.png';
import Radium from 'radium';

import './App.css';
import Product from './components/Product/Product';
import User from './components/Users/Users';
import Login from './components/Login/Login';
 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  state ={
    error: null,
    isLoaded: false,
    products: []= require('./Data/products.json'),
    Persons:[]= require('./Data/users.json'),
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

   

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    console.log("clicked");
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  btnClickHandler = () => {
    //this.loadData();
    this.togglePersonsHandler();
    var myData = require('./Data/users.json'); 
    this.setState({
       Persons:myData
    })
    console.log("Data : " + this.state.Persons)
  }

  btnSubmit = () => {
    var myData = require('./Data/users.json'); 
    this.setState({
       Persons:myData
       
    })
  }

  clearClickHandler = (index) => {
    console.log("Clear Form:" + index);
  }
  changeHandler = (event) => {
    this.setState({
      Persons:[
        {name: 'Bidhan Sutar', age: 42},
        {name: event.target.value, age: 36},
        {name: 'Bidhisha Sutar', age: 7}
      ]
    })     
  }
  render() {
 


    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Product Listing</h1>
          
            <Link to="/">Home</Link> | <Link to="/Product">Product</Link> | <Link to="/User">Users</Link>
        
        </header>

        <Route exact path="/" component={Login} />
        <Route path="/Product" render={() => <Product product={this.state.products} click={this.clearClickHandler}/>}/>
        <Route path="/User" render={() => <User users={this.state.Persons} />}/>

        
        <button onClick={this.btnClickHandler}>Change Name</button>
        <footer className="App-footer">
          <p>This is the footer of the page</p>
        </footer>
      </div>
      </Router> 
    );
  }
}

export default Radium(App);
