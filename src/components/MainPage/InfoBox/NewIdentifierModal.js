import React from "react";
import { Button, Modal } from "react-bootstrap";
import propTypes from "prop-types";

function NewIdentifierModal(props) {
  return (
    <Modal show={props.visible} onHide={props.closeAction}>
      <Modal.Header>
        <Modal.Title> {props.title} </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="Title-label" className="col-form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title-name"
              onChange={(e) => props.setTitle(e.target.value)}
            />
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

NewIdentifierModal.propTypes = {
  //if modal is shown
  visible: propTypes.bool.isRequired,

  //possible actions
  closeAction: propTypes.func.isRequired,
  continueAction: propTypes.func.isRequired,

  //required text
  title: propTypes.string.isRequired,
};

export default NewIdentifierModal;
