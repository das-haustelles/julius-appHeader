import React from 'react';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id='headerNav'>
        <ul>
          {/* Signin */}
          <li></li>
          {/* Language */}
          <li>2</li>
          {/* Currency */}
          <li>3</li>
          {/* Search */}
          <li>4</li>
          {/* DropSide Menu */}
          <li></li>

        </ul>
      </div>
    )
  }
}

export default HeaderNav;