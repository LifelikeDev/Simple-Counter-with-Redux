import React from "react";
import { connect } from "react-redux";
import { CLOSE_MODAL } from "../action-variables";
import PropTypes from "prop-types";

const Modal = ({ isModalOpen, name, text, closeModal }) => {
  //   const isModalOpen = false;

  return (
    <section className={`modal-overlay ${isModalOpen ? `revealed` : `hidden`}`}>
      <div className="modal-container">
        <h3>{name}</h3>
        <p>{text}</p>
        <button className="btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </section>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

// getting state values
function mapStateToProps({ modalState: { isModalOpen, name, text } }) {
  return { isModalOpen, name, text };
}

// getting dispatch functions
function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch({ type: CLOSE_MODAL }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
