import React, { useCallback, useEffect, useState } from "react";
import IdentifierService from "../../Connections/Identifier.service";

import "../../../css/Identifiers.css"

function Identifiers(props) {

  return (
    <div className="list-row">
      <div className="col=md-6">
        {props.identifiers.map((identifier) => {

          return (<h2> {identifier.title} </h2>);
        })} 
      </div>
    </div>
  )
}

export default Identifiers