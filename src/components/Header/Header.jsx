import React from 'react';
import styles from './Header.scss';

const Header = (props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.Nav}>
        <div className={styles.NavLeft}>
          <h4>Hamburger <span>Builder</span></h4>
        </div>
        <div className={styles.NavRight}>
          <ul>
            <li><a href="/home">Reset</a></li>
            <li><a href="/home">Contact</a></li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default Header;
