import React from 'react';
import styles from '../stylesheets/HeaderNav.css'

class HeaderNav extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id={styles.headerNav}>
        <ul id={styles.navList}>
          {/* Signin */}
          <li>
            <span className={styles.iconHolder}>
              <img className={styles.icon} src="https://flaticons.net/gd/makefg.php?i=icons/Application/User-Profile.png&r=255&g=255&b=255"></img>
            </span>
          </li>
          {/* Language */}
          <li>
            <span className={styles.iconHolder}>
              <img className={[styles.icon, styles.language].join(' ')} src="https://image.flaticon.com/icons/svg/330/330425.svg"></img>
            </span>
          </li>
          {/* Currency */}
          <li>
            <span className={[styles.iconHolder, styles.currency].join(' ')}>USD</span>
          </li>
          {/* Search */}
          <li>
            <span className={styles.iconHolder}>
              <img className={[styles.icon, styles.searchIcon].join(" ")} src="https://ya-webdesign.com/images/white-magnifying-glass-png-13.png"></img>
            </span>
          </li>
          {/* DropSide Menu */}
          <li>
            <span className={styles.iconHolder}>
              <img className={styles.icon} src="http://pepispubngrill.com/img/menu.png"></img>
            </span>
          </li>
        </ul>
      </div>
    )
  }
}

export default HeaderNav;


/*
1. Signin
2. Language 
3. Currency
4. Search
5. DropSide Menu
*/