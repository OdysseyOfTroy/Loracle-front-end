import React from "react";
import { Button, Modal } from "react-bootstrap";
import propTypes from "prop-types";

function ConfirmationModal(props) {
  return (
    <Modal show={props.visible} onHide={props.closeAction}>
      <Modal.Header>
        <Modal.Title> {props.title} </Modal.Title>
      </Modal.Header>

      <Modal.Body> {props.text} </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.closeAction}>Cancel</Button>

        <Button onClick={props.continueAction}>Continue</Button>
      </Modal.Footer>
    </Modal>
  );
}

ConfirmationModal.propTypes = {
  //if modal is shown
  visible: propTypes.bool.isRequired,

  //possible actions
  closeAction: propTypes.func.isRequired,
  continueAction: propTypes.func.isRequired,

  //required text
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default ConfirmationModal;
