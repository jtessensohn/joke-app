import './App.css';
import React, { Component } from 'react'
import Joke from './components/Joke';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>You want jokes? I got jokes.</h1>
        <Joke />
      </div>
    )
  }
}
