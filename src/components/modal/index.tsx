import React from 'react';
import ReactModal from 'react-modal';
import Button from "../button";
import {Icon} from "@iconify/react";

ReactModal.setAppElement('#root');

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  close?: (e?: any) => void
}

function Modal({children, isOpen, close}: IProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={close}
      className="modal-body"
      overlayClassName="modal-overlay"
      htmlOpenClassName="modal-html"
    >
      {!!close && <Button
          className="absolute top-3 right-3 pl-1 pr-1"
          onClick={close}
      >
          <Icon icon="mdi:close" width={24} height={24}/>
      </Button>}
      {children}
    </ReactModal>
  );
}

export default Modal;
