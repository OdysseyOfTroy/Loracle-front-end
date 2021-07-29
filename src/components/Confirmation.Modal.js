import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

function ConfirmationModal(props) {
    return (
        <Modal show={props.visible} onHide={props.closeAction}>
            <Modal.Header>
                <Modal.Title> {props.title} </Modal.Title>
            </Modal.Header>

            <Modal.Body> {props.text} </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.closeAction}>
                    Cancel
                </Button>

                <Button onClick={props.continueAction}>
                    Continue
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

ConfirmationModal.PropTypes = {
    //if modal is shown
    visible: PropTypes.bool.isRequired,

    //possible actions
    closeAction: PropTypes.func.isRequired,
    continueAction: PropTypes.func.isRequired,

    //required text
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default ConfirmationModal;