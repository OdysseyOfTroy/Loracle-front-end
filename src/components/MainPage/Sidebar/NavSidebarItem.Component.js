import React from "react";
import { Link } from "react-router-dom";
import "../../../css/Sidebar.css";

function NavSidebarItem(props) {
  return (
    <Link to={props.path} className="navSidebar-Link">
      <span>
        {props.id}
        {props.title}
      </span>
    </Link>
  );
}

export default NavSidebarItem;
