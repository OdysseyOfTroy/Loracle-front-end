import React from "react";
import { Button, Modal } from "react-bootstrap";
import propTypes from "prop-types";

function EditInformationModal(
  props,
  setInfoTitle = { setInfoTitle },
  setInfo = { setInfo }
) {
  return (
    <Modal show={props.visible} onHide={props.closeAction}>
      <Modal.Header>
        <Modal.Title> {props.title} </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="form-group">
            <label for="Title-label" className="col-form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title-name"
              onChange={(e) => props.setInfoTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="Description-text" className="col-form-label">
              Details:
            </label>
            <textarea
              className="form-control"
              id="description-text"
              onChange={(e) => props.setInfo(e.target.value)}
            ></textarea>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.closeAction}>Cancel</Button>

        <Button onClick={props.continueAction}>Continue</Button>
      </Modal.Footer>
    </Modal>
  );
}

EditInformationModal.propTypes = {
  //if modal is shown
  visible: propTypes.bool.isRequired,

  //possible actions
  closeAction: propTypes.func.isRequired,
  continueAction: propTypes.func.isRequired,

  //required text
  title: propTypes.string.isRequired,
};

export default EditInformationModal;
