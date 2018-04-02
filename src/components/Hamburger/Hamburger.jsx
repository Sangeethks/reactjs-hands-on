import React, { Component } from 'react';
import style from './Hamburger.scss';
import Screen from './Screen/Screen';

class Hamburger extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: {
        'top': 1,
        'cheese': 2,
        'slice': 2,
        'tomottow': 1,
        'bottom': 1,
      }
    }
  }

  render () {
    return (
      <div className={style.Hamburger}>
        <Screen ingredients={this.state.ingredients}></Screen>
      </div>
    );
  }
}

export default Hamburger;
