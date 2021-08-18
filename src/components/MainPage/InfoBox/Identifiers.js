import React, { useState, useCallback } from "react";

import "../../../css/Identifiers.css";
import IdentifierService from "../../Connections/Identifier.service";
import InformationService from "../../Connections/Information.service";
import ConfirmationModal from "../../Confirmation.Modal";
import NewIdentifierModal from "./NewIdentifierModal";
import EditIdentifierModal from "./EditIdentifierModal";

function Identifiers(props) {
  const [title, setTitle] = useState("");
  const [currentId, setCurrentId] = useState(-1);

  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClick = (id) => {
    InformationService.index(props.containerId, props.categoryId, id).then(
      (res) => {
        props.setInformationView(res.data, id);
      }
    );
  };

  const deleteIdentifier = () => {
    setIsConfirmModalVisible(false);
    IdentifierService.delete(
      props.containerId,
      props.categoryId,
      currentId
    ).then(() => {});
  };

  const prepDelete = (id) => {
    setIsConfirmModalVisible(true);
    setCurrentId(id);
  };

  const prepUpdate = (id) => {
    setIsEditModalVisible(true);
    setCurrentId(id);
  };

  const createIdentifier = useCallback(() => {
    IdentifierService.create(props.containerId, props.categoryId, title).then(
      () => {
        setIsModalVisible(false);
      }
    );
  });

  const editIdentifier = useCallback(() => {
    IdentifierService.update(
      props.containerId,
      props.categoryId,
      currentId,
      title
    );
    setIsEditModalVisible(false);
  });

  return (
    <div className="list-row">
      <div className="col=md-6">
        {props.identifiers.map((identifier, idx) => {
          return (
            <div key={idx}>
              <button onClick={() => onClick(identifier.id)}>
                {identifier.title}
              </button>
              <button onClick={() => prepDelete(identifier.id)}>Delete</button>
              <button onClick={() => prepUpdate(identifier.id)}>Edit</button>
            </div>
          );
        })}

        <button
          className="Identifer-button"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          add Identifier
        </button>
      </div>
      <ConfirmationModal
        visible={isConfirmModalVisible}
        title={`Delete Identifier?`}
        text={`This action will delete this identifier and all associated notes. Do you wish to continue?`}
        continueAction={deleteIdentifier}
        closeAction={() => setIsConfirmModalVisible(false)}
      />

      <NewIdentifierModal
        visible={isModalVisible}
        title={`new Identifier`}
        continueAction={createIdentifier}
        closeAction={() => setIsModalVisible(false)}
        setTitle={setTitle}
      />

      <EditIdentifierModal
        visible={isEditModalVisible}
        title={"Edit"}
        continueAction={editIdentifier}
        closeAction={() => setIsModalVisible(false)}
        setTitle={setTitle}
      />
    </div>
  );
}

export default Identifiers;
