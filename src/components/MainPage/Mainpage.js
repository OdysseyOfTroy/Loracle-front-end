import React, { useState } from "react";
import Identifiers from "./InfoBox/Identifiers";
import Sidebar from "./Sidebar/Sidebar.Component";
import "../../css/Mainpage.css";
import Universalbar from "../UniversalBar";
import { useParams } from "react-router-dom";
import Information from "./InfoBox/Information";
import ConfirmationModal from "../Confirmation.Modal"
import IdentifierService from "../Connections/Identifier.service"


function Mainpage(props) {
  const { containerId } = useParams();

  const [categoryId, setCategoryId] = useState(-1);
  const [identifiers, setIdentifiers] = useState([]);
  const [information, setInformation] = useState([]);

  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);

  const setIdentifierView = (data, id) => {
    setIdentifiers(data);
    setInformation([]);
    setCategoryId(id);
  };

  const setInformationView = (data) => {
    setInformation(data);
    setIdentifiers([]);
  };


  return (
    <div className="page">
      <Universalbar></Universalbar>
      <div className="sidebar">
        <Sidebar
          containerId={containerId}
          categoryId={categoryId}
          setIdentifierView={setIdentifierView}
        ></Sidebar>
      </div>
      <div className="identifiers">
        <Identifiers
          containerId={containerId}
          categoryId={categoryId}
          identifiers={identifiers}
          setInformationView={setInformationView}
          setIsConfirmModalVisible={setIsConfirmModalVisible}
        ></Identifiers>
        <Information information={information}
        ></Information>
      </div>

    </div>
  );
}

export default Mainpage;
