import React, {useCallback, useEffect, useState } from "react";
import SidebarItem from "./SidebarItem.Component";
import SidebarService from "../Connections/Sidebar.service";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Sidebar(props) {

    const staticLinks = [
        {
            id: -1,
            title: 'Dashboard',
            path: '/Home'
        }
    ]

staticLinks.forEach((link) => {

    <SidebarItem
        id={link.id}
        title={link.title}
        path={link.path}
    />  

});

//define getters and setters for categories 
const [categories, setCategories] = useState([]);
const [currentId, setCurrentId] = useState([null]); 

//Callback to update the shown categories
const getCategories = useCallback(() => { 
SidebarService.index()
    .then((response) => {
        console.log(response)   
        setCategories(response.data);
    })
    .catch((err) => {
        // Handle error
    });
}, [setCategories]
);

//retrieve data on load
    useEffect(() => {
        getCategories();
    }, [getCategories]);

    console.log(categories)

    categories.forEach((category) => {
        <SidebarItem
        id={category.id}
        title={category.name}
        path={category.path}
        />
    })

    

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
                    {staticLinks.map((link, index) => {
                        return <SidebarItem title={link.title} key={index} path={link.path}/>
                    })}
                    {categories.map((category, index) => {
                        return <SidebarItem title={category.name} key={index}/>
                    })}
                    </SidebarWrap>
                </SidebarNav>
            </React.Fragment>
    )
}

export default Sidebar;

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
