import React, { useCallback, useEffect, useState } from "react";
import SidebarItem from "./SidebarItem.Component";
import NavSidebarItem from "./NavSidebarItem.Component";
import CategoryService from "../../Connections/Category.service";
import "../../../css/Sidebar.css";
import ConfirmationModal from "../../Confirmation.Modal";

import { Button } from "react-bootstrap";
import NewCategoryModal from "./NewCategoryModal";

function Sidebar(props) {
  const staticLinks = [
    {
      id: -1,
      title: "Dashboard",
      path: "/Home",
    },
  ];

  staticLinks.forEach((props) => {
    <NavSidebarItem id={props.id} title={props.title} path={props.path} />;
  });

  //define getters and setters for categories
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [currentId, setCurrentId] = useState(-1);

  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);

  //Callback to update the shown categories
  const getCategories = useCallback(() => {
    CategoryService.index(props.containerId)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        // Handle error
      });
  }, [setCategories]);

  //retrieve data on load
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  categories.forEach((category) => {
    <SidebarItem id={category.id} title={category.name} path={category.path} />;
  });

  const createCategory = useCallback(() => {
    CategoryService.create(props.containerId, name, description).then(() => {
      setIsModalVisible(false);
      getCategories();
    });
  });

  //delete selected container
  const deleteCategory = useCallback(() => {
    CategoryService.delete(props.containerId, currentId).then(() => {
      setIsConfirmModalVisible(false);
      getCategories();
    });
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <nav>
      <div className="sidebar-Nav">
        <div className="sidebar-wrap">
          {staticLinks.map((props, index) => {
            return (
              <NavSidebarItem
                title={props.title}
                key={index}
                path={props.path}
              />
            );
          })}

          <h2 className="sidebar-item">Categories</h2>

          {categories.map((category, index) => {
            return (
              <SidebarItem
                title={category.name}
                id={category.id}
                key={index}
                containerId={props.containerId}
                setIdentifierView={props.setIdentifierView}
                setIsConfirmModalVisible={setIsConfirmModalVisible}
                setCurrentId={setCurrentId}
              />
            );
          })}

          <Button
            variant="primary"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            New Category
          </Button>
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
      <ConfirmationModal
        visible={isConfirmModalVisible}
        title={`Delete category?`}
        text={`This action will delete this category and all associated notes. Do you wish to continue?`}
        continueAction={deleteCategory}
        closeAction={() => setIsConfirmModalVisible(false)}
      />
    </nav>
  );
}

export default Sidebar;
