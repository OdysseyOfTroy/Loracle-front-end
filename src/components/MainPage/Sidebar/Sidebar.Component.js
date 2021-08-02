import React, { useCallback, useEffect, useState } from "react";
import SidebarItem from "./SidebarItem.Component";
import NavSidebarItem from "./NavSidebarItem.Component";
import CategoryService from "../../Connections/Category.service";
import "../../../css/Sidebar.css"

import Universalbar from "../../UniversalBar";
import {Button} from "react-bootstrap"
import NewCategoryModal from "./NewCategoryModal";

function Sidebar(props) {

  const staticLinks = [
    {
      id: -1,
      title: 'Dashboard',
      path: '/Home'
    }
  ]

  staticLinks.forEach((props) => {
  <NavSidebarItem
    id={props.id}
    title={props.title}
    path={props.path}
  />
  });

  //define getters and setters for categories 
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  //Callback to update the shown categories
  const getCategories = useCallback(() => {
    CategoryService.index().then((response) => {
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

  const createCategory = useCallback(() => {
    CategoryService.create(name, description).then(() => {
      setIsModalVisible(false);
      getCategories();
    })
  })
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => setShowSidebar(!showSidebar)

  return (
      <nav>
        <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        style={{ display: showSidebar ? "none" : "flex" }}
        >
        x</button>

        <div className="sidebar-Nav" style={{ display: showSidebar ? "flex" : "none" }} >
          <div className="sidebar-wrap">
            <button className="sidebar-toggle" onClick={toggleSidebar}>Toggle Sidebar</button>
            {staticLinks.map((props, index) => {
            return <NavSidebarItem title={props.title} key={index} path={props.path} />
            })}

            {categories.map((category, index) => {
            return <SidebarItem title={category.name} key={index} />
            })}

            <Button variant="primary" 
            onClick={() => {setIsModalVisible(true);}}>
            New Category</Button>
          </div>
        </div>
        <NewCategoryModal
            visible={isModalVisible}
            title={`New Category`}
            continueAction={createCategory}
            closeAction={() => setIsModalVisible(false)}
            setName={setName}
            setDescription={setDescription}
            />
      </nav>


  )
}

export default Sidebar;
