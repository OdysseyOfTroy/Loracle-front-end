import React, { useCallback, useEffect, useState } from "react";
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

    staticLinks.forEach((props) => {

        <SidebarItem
            id={props.id}
            title={props.title}
            path={props.path}
        />

    });

    //define getters and setters for categories 
    const [categories, setCategories] = useState([]);
    const [currentId, setCurrentId] = useState([null]);

    //Callback to update the shown categories
    const getCategories = useCallback(() => {
        SidebarService.index()
            .then((response) => {
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

    categories.forEach((category) => {
        <SidebarItem
            id={category.id}
            title={category.name}
            path={category.path}
        />
    })

    const [showSidebar, setShowSidebar] = useState(false)

    const toggleSidebar = () => setShowSidebar(!showSidebar)

    return (
        <nav>
            <button
                onClick={toggleSidebar}
                style={{ display: showSidebar ? "none" : "flex" }}
            >
                Toggle Sidebar</button>

            <div style={{ display: showSidebar ? "flex" : "none" }} >
                <button onClick={toggleSidebar}>Toggle Sidebar</button>
                {staticLinks.map((props, index) => {
                    return <SidebarItem title={props.title} key={index} path={props.path} />
                })}

                {categories.map((category, index) => {
                    return <SidebarItem title={category.name} key={index} />
                })}
            </div>
        </nav>
    )
}

export default Sidebar;
