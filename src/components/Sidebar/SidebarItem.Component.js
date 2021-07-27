import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
 
function SidebarItem(props) {

    return (
        <Link to={props.path}>
            <span>
                {props.id}
                {props.title}
            </span>
        </Link>
    )
}

export default SidebarItem;