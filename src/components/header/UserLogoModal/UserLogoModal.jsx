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
import { useState } from 'react';
import SettingsModal from '../../modals/SettingModal/SettingModal';
import UserLogoutModal from '../../modals/UserLogoutModal/UserLogoutModal';
import { modalShow } from '../../../redux/showModal/sliceShowModal';
const UserLogoModal = ({ isOpen, onClose }) => {
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const openSetting = () => {
    dispatch(SettingsModal());
  };
  const logoutUser = () => {
    dispatch(thunkLogOut());
  };
  const handleSettingButtonClick = () => {
    setSettingsModalOpen(true);
    onClose();
  };

  const handleLogoutButtonClick = () => {
    setLogoutModalOpen(true);
  };
  // const togModal = useContext(ModalContext);

  // const handleSettingButtonClick = () => {
  //   if (onClose && typeof onClose === 'function') {
  //     togModal(<Setting />);
  //     onClose();
  //   }
  // };

  return (
    <>
      {isOpen && (
        <LogoModalMenu ref={modalRef}>
          <ModalMenuBtn onClick={handleSettingButtonClick}>
            <ModalMenuIcon>
              <svg>
                <use href={icon + '#settings'}></use>
              </svg>
            </ModalMenuIcon>
            Setting
          </ModalMenuBtn>
          <ModalMenuBtn onClick={handleLogoutButtonClick}>
            <ModalMenuIcon>
              <svg>
                <use href={icon + '#logout'}></use>
              </svg>
            </ModalMenuIcon>
            Log out
          </ModalMenuBtn>
        </LogoModalMenu>
      )}
      {settingsModalOpen && (
        <SettingsModal onClose={() => setSettingsModalOpen(false)} />
      )}
      {logoutModalOpen && (
        <UserLogoutModal onClose={() => setLogoutModalOpen(false)} />
      )}
    </>
  );
};

export default UserLogoModal;
