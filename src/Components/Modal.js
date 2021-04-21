import React from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
  const isModalOpen = true;

  return (
    <section className={`modal-overlay ${isModalOpen ? `reveal` : `hidden`}`}>
      <div className="modal-container">
        <h3>Modal heading</h3>
        <p>Some modal content or whatever you'd call it</p>
        <button className="btn">Close</button>
      </div>
    </section>
  );
};

Modal.propTypes = {};

export default Modal;
