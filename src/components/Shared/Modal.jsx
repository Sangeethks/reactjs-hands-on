import React from 'react';
import styles from './Modal.scss';

const Modal = (props) => (
  <div className="Modal">
    {props.children}
    <div className="ModalOverlay" onClick={props.overlayClickEvent}></div>
  </div>
)

export default Modal
