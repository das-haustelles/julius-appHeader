import React from 'react';
import HeaderLogo from './HeaderLogo.jsx'
import HeaderNav from './HeaderNav.jsx'
import styles from '../stylesheets/Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles.header}>
        <div id={styles.headerCont}>
          <HeaderLogo />
          <HeaderNav />
        </div>
      </div>
    )
  }
}

export default Header;
