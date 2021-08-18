import React from "react";
import { Button, Modal } from "react-bootstrap";
import propTypes from "prop-types";

function NewCategoryModal(
  props
) {
  return (
    <Modal show={props.visible} onHide={props.closeAction}>
      <Modal.Header>
        <Modal.Title> {props.title} </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="name-label" className="col-form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="title-name"
              onChange={(e) => props.setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description-text" className="col-form-label">
              Description:
            </label>
            <textarea
              className="form-control"
              id="description-text"
              onChange={(e) => props.setDescription(e.target.value)}
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

NewCategoryModal.propTypes = {
  //if modal is shown
  visible: propTypes.bool.isRequired,

  //possible actions
  closeAction: propTypes.func.isRequired,
  continueAction: propTypes.func.isRequired,

  //required text
  title: propTypes.string.isRequired,
};

export default NewCategoryModal;
