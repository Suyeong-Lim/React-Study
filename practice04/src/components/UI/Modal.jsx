import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import S from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={S.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={S.modal}>
      <div className={S.content}>{props.children}</div>
    </div>
  );
};

const portalElemnts = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElemnts
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElemnts
      )}
    </Fragment>
  );
};

export default Modal;
