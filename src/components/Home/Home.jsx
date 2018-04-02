import React from 'react';
// SASS
import styles from './Home.scss';
// Header
import Header from '../Header/Header';

const Home = (props) => {
  return (
    <div className={styles.Home}>
      <Header></Header>
    </div>
  );
}

export default Home;
