import React, { useState, useCallback, useEffect } from 'react';
import DashboardDataService from '../Connections/Dashboard.service';
import ContainerList from './Container.List';

function Dashboard(props) {

    //Define getting and setting the state of component
    const [containers, setContainers] = useState([]);
    const [currentId, setCurrentId] = useState([null]); 

    // Callback to update the shown containers
  const getContainers = useCallback(
    (id) => {
      DashboardDataService.index()
        .then((response) => {
        setContainers(response.data);
        setCurrentId(id || null);
      });
    },
    [setContainers, setCurrentId]
  );

    //retrieve data on load
  useEffect(() => {
    getContainers();
  }, [getContainers]);

    return (
        <div className="Dashboard">
            <div className="Dashboard-Row">
                <h2>Containers</h2>
            </div>

            <ContainerList
            currentId={currentId} />
        </div>
    )
}

export default Dashboard;