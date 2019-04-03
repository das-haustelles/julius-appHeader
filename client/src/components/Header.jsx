import React from 'react';
import HeaderLogo from './HeaderLogo.jsx'
import HeaderNav from './HeaderNav.jsx'


class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id='logo'>
        <HeaderLogo />
        <HeaderNav />
      </div>
    )
  }
}

export default Header;
