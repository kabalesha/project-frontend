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
import { currentUserEmailSelector } from '../../../redux/selectors.js';
// import UserNav from '../UserNav/UserNav';
import UserLogoModal from '../UserLogoModal/UserLogoModal';

const UserLogo = () => {
  const userProfile = useSelector(currentUserEmailSelector);
  const name = userProfile.userName;
  const avatar = userProfile.avatarURL;
  const defaultName = name ? name.slice(0, 1).toUpperCase() : 'A';

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
      <UserLogoModal isOpen={isModalOpen} onClose={handleModalClose} />
    </UserLogoContainer>
  );
};

export default UserLogo;
