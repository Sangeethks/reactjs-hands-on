import React, { Component } from 'react';
import style from './Hamburger.scss';
import Screen from './Screen/Screen';
import Builder from './Builder/Builder';

class Hamburger extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: {
        'cheese': {
          count: 1,
          price: 1.2
        },
        'slice': {
          count: 1,
          price: 1.4
        },
        'tomottow': {
          count: 1,
          price: 1.8
        },
      }, // ingredients
      basePrice: 4.00,
      totalPrice: 0.00
    }
  }

  buildCtrlLessCB = (type) => {
    let ingredients = {...this.state.ingredients};
    if (type in ingredients) {
      ingredients[type].count -= 1;

      this.setState({ ingredients });
      // Calculate price
      this.setState({ totalPrice: this.state.totalPrice - ingredients[type].price });
    }
  }

  buildCtrlMoreCB = (type) => {
    let ingredients = {...this.state.ingredients};
    if (type in ingredients) {
      ingredients[type].count += 1;

      this.setState({ ingredients });
      // Calculate price
      this.setState({ totalPrice: this.state.totalPrice + ingredients[type].price });
    }
  }

  render () {
    // Calculate TotalPrice
    let ingredients = {...this.state.ingredients};

    let currentPrice = Object.keys(ingredients).map((key) => {
      return ingredients[key];
    }).reduce((prev, next) => {
      return prev + (next.count * next.price);
    }, 0);

    let totalPrice = (this.state.basePrice + currentPrice).toFixed(2);

    return (
      <div className={style.Hamburger}>
        <Screen ingredients={this.state.ingredients}></Screen>
        <Builder
          total={totalPrice}
          ingredients={this.state.ingredients}
          buildCtrlLessEvent={this.buildCtrlLessCB}
          buildCtrlMoreEvent={this.buildCtrlMoreCB}>
        </Builder>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default Hamburger;
