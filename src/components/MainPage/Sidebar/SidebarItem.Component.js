import React from "react";
import "../../../css/Sidebar.css"
import IdentifierService from "../../Connections/Identifier.service";
 
function SidebarItem(props) {

  const onClick = () => {
    IdentifierService.index(props.containerId, props.id).then((res)=> {
      props.setIdentifierView(res.data, props.id)
    })
  }

  return (
    <button className="sidebar-Link" onClick={onClick}>
      <span>
        {props.title}
      </span>
    </button>
  )
}

export default SidebarItem;