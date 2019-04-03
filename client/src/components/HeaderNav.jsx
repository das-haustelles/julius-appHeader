import React from 'react';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id='headerNav'>
        <ul id='navList'>
          {/* Signin */}
          <li>
            <span id='iconHolder'>1</span>
            <img src=""></img>
          </li>
          {/* Language */}
          <li>
            <span id='iconHolder'>1</span>
            <img src=""></img>
          </li>
          {/* Currency */}
          <li>
            <span id='iconHolder'>1</span>
            <img src=""></img>
          </li>
          {/* Search */}
          <li>
            <span id='iconHolder'>1</span>
            <img src=""></img>
          </li>
          {/* DropSide Menu */}
          <li>
            <span id='iconHolder'>1</span>
            <img src=""></img>
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