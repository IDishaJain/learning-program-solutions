import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      currency: ''
    };
  }

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleCurrencyChange = (event) => {
    this.setState({ currency: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const result = this.state.amount * 80;
    alert(`Converting to Euro Amount is ${result}`);
  };

  render() {
    return (
      <div>
        <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Amount: </label>
          <input type="text" value={this.state.amount} onChange={this.handleAmountChange} /><br />
          <label>Currency: </label>
          <input type="text" value={this.state.currency} onChange={this.handleCurrencyChange} /><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
