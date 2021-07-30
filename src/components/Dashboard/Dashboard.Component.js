import React, { useState, useCallback, useEffect } from 'react';
import DashboardService from '../Connections/Dashboard.service';
import ContainerList from './Container.List';
import "../../css/global.css";
import "../../css/Dashboard.css";
import Universalbar from '../UniversalBar';
import ConfirmationModal from '../Confirmation.Modal';
import { Button } from 'react-bootstrap';
import NewContainerModal from '../Dashboard/NewContainerModal';

function Dashboard(props) {

  //Define getting and setting the states of this component
  const [containers, setContainers] = useState([]);
  const [currentId, setCurrentId] = useState([null]); 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    },  [setContainers, setCurrentId]
  );
  
  //create containerlist for each container
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

  //create new container
  const createContainer = useCallback(() => {
    console.log(title, description  )
    DashboardService.create(title, description).then(() => {
      setIsModalVisible(false);
      getContainers();
    });
  });

  //delete selected container
  const deleteContainer = useCallback(() => {
    DashboardService.delete(props.id).then(() => {
      setIsConfirmModalVisible(false);
      getContainers();
    }); 
  });

    return (
      <div className="global-background">
        <Universalbar />
          <div className="Dashboard">
              <div className="Dashboard-Row">
                <h2>Containers</h2>
              </div>
              <div className="Cards">
                {containers.map((container, index) => {
                return (
                  <div>
                    <ContainerList id={container.id} title={container.title} key={index} description={container.description} setIsConfirmModalVisible={setIsConfirmModalVisible}/>

                  </div>
                )
                })}
                <Button variant="primary" onClick={() => {setIsModalVisible(true);}}>New container</Button>
              </div>
          </div>

          <ConfirmationModal
            visible={isConfirmModalVisible}
            title={`Delete ${title}?`}
            text={`This action will delete ${title} and all associated notes. Do you wish to continue?`}
            continueAction={deleteContainer}
            closeAction={() => setIsConfirmModalVisible(false)}
          />

          <NewContainerModal 
            visible={isModalVisible}
            title={`New Container`}
            continueAction={createContainer}
            closeAction={() => setIsModalVisible(false)}
            setTitle={setTitle}
            setDescription={setDescription}
          />
        </div>
    )
}

export default Dashboard;



//                     <button className="delete-btn" onClick={() => {setIsConfirmModalVisible(true);}}>Delete</button>