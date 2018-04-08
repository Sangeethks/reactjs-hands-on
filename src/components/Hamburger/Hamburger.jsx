import React, { Component } from 'react';
import style from './Hamburger.scss';
import Screen from './Screen/Screen';
import Builder from './Builder/Builder';

class Hamburger extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: {
        'cheese': 0,
        'slice': 0,
        'tomottow': 0,
      }
    }
  }

  builderInputOnchangeCB = (type, event) => {

  }

  buildCtrlLessCB = (type) => {
    let ingredients = {...this.state.ingredients};
    if (type in ingredients) {
      ingredients[type] -= 1;

      this.setState({ ingredients });
    }
  }

  buildCtrlMoreCB = (type) => {
    let ingredients = {...this.state.ingredients};
    if (type in ingredients) {
      ingredients[type] += 1;

      this.setState({ ingredients });
    }
  }

  isLessButtonDisabledCB = (type) => {
    return false;
  }

  isMoreButtonDisabledCB = (type) => {
    console.log('[Hamburger -> isMoreButtonDisabledCB -> type ]', type);
    return 'false';
  }

  render () {
    return (
      <div className={style.Hamburger}>
        <Screen ingredients={this.state.ingredients}></Screen>
        <Builder
          ingredients={this.state.ingredients}
          builderInputOnchangeEvent={this.builderInputOnchangeCB}
          buildCtrlLessEvent={this.buildCtrlLessCB}
          buildCtrlMoreEvent={this.buildCtrlMoreCB}
          isLessButtonDisabled={this.isLessButtonDisabledCB}
          isMoreButtonDisabled={this.isMoreButtonDisabledCB}>
        </Builder>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default Hamburger;
