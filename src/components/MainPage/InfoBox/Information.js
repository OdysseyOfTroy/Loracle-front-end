import React, { useCallback, useEffect, useState } from "react";
import "../../../css/Identifiers.css"

function Information(props) {

  return (
    <div className="list-row">
      <div className="col=md-6">
        {props.information.map((information, idx) => {

          return (<button key={idx}> {information.infoTitle} {information.info}</button>);
        })} 
      </div>
    </div>
  )
}

export default Information