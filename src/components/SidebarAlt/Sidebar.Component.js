import React, {useState } from "react";
import SidebarItem from "./SidebarItem.Component";
import NavigationService from "../Connections/Navigation.service";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar(props) {

const staticLinks = [
    {
        id: -1,
        title: 'Dashboard',
        path: '/Dashboard'
    }
]

staticLinks.forEach((link) => {

    <SidebarItem
        id={link.id}
        title={link.title}
        path={link.path}
    />  

});

NavigationService.index()
    .then((response) => {
        response.data.forEach((link) => {
            <SidebarItem
            id={link.id}
            title={link.name}
            path={link.path}
            />
        })
    })
    .catch((err) => {
        // Handle error
    });

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
                    {staticLinks.map((link) => {
                        return <SidebarItem title={link.title}/>
                    })}
                    </SidebarWrap>
                </SidebarNav>
            </React.Fragment>
    )
}

export default Navbar;

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
