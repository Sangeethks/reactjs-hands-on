import React, { Component } from 'react';
import styles from './App.scss';
import Home from './components/Home/Home';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className={styles.App}>
        <Home></Home>
      </div>
    )
  } // render
}

export default App;
