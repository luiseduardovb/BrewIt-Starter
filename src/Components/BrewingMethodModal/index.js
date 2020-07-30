import React from "react";

//Components
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import BrewingMethodDetails from "../BrewingMethodDetails";

// Styling
import "../../Modal.css";

const BrewingMethodModal = ({ brewingMethod, handleToggle, modalState }) => {
  return (
    <Modal size="lg" isOpen={modalState} toggle={handleToggle} backdrop="false">
      <ModalHeader toggle={handleToggle}></ModalHeader>
      <ModalBody>
        <ModalBody>
          <BrewingMethodDetails brewingMethod={brewingMethod} />
        </ModalBody>
      </ModalBody>
      <ModalFooter>
        <button className="button button-dark" onClick={handleToggle}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default BrewingMethodModal;
