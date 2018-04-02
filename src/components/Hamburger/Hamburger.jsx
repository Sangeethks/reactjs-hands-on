import React, { Component } from 'react';
import style from './Hamburger.scss';
import Screen from './Screen/Screen';
import Builder from './Builder/Builder';

class Hamburger extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: {
        'top': 1,
        'cheese': 2,
        'slice': 3,
        'tomottow': 1,
        'bottom': 1,
      }
    }
  }

  render () {
    return (
      <div className={style.Hamburger}>
        <Screen ingredients={this.state.ingredients}></Screen>
        <Builder></Builder>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default Hamburger;
