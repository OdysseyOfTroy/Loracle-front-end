import React, { useCallback, useEffect, useState } from "react";
import IdentifierService from "../../Connections/Identifier.service";
import IdentifierList from "./IdentiderList";

function Identifiers(props) {
  
  //define  getters and setters for this component
  const [identifiers, setIdentifiers] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  //Callback to update shown Identifiers
  const getIdentifiers = useCallback(() => {
    IdentifierService.index().then((response) => {
      setIdentifiers(response.data);
    })
    .catch((err) => {
      //Handle error
    });
  });

  const showItem = (id) => {
    setCurrentId(null);
  }
  useEffect(() => {
    getIdentifiers();
  }, [getIdentifiers]);

  return (
    <div className="list row">
      <div className="col=md-6">
        <h2>Identifiers</h2>

        <IdentifierList>
          currentId={currentId}
          setCurrentId={showItem}
          items={identifiers}
        </IdentifierList>
      </div>
    </div>
  )
}

export default Identifiers