import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { modalShow } from '../../redux/showModal/sliceShowModal';
// import { modalShow } from 'redux/slice';
const ModalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispath = useDispatch();
  return createPortal(
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => dispath(modalShow(false))}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    ModalRoot
  );
};

export default Modal;
