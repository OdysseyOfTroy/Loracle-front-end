import React, { useCallback, useEffect, useState } from "react";

import "../../../css/Identifiers.css"
import InformationService from "../../Connections/Information.service";

function Identifiers(props) {

  const onClick = (id) => {
    InformationService.index(props.containerId, props.categoryId, id).then((res)=> {
      props.setInformationView(res.data)
      // console.log(res.data)
    })
  }

  return (
    <div className="list-row">
      <div className="col=md-6">
        {props.identifiers.map((identifier, idx) => {

          return (<button onClick={() => onClick(identifier.id)} key={idx}> {identifier.title}</button>);
        })} 
      </div>
    </div>
  )
}

export default Identifiers