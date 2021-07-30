import React from 'react';
import "../../css/Dashboard.css";

function ContainerList(props) {
    
    return (
        <button className="card" onClick={() => setIsModalVisible(true)}>
        <div className="custom-card">
        
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
      </div>
      </button>
    )
}

export default ContainerList;