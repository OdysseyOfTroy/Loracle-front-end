import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../css/Sidebar.css"
 
function SidebarItem(props) {

    return (
        <Link to={props.path} className="sidebar-Link">
            <span>
                {props.id}
                {props.title}
            </span>
        </Link>
    )
}

export default SidebarItem;