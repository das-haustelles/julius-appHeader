import React from 'react';
import Header from './Header.jsx';

import styles from '../stylesheets/App.css';

class HeaderModule extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return ( 
      <div id={styles.mainCont}>
        <Header />
      </div>
    )
  }
}

export default HeaderModule;
