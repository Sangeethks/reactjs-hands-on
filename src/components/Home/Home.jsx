import React from 'react';
// SASS
import styles from './Home.scss';
// Header
import Header from '../Header/Header';
// Hamburger
import Hamburger from '../Hamburger/Hamburger';

const Home = (props) => {
  return (
    <div className={styles.Home}>
      <Header></Header>
      <Hamburger></Hamburger>
    </div>
  );
}

export default Home;
