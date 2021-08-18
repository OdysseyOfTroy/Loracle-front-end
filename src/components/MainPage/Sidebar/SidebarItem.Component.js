import React from "react";
import "../../../css/Sidebar.css";
import IdentifierService from "../../Connections/Identifier.service";

function SidebarItem(
  props
) {

  const prepDelete = (id) => {
    props.setIsConfirmModalVisible(true);
    props.setCurrentId(id);
  };

  const prepUpdate = (id) => {
    props.setIsEditModalVisible(true);
    props.setCurrentId(id);
  };

  return (
    <div>
      <button className="sidebar-Link" onClick={() => {
        props.getIdentifiers(props.id)}}>
        <span>{props.title}</span>
      </button>
      <div className="side-buttons">
      <button
        className="button-function delete"
        onClick={() => {
          prepDelete(props.id);
        }}
      >
        Delete
      </button>
      <button 
      className="button-function view"
      onClick={() => {
        prepUpdate(props.id);
      }}
      >
        Edit
      </button>
      </div>
    </div>
  );
}

export default SidebarItem;
