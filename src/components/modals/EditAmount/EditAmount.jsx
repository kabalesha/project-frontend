// import Modal from '../../modalWindow/Modal';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { modalShow } from '../../../redux/showModal/sliceShowModal';
import css from './Modal.module.css';

const ModalRoot = document.querySelector('#modal-root');
const EditAmount = ({ children }) => {
  const dispath = useDispatch();
  return createPortal(
    <div className={css.hystmodal}>
      <div className={css.modalDiv}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn btn-secondary"
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
export default EditAmount;
