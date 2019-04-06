import React from "react";
import Sidebar from "react-sidebar";
 
class NavSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: true,
      sidebarDocked: MediaQueryList.matches
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <Sidebar
      open={this.state.sidebarOpen}
      onSetOpen={this.onSetSidebarOpen}
      styles={{ sidebar: { background: "white" } }}
      sidebar={}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}

var NavSidebarContent = () => {
  return (

  )
}



 
