import React from 'react';
import "../../css/Dashboard.css";

function ContainerList(props) {
    
    return (
        <div className="card">
        <a href={props.path} className="custom-card">
        
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <button className="delete-btn">Delete</button>
          </div>
      </a>
      </div>
    )
}

export default ContainerList;