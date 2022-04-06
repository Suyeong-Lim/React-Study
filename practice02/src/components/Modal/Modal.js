import React, { useState } from "react";
import "./Modal.css";
const Modal = ({ onValidClick }) => {
  return (
    <div className="Modal-Wrapper">
      <p>Invalid Input</p>
      <p>please Enter</p>
      <button onClick={onValidClick}>Okay</button>
    </div>
  );
};

export default Modal;
