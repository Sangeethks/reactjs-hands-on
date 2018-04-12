import React, { Component } from 'react';
import style from './Hamburger.scss';
import Screen from './Screen/Screen';
import Builder from './Builder/Builder';
import Modal from '../Shared/Modal';
import Checkout from './Checkout/Checkout';

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
      totalPrice: 0.00,
      showCheckoutModal: false
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

  buttonCheckoutClickCB = () => {
    this.setState({ showCheckoutModal: true });
  }

  overlayClickCB = () => {
    this.setState({ showCheckoutModal: false });
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

    // Whether to show the checkout modal or not
    let checkoutModal = null;
    if (this.state.showCheckoutModal) {
      checkoutModal = (
        <Modal overlayClickEvent={this.overlayClickCB}>
          <Checkout
            ingredients={this.state.ingredients}
            totalPrice={totalPrice}>
          </Checkout>
        </Modal>
      );
    }

    return (
      <div className={style.Hamburger}>
        { checkoutModal }

        <Screen ingredients={this.state.ingredients}></Screen>
        <Builder
          total={totalPrice}
          ingredients={this.state.ingredients}
          buildCtrlLessEvent={this.buildCtrlLessCB}
          buildCtrlMoreEvent={this.buildCtrlMoreCB}
          buttonCheckoutClickEvent={this.buttonCheckoutClickCB}>
        </Builder>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default Hamburger;
