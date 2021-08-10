import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/Dashboard.css";

function ContainerList(props, setIsConfirmModalVisible={setIsConfirmModalVisible}, selectContainer={selectContainer}) {
  

  return (
    <div className="card">
      <div className="custom-card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="button-Actions">
          <button className="button-function delete" 
            onClick={() => {
              props.selectContainer(props.id, props.title),
              props.setIsConfirmModalVisible(true)}}> Delete
          </button>
          <button className="button-function view"
            to="/sidebar" as={Link}>View</button>
        </div>
      </div>
    </div>
  )
}

export default ContainerList;

