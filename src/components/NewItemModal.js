import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";
import propTypes from "prop-types";

function NewContainerModal(props, setTitle={setTitle}, setDescription={setDescription}) {


    return (
        <Modal show={props.visible} onHide={props.closeAction}>
            <Modal.Header>
                <Modal.Title> {props.title} </Modal.Title>
            </Modal.Header>

            <Modal.Body>  
            <form>
                <div class="form-group">
                    <label for="Title-label" class="col-form-label">Title:</label>
                    <input type="text" class="form-control" id="title-name" onChange={(e) => props.setTitle(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="Description-text" class="col-form-label">Description:</label>
                    <textarea class="form-control" id="description-text" onChange={(e) => props.setDescription(e.target.value)}></textarea>
                </div>
            </form>
            </Modal.Body>

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

NewContainerModal.propTypes = {
    //if modal is shown
    visible: propTypes.bool.isRequired,

    //possible actions
    closeAction: propTypes.func.isRequired,
    continueAction: propTypes.func.isRequired,

    //required text
    title: propTypes.string.isRequired,
};

export default NewContainerModal;