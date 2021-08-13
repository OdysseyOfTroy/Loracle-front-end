import React, { useCallback, useEffect, useState } from "react";
import IdentifierService from "../../Connections/Identifier.service";

import "../../../css/Identifiers.css"

function Identifiers(props) {

  return (
    <div className="list-row">
      <div className="col=md-6">
        {props.identifiers.map((identifier) => {

          return (<button> {identifier.title} </button>);
        })} 
      </div>
    </div>
  )
}

export default Identifiers