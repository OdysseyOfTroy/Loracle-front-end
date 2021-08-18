import React, { useState } from "react";
import Identifiers from "./InfoBox/Identifiers";
import Sidebar from "./Sidebar/Sidebar.Component";
import "../../css/Mainpage.css";
import Universalbar from "../UniversalBar";
import { useParams } from "react-router-dom";
import Information from "./InfoBox/Information";
import IdentifierService from "../Connections/Identifier.service";
import InformationService from "../Connections/Information.service";
import SwitchComponents from "../switchComponents";

function Mainpage() {
  const { containerId } = useParams();

  const [categoryId, setCategoryId] = useState(-1);
  const [identifierId, setIdentifierId] = useState(-1);
  const [identifiers, setIdentifiers] = useState([]);
  const [information, setInformation] = useState([]);
  const [activeComponent, setActiveComponent] = useState("")

  const getIdentifiers = (currentId) => {
    IdentifierService.index(containerId, currentId).then((res) => {
      setIdentifierView(res.data, currentId);
    });
  };

  const getInformation = (currentId) => {
    InformationService.index(containerId, categoryId, currentId).then(
      (res) => {
        setInformationView(res.data, currentId);
      }
    );
  };

  const setIdentifierView = (data, id) => {
    setIdentifiers(data);
    setInformation([]);
    setCategoryId(id);
  };

  const setInformationView = (data, id) => {
    setInformation(data);
    setIdentifiers([]);
    setIdentifierId(id);
  };

  return (
    <div className="page">
      <Universalbar></Universalbar>
      <div className="sidebar">
        <Sidebar
          containerId={containerId}
          categoryId={categoryId}
          setIdentifierView={setIdentifierView}
          getIdentifiers={getIdentifiers}
          setActiveComponent={setActiveComponent}
        ></Sidebar>
      </div>
      <div className="identifiers">
        <SwitchComponents active={activeComponent}>
        <Identifiers
          name="identifiers"
          containerId={containerId}
          categoryId={categoryId}
          identifiers={identifiers}
          setInformationView={setInformationView}
          getIdentifiers={getIdentifiers}
          getInformation={getInformation}
          setActiveComponent={setActiveComponent}
        ></Identifiers>
        <Information
          name="information"
          containerId={containerId}
          categoryId={categoryId}
          identifierId={identifierId}
          information={information}
          getInformation={getInformation}
        ></Information>
        </SwitchComponents>

      </div>
    </div>
  );
}

export default Mainpage;
