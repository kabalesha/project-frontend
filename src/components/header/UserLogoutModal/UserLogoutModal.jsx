import React from 'react';
import { useDispatch } from 'react-redux';
import ReactModal from 'react-modal';
import { logOutThunk } from '../../../redux/auth/thunk';
import { createPortal } from 'react-dom';
import {
  LogOutBtn,
  LogOutBtns,
  LogOutClose,
  LogOutHeader,
  LogOutText,
  LogOutWindow,
} from './UserLogoutModal.styled';
import sprite from '../../../img/sprite.svg';

// ReactModal.setAppElement('#modal-root');
const modalRoot = document.querySelector('#modal-root');
const UserLogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutThunk())
      .then(() => {
        dispatch({ type: 'CLEAR_USER_DATA' });
        onClose();
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  const handleCancel = () => {
    onClose();
  };

  return createPortal(
    <LogOutWindow>
      <LogOutHeader>
        <p>Log out</p>
        <LogOutClose onClick={handleCancel}>
          <svg>
            <use href={sprite + '#close'}></use>
          </svg>
        </LogOutClose>
      </LogOutHeader>
      <LogOutText>
        <p>Do you really want to leave?</p>
      </LogOutText>
      <LogOutBtns>
        <LogOutBtn onClick={handleCancel}>Cancel</LogOutBtn>
        <LogOutBtn onClick={handleLogout}>Log out</LogOutBtn>
      </LogOutBtns>
    </LogOutWindow>,
    modalRoot
  );
};

export default UserLogoutModal;
