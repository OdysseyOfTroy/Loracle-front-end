import React, { useState, useCallback } from "react";
import "../../../css/Identifiers.css";
import ConfirmationModal from "../../Confirmation.Modal";
import InformationService from "../../Connections/Information.service";
import EditInformationModal from "./EditInformationModal";
import NewInformationModal from "./NewInformationModal";

function Information(props) {
  const [infoTitle, setInfoTitle] = useState("");
  const [info, setInfo] = useState("");
  const [currentId, setCurrentId] = useState(-1);

  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const deleteInformation = () => {
    setIsConfirmModalVisible(false);
    InformationService.delete(
      props.containerId,
      props.categoryId,
      props.identifierId,
      currentId
    ).then(() => {
      setIsConfirmModalVisible(false);
      props.getInformation(props.identifierId);
    });
  };

  const getInformationPiece = useCallback((id) => {
    InformationService.get(
      props.containerId,
      props.categoryId,
      props.identifierId,
      id
    ).then((res) => {
      setInfoTitle(res.data.infoTitle);
      setInfo(res.data.info);
      setIsEditModalVisible(true);
      setCurrentId(id);
    });
  });

  const prepDelete = (id) => {
    setIsConfirmModalVisible(true);
    setCurrentId(id);
  };

  const editInformation = useCallback(() => {
    InformationService.update(
      props.containerId,
      props.categoryId,
      props.identifierId,
      currentId,
      infoTitle,
      info
    ).then(() => {
      setIsEditModalVisible(false);
      props.getInformation(props.identifierId);
    });
  });
  const createInformation = useCallback(() => {
    InformationService.create(
      props.containerId,
      props.categoryId,
      props.identifierId,
      infoTitle,
      info
    ).then(() => {
      setIsModalVisible(false);
      props.getInformation(props.identifierId);
    });
  });

  return (
    <div className="list-row">
      <div className="col">
        {props.information.map((information, idx) => {
          return (
            <div key={idx}>
              <button
                className="info-Title"
                onClick={() => getInformationPiece(information.id)}
              >
                {information.infoTitle}
              </button>
              <button className="Delete" onClick={() => prepDelete(information.id)}>Delete</button>
            </div>
          );
        })}

        <button
          className="Information-button"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          add information
        </button>
      </div>

      <ConfirmationModal
        visible={isConfirmModalVisible}
        title={`Delete Information?`}
        text={`This action will delete this capsule of information and all associated notes. Do you wish to continue?`}
        continueAction={deleteInformation}
        closeAction={() => setIsConfirmModalVisible(false)}
      />

      <NewInformationModal
        visible={isModalVisible}
        title={`new Information`}
        continueAction={createInformation}
        closeAction={() => setIsModalVisible(false)}
        setInfoTitle={setInfoTitle}
        setInfo={setInfo}
      />

      <EditInformationModal
        visible={isEditModalVisible}
        title={`edit`}
        continueAction={editInformation}
        closeAction={() => setIsEditModalVisible(false)}
        setInfoTitle={setInfoTitle}
        setInfo={setInfo}
        infoTitle={infoTitle}
        info={info}
      />
    </div>
  );
}

export default Information;
