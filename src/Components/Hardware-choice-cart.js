import React, { Component } from 'react';



class HWChoiceCart extends Component {
  render() {
  return (
    <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.props.USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
  )
  }
}

export default HWChoiceCart