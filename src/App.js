import React, { Component } from 'react';
import logo from './quadraphic.png';
//import datafile from './Data';
import './App.css';
import Product from './Product/Product';
//import Person from './Product/Product';
import Login from './Login/Login';

//import {Router, Route, IndexRoute, hashHistory} from "route";
//import fetchapi from 

class App extends Component {
  state ={
    error: null,
    isLoaded: false,
    products: [],
    Persons:[
      {name: 'Bidhan Sutar', age: 42},
      {name: 'Tamasha Mohapatra', age: 36},
      {name: 'Bidhisha Sutar', age: 7}
    ]
  }

 

  btnClickHandler = () => {
    this.loadData();
    /* this.setState({
      Persons:[
        {name: 'Bidhan Sutar', age: 42},
        {name: 'Tamasha Mohapatra', age: 36},
        {name: 'Bidhisha Sutar', age: 7}
      ] 
    }) */
  }

  loadData = () =>{
    console.log("result");
    fetch("https://randomuser.me/api")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            
            isLoaded: true,
            Persons: result
          });
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error)
          this.setState({
            isLoaded: true,
            error
            
          });
        }
      ) 
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Product Listing</h1>
        </header>
        <Login/>
       
        <p className="App-intro">
          <Product name={this.state.Persons[0].name} age = {this.state.Persons[0].age}/>
          <Product name={this.state.Persons[1].name} age = {this.state.Persons[1].age}
          change={this.changeHandler}/>
          <Product name={this.state.Persons[2].name} age = {this.state.Persons[2].age}/>
        </p>
        <button onClick={this.btnClickHandler}>Change Name</button>
        <footer className="App-footer">
          <p>This is the footer of the page</p>
        </footer>
      </div>
    );
  }
}

export default App;
