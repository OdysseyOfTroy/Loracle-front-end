import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//creates the structure of options within the sidebar
 
const SubMenu = ({ item }) => {
    return (
        <React.Fragment>
            <SidebarLink to={item.Path}>
                <div>
                    {item.icon}
                    <SidebarTitle>{item.title}</SidebarTitle>
                </div>
            </SidebarLink>

        </React.Fragment>
    )
}

export default SubMenu;

//styles the options within the sidebar

const SidebarLink = styled(Link)
`
    display: flex;
    color: Violet;
    justify-content: space-between;
    align-items: center;
    padding: 5%;
    height: 60px;
    font-size: 150%;
    text-decoration: none;

    &:hover {
        background: #252831;
        border-left: 4px solid Violet;
        cursor: pointer;
    }
`
const SidebarTitle = styled.span
`
    margin-left: 18px;
`