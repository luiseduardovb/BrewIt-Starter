import React from "react";

//Components
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Timer from "../Timer";

// Styling
import "../../Modal.css";
import AmountCalculator from "../AmountCalculator";

const BrewingMethodModal = ({ brewingMethod, handleToggle, modalState }) => {
  return (
    <Modal size="lg" isOpen={modalState} toggle={handleToggle} backdrop="false">
      <ModalHeader toggle={handleToggle}></ModalHeader>
      <ModalBody>
        <ModalBody>
          <AmountCalculator brewingMethod={brewingMethod} />
          <Timer brewingMethod={brewingMethod} />
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
