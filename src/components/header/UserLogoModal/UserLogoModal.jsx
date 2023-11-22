import React, { useContext, useRef } from 'react';
// import UserLogoutModal from '../UserLogoutModal';
import {
  LogoModalMenu,
  ModalMenuBtn,
  ModalMenuIcon,
} from './UserLogoModal.styled';
import icon from '../../../icons/icons.svg';
import { useDispatch } from 'react-redux';
import { thunkLogOut } from '../../../redux/auth/thunkUser';
// import { ModalContext } from '../../ModalContext';
// import Setting from '../Setting/Setting';

const UserLogoModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(thunkLogOut());
  };
  //   const togModal = useContext(ModalContext);

  //   const handleSettingButtonClick = () => {
  //     if (onClose && typeof onClose === 'function') {
  //       togModal(<Setting />);
  //       onClose();
  //     }
  //   };

  //   const handleLogoutButtonClick = () => {
  //     if (onClose && typeof onClose === 'function') {
  //       onClose();
  //       togModal(
  //         <UserLogoutModal
  //           onClose={() => {
  //             togModal();
  //           }}
  //         />
  //       );
  //     }
  //   };

  return (
    <>
      {isOpen && (
        <LogoModalMenu ref={modalRef}>
          <ModalMenuBtn>
            <ModalMenuIcon>
              <svg>
                <use href={icon + '#settings'}></use>
              </svg>
            </ModalMenuIcon>
            Setting
          </ModalMenuBtn>
          <ModalMenuBtn onClick={logoutUser}>
            <ModalMenuIcon>
              <svg>
                <use href={icon + '#logout'}></use>
              </svg>
            </ModalMenuIcon>
            Log out
          </ModalMenuBtn>
        </LogoModalMenu>
      )}
    </>
  );
};

export default UserLogoModal;
