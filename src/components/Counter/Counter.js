import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.resetValue = this.resetValue.bind(this);
  }

  increment() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  decrement() {
    this.setState({
      value: this.state.value === 0 ? 0 : this.state.value - 1,
    });
  }

  resetValue() {
    this.setState({
      value: 0,
    });
  }

  render() {
    return (
      <div className="counter-container">
        <span className="badge badge-success count">{this.state.value}</span>
        <button 
          className="btn btn-primary buttons"
          onClick={this.increment}> +
        </button>
        <button
          className="btn btn-danger buttons" 
          onClick={this.decrement}> -
        </button>
        <button
          className="btn btn-warning buttons" 
          onClick={this.resetValue}>Reset
        </button>
      </div>
    );
  }
}

export default Counter;
