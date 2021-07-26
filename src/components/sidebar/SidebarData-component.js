import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import ContainerList from "../getLists/ContainerList";
import CategoriesList from "../getLists/CategoryList";
import IdentifierList from "../getLists/IdentifierList";
import InformationList from "../getLists/InformationList";

//data that is passed into the Sidebar
const SidebarData = [
    {
        title: 'Dashboard',
        path: '/Dashboard',
        icon: <AiIcons.AiOutlineHome />
    }
]

export default SidebarData;