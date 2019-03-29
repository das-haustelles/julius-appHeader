import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id='logo'>
        {/* Logo and 'Hostelworld'*/}
        <img id='logoPic' src="https://www.complaintsboard.com/thumb.php?src=hostelworld.png&wmax=182&hmax=300&quality=70&nocrop=1&bname=121731" height="50" width="50"/>
        <h2 id='logoText' >HOSTELWORLD</h2>
      </div>
    )
  }
}

export default Header;

