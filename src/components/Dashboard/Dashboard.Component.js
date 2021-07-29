import React, { useState, useCallback, useEffect } from 'react';
import DashboardService from '../Connections/Dashboard.service';
import ContainerList from './Container.List';
import "../../css/global.css";
import "../../css/Dashboard.css";

function Dashboard(props) {

    //Define getting and setting the state of component
    const [containers, setContainers] = useState([]);
    const [currentId, setCurrentId] = useState([null]); 

    // Callback to update the shown containers
  const getContainers = useCallback(
    (id) => {
      DashboardService.index()
        .then((response) => {
        if(response!== undefined) {
        setContainers(response.data);
      
        setCurrentId(id || null);
        }
      });
    },
    [setContainers, setCurrentId]
  );
  
  containers.forEach((container) => {
    <ContainerList
        id={container.id}
        title={container.title}
        description={container.description}
    />
  })
    //retrieve data on load
  useEffect(() => {
    getContainers();
  }, [getContainers]);

    return (
        <div className="global-background">
          <div className="Dashboard">
              <div className="Dashboard-Row">
                  <h2>Containers</h2>
              </div>
            <div className="Cards">
              {containers.map((container, index) => {
                  return <ContainerList title={container.title} key={index} description={container.description} />
              })}
            </div>
          </div>
        </div>
    )
}

export default Dashboard;