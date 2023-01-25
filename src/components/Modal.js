import React, { useEffect } from 'react'
import { ModalContent } from '../styles/Modal.styles';

const Modal = ({ closeModal, contentModal, modalStatus }) => {
    useEffect(() => {
        setTimeout(() => {
          closeModal();
        }, 5000);
        
      });
    
      return <ModalContent modalStatus={modalStatus} contentModal={contentModal}>{contentModal}</ModalContent>;
}

export default Modal