import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter/Counter'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="App-header">
          <h1>React Counter App</h1>
        </header>
        <Counter />
      </div>
    )
  }
}

export default App;
