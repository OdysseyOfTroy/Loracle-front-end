import React from "react";

import "../../../css/Sidebar.css"
 
function SidebarItem(props) {

  return (
    <div className="sidebar-Link">
      <span>
        {props.id}
        {props.title}
      </span>
    </div>
  )
}

export default SidebarItem;