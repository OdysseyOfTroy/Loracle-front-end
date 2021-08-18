import React, { useState } from "react";
import "../../../css/Sidebar.css";
import IdentifierService from "../../Connections/Identifier.service";

function SidebarItem(
  props,
  setIsConfirmModalVisible = { setIsConfirmModalVisible },
  setCurrentId = { setCurrentId },
  setIsEditModalVisible = { setIsEditModalVisible }
) {
  const onClick = () => {
    IdentifierService.index(props.containerId, props.id).then((res) => {
      props.setIdentifierView(res.data, props.id);
    });
  };

  const prepDelete = (id) => {
    props.setIsConfirmModalVisible(true);
    props.setCurrentId(id);
  };

  const prepUpdate = (id) => {
    props.setIsEditModalVisible(true);
    props.setCurrentId(id);
  }
  return (
    <div>
      <button className="sidebar-Link" onClick={onClick}>
        <span>{props.title}</span>
      </button>
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
  );
}

export default SidebarItem;
