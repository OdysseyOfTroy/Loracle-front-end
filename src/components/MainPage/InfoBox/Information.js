import React, {useState} from "react";
import "../../../css/Identifiers.css"
import ConfirmationModal from "../../Confirmation.Modal"
import InformationService from "../../Connections/Information.service";

function Information(props) {

  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [currentId, setCurrentId] = useState(-1);

  const deleteInformation = () => {
    setIsConfirmModalVisible(false); 
    InformationService.delete(props.containerId, props.categoryId, props.identifierId, currentId).then(() => {
    })
  }

  const prepDelete = (id) => {
    setIsConfirmModalVisible(true);
    setCurrentId(id)
  }

  return (
    <div className="list-row">
      <div className="col=md-6">
        {props.information.map((information, idx) => {

          return (<div><button key={idx}> {information.infoTitle} {information.info}</button>
          <button onClick={() => prepDelete(information.id)}>Delete</button> </div>);
        })} 
      </div>

      <ConfirmationModal
        visible={isConfirmModalVisible}
        title={`Delete Information?`}
        text={`This action will delete this capsule of information and all associated notes. Do you wish to continue?`}
        continueAction={deleteInformation}
        closeAction={() => setIsConfirmModalVisible(false)}
      />
    </div>
  )
}

export default Information