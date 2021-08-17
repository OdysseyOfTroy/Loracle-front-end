import React, { useState } from "react";

import "../../../css/Identifiers.css"
import IdentifierService from "../../Connections/Identifier.service";
import InformationService from "../../Connections/Information.service";
import ConfirmationModal from "../../Confirmation.Modal"


function Identifiers(props) {

  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);

  const onClick = (id) => {
    InformationService.index(props.containerId, props.categoryId, id).then((res)=> {
      props.setInformationView(res.data)
      // console.log(res.data)
    })
  }

  const deleteIdentifier = (id) => {
    setIsConfirmModalVisible(false); 
    IdentifierService.delete(props.containerId, props.categoryId, id).then(() => {
    })
  }


  return (
    <div className="list-row">
      <div className="col=md-6">
        {props.identifiers.map((identifier, idx, idy) => {

          return (<div><button onClick={() => onClick(identifier.id)} key={idx}> {identifier.title}</button>
          <button onClick={() => deleteIdentifier(identifier.id)}>Delete</button></div>);
        })} 
      </div>
      <ConfirmationModal
        visible={isConfirmModalVisible}
        title={`Delete container?`}
        text={`This action will delete this container and all associated notes. Do you wish to continue?`}
        continueAction={deleteIdentifier}
        closeAction={() => setIsConfirmModalVisible(false)}
      />
    </div>
  )
}

export default Identifiers