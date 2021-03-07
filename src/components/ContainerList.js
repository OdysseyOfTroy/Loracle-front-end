import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContainersList = props => {

  useEffect(() => {
    axios.get('/users/1/containers')
        .then(res => setContainers(res.data))
      }, []);

  const [containers, setContainers] = useState([]);

  return (
      <div>
        <div className="container-list">
          {containers.map((container, index) => (
              <div key={index}>
                {container.title} | {container.description}
              </div>
            ))}
        </div>
      </div>
  )
};
export default ContainersList;