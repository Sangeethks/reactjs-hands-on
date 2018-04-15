import React, { Component } from 'react';
import styles from './App.scss';
import Counter from './components/Counter/Counter';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className={styles.App}>
        <Counter></Counter>
      </div>
    )
  } // render
}

export default App;
