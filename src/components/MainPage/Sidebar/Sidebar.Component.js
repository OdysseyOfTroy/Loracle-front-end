import React, { useCallback, useEffect, useState } from "react";
import SidebarItem from "./SidebarItem.Component";
import SidebarService from "../../Connections/Sidebar.service";
import "../../../css/Sidebar.css"
import "../../../css/global.css"

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

  //Callback to update the shown categories
  const getCategories = useCallback(() => {
    SidebarService.index().then((response) => {
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
    <div className="global-background">
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
            return <SidebarItem title={props.title} key={index} path={props.path} />
            })}

            {categories.map((category, index) => {
            return <SidebarItem title={category.name} key={index} />
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar;
