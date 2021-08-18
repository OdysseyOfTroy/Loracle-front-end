import React, { useCallback, useEffect, useState } from "react";
import SidebarItem from "./SidebarItem.Component";
import NavSidebarItem from "./NavSidebarItem.Component";
import CategoryService from "../../Connections/Category.service";
import "../../../css/Sidebar.css";
import ConfirmationModal from "../../Confirmation.Modal";
import NewCategoryModal from "./NewCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import IdentifierService from "../../Connections/Identifier.service";

function Sidebar(props) {
  const staticLinks = [
    {
      id: -1,
      title: "Dashboard",
      path: "/Home",
    },
  ];

  //define getters and setters for categories
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [currentId, setCurrentId] = useState(-1);

  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);



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

  const createCategory = useCallback(() => {
    CategoryService.create(props.containerId, name, description).then(() => {
      setIsModalVisible(false);
      getCategories();
    });
  });

  const editCategory = useCallback(() => {
    CategoryService.update(props.containerId, currentId, name, description);
    setIsEditModalVisible(false);
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
                setIsEditModalVisible={setIsEditModalVisible}
                setCurrentId={setCurrentId}
                getIdentifiers={props.getIdentifiers}
              />
            );
          })}

          <button
            className="New-Category"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            New Category
          </button>
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

      <EditCategoryModal
        visible={isEditModalVisible}
        title={`Edit`}
        continueAction={editCategory}
        closeAction={() => setIsEditModalVisible(false)}
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
