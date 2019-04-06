import React from 'react';
import Sidebar from "react-sidebar";
import styles from '../stylesheets/HeaderNav.css'

class HeaderNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarOpen: true
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  // navMenuClick() {
  //   // open side menu
  //   var toggle = !this.state.sideBarOpen;
  //   this.setState({
  //     sideBarOpen: toggle
  //   })
  //   console.log('click');
  // }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
    console.log('clicked');
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
            <span className={styles.iconHolder} onClick={() => this.onSetSidebarOpen(true)} >
              <img className={styles.icon} src="http://pepispubngrill.com/img/menu.png"></img>
            </span>
          </li>
        </ul>

        {/* navbar */}
        <div className='NavMenu'>
          <Sidebar
            sidebar={<b>Sidebar content</b>}
            
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "black" } }}
          >
          <button onClick={() => this.onSetSidebarOpen(true)}>
            Open sidebar
          </button>
          </Sidebar>
        </div>

      </div>
    )
  }
}




export default HeaderNav;
