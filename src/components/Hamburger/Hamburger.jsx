import React, { Component } from 'react';
import style from './Hamburger.scss';
import Screen from './Screen/Screen';
import Builder from './Builder/Builder';

class Hamburger extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: {
        'cheese': 1,
        'slice': 1,
        'tomottow': 1,
      }
    }
  }

  builderInputOnchangeCB = (type, event) => {
    let ingredients = {...this.state.ingredients};
    ingredients[type] = event.target.value;

    console.log('[Hamburger -> builderInputOnchangeCB -> ingredients]', ingredients);

    this.setState({ ingredients });
  }

  render () {
    return (
      <div className={style.Hamburger}>
        <Screen ingredients={this.state.ingredients}></Screen>
        <Builder
          ingredients={this.state.ingredients}
          builderInputOnchangeEvent={this.builderInputOnchangeCB}>
        </Builder>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default Hamburger;
