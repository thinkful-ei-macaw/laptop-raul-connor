import React, { Component } from 'react';

class Cart extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.props.USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );



    return (
      <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {this.props.USCurrencyFormat.format(total)}
        </div>
      </div>
    </section>

    )
  }

}

export default Cart;