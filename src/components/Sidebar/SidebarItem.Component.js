import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
 
function SidebarItem(links) {
    return (
        <React.Fragment>
            <SidebarLink to={links.path}>
                <div>
                    {links.id}
                    <SidebarTitle>{links.title}</SidebarTitle>
                </div>
            </SidebarLink>

        </React.Fragment>
    )
}

export default SidebarItem;

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