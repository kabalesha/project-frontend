import React, { createContext, useCallback, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalComponent, setModalComponent] = useState(null);
  const togModal = useCallback(
    (modalComponent = null) => setModalComponent(modalComponent),
    []
  );

  useEffect(() => {
    if (modalComponent) {
      function handleEscapeKey(event) {
        if (event.code === 'Escape') {
          togModal(null);
        }
      }
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
    return;
  }, [togModal, modalComponent]);

  return (
    <ModalContext.Provider value={togModal}>
      <ReactModal
        shouldFocusAfterRender={false}
        // closeTimeoutMS={50}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        isOpen={!!modalComponent}
        onRequestClose={() => {
          togModal();
        }}
        className="content"
        overlayClassName="overlay"
      >
        {modalComponent}
      </ReactModal>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
