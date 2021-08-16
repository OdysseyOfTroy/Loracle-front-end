import React from "react";
import "../../../css/Sidebar.css";
import IdentifierService from "../../Connections/Identifier.service";

function SidebarItem(
  props,
  setIsConfirmModalVisible = { setIsConfirmModalVisible }
) {
  const onClick = () => {
    IdentifierService.index(props.containerId, props.id).then((res) => {
      props.setIdentifierView(res.data, props.id);
    });
  };

  return (
    <div>
      <button className="sidebar-Link" onClick={onClick}>
        <span>{props.title}</span>
      </button>
      <button
        className="button-function delete"
        onClick={() => {
          props.setIsConfirmModalVisible(true);
        }}
      >
        Delete
      </button>
    </div>

    
  );
}

export default SidebarItem;
