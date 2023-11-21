import React, { useState } from 'react';
import {
  UserAvatar,
  UserName,
  UserLogoBtn,
  UserLogoText,
  UserLogoIcon,
  UserLogoContainer,
} from './UserLogo.styled';
import icon from '../../../icons/icons.svg';
import { useSelector } from 'react-redux';
import { selectorUserProfile } from '../../../redux/selectors.js';
import UserNav from '../UserNav/UserNav';
const UserLogo = () => {
  const userProfile = useSelector(selectorUserProfile);
  const name = userProfile.userName;
  const avatar = userProfile.avatarURL;
  const defaultName = name ? name.slice(0, 1).toUpperCase() : 'V';

  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <UserLogoContainer>
      <UserLogoBtn onClick={handleButtonClick} aria-label="User Logo">
        <UserName>{name}</UserName>
        {avatar ? (
          <UserAvatar src={avatar} alt="Avatar" />
        ) : (
          <UserLogoText>
            <p>{defaultName}</p>
          </UserLogoText>
        )}
        <UserLogoIcon>
          <svg>
            <use href={icon + '#arrow-down'}></use>
          </svg>
        </UserLogoIcon>
      </UserLogoBtn>
      <UserNav isOpen={isModalOpen} onClose={handleModalClose} />
    </UserLogoContainer>
  );
};

export default UserLogo;
