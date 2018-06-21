import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import MainBody from './components/MainBody'

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header></Header>
      <MainBody></MainBody>
       
      </div>
    );
  }
}

export default App;
