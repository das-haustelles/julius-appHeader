import React from 'react';
import styles from '../stylesheets/HeaderLogo.css'


class HeaderLogo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id={styles.logo}>
        {/* Logo and 'Hostelworld'*/}
        <img id={styles.logoPic} src="https://www.complaintsboard.com/thumb.php?src=hostelworld.png&wmax=182&hmax=300&quality=70&nocrop=1&bname=121731" height="50" width="50"/>
        <h2 id={styles.logoText} >HOSTELWORLD</h2>
      </div>
    )
  }
}

export default HeaderLogo;
