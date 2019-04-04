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
            <span id={styles.iconHolder}>
              <img src="https://flaticons.net/gd/makefg.php?i=icons/Application/User-Profile.png&r=255&g=255&b=255" height='20px' width='20px'></img>
            </span>
          </li>
          {/* Language */}
          <li>
            <span id={styles.iconHolder}></span>
            <img src="data:image/png;base64,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" height='20px' width='25px'></img>
          </li>
          {/* Currency */}
          <li>
            <span id={styles.iconHolder}>USD</span>
          </li>
          {/* Search */}
          <li>
            <span id={styles.iconHolder}>
            <img src="https://ya-webdesign.com/images/white-magnifying-glass-png-13.png" height='25px' width='25px'></img>
            </span>
          </li>
          {/* DropSide Menu */}
          <li>
            <span id={styles.iconHolder}></span>
            <img src="http://pepispubngrill.com/img/menu.png" height='25px' width='25px'></img>
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