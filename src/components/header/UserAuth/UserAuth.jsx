import React from 'react';
import { RouterLink, HeaderIcon } from './UserAuth.styled';
import icon from '../../../icons/icons.svg';

const UserAuth = () => (
  <RouterLink to="/signin">
    Sign in
    <HeaderIcon>
      <svg>
        <use href={icon + '#user'}></use>
      </svg>
    </HeaderIcon>
  </RouterLink>
);

export default UserAuth;
//
