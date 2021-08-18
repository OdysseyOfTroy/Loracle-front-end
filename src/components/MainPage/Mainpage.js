import React, { useState } from "react";
import Identifiers from "./InfoBox/Identifiers";
import Sidebar from "./Sidebar/Sidebar.Component";
import "../../css/Mainpage.css";
import Universalbar from "../UniversalBar";
import { useParams } from "react-router-dom";
import Information from "./InfoBox/Information";
import IdentifierService from "../Connections/Identifier.service";

function Mainpage() {
  const { containerId } = useParams();

  const [categoryId, setCategoryId] = useState(-1);
  const [identifierId, setIdentifierId] = useState(-1);
  const [identifiers, setIdentifiers] = useState([]);
  const [information, setInformation] = useState([]);

  const getIdentifiers = (currentId) => {
    IdentifierService.index(containerId, currentId).then((res) => {
      setIdentifierView(res.data, currentId);
    });
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
        ></Sidebar>
      </div>
      <div className="identifiers">
        <Identifiers
          containerId={containerId}
          categoryId={categoryId}
          identifiers={identifiers}
          setInformationView={setInformationView}
          getIdentifiers={getIdentifiers}
        ></Identifiers>
        <Information
          containerId={containerId}
          categoryId={categoryId}
          identifierId={identifierId}
          information={information}
        ></Information>
      </div>
    </div>
  );
}

export default Mainpage;
