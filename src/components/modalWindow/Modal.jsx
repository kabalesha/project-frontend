import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { modalShow } from '../../redux/showModal/sliceShowModal';
import css from './Modal.module.css';
// import { modalShow } from 'redux/slice';
const ModalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispath = useDispatch();
  return createPortal(
    <div className={css.hystmodal}>
      <div className={css.modalDiv}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn btn-secondary "
                data-bs-dismiss="modal"
                onClick={() => dispath(modalShow(false))}
              >
                Close
              </button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>,
    ModalRoot
  );
};

export default Modal;
