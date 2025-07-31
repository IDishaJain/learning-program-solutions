import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 5
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    alert('Hello Member1');
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (message) => {
    alert(message);
  };

  clickHandler = () => {
    alert('I was clicked');
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button><br />
        <button onClick={this.decrement}>Decrement</button><br />
        <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button><br />
        <button onClick={this.clickHandler}>Click on me</button>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
