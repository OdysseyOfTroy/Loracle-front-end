import React from "react";
import "../../css/Dashboard.css";

function ContainerList(
  props,
  setIsConfirmModalVisible = { setIsConfirmModalVisible },
  selectContainer = { selectContainer },
  setIsEditModalVisible = { setIsEditModalVisible }
) {
  return (
    <div className="card">
      <div className="custom-card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="button-Actions">
          <button
            className="button-function delete"
            onClick={() => {
              props.selectContainer(props.id),
                props.setIsConfirmModalVisible(true);
            }}
          >
            {" "}
            Delete
          </button>
          <button
            className="button-function view"
            onClick={() => {
              props.selectContainer(props.id),
                props.setIsEditModalVisible(true);
            }}
          >
            Edit
          </button>
        </div>
        <button
          className="view"
          onClick={() => {
            props.selectContainer(props.id);
            window.location = `/mainpage/${props.id}`;
          }}
        >
          View
        </button>
      </div>
    </div>
  );
}

export default ContainerList;
