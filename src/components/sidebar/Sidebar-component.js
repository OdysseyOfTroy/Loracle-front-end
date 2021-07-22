import React, { Component, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { sidebarData } from "./sidebarData-component"; 

const Nav = styled.div
`
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)
`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    Display: flex;
    justify-content: flex-start;
    color: Violet;
    align-items: center;
`;

const SidebarNav = styled.nav
`
    background: #15171c;
    width: 20%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 300ms;
    z-index: 10;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
`

const SidebarWrap = styled.div
`
    width: 100%;

`

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (   
        <React.Fragment>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                <NavIcon to='#'>
                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </NavIcon>
                </SidebarWrap>
            </SidebarNav>
        </React.Fragment>
    );
};

export default Sidebar;