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

  const deleteIdentifier = useCallback(() => {
    IdentifierService.delete(
      props.containerId,
      props.categoryId,
      currentId
    ).then(() => {
      setIsConfirmModalVisible(false);
      props.getIdentifiers(props.categoryId);
    });
  });

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
        props.getIdentifiers(props.categoryId);
      }
    );
  });

  const editIdentifier = useCallback(() => {
    IdentifierService.update(
      props.containerId,
      props.categoryId,
      currentId,
      title
    ).then(() => {
      setIsEditModalVisible(false);
      props.getIdentifiers(props.categoryId);
    });
  });

  return (
    <div className="list-row">
      <div className="col=md-6">
        {props.identifiers.map((identifier, idx) => {
          return (
            <div key={idx}>
              <button
                onClick={() => {
                  props.getInformation(identifier.id);
                }}
              >
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
