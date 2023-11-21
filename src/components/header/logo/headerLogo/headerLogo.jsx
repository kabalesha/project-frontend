import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './logo.svg';
import { Logo, LogoIcon } from './headerLogo.styled';
import css from './headerLogo.module.css';

const HeaderLogo = () => (
  <Link to={'/'}>
    <Logo>
      <LogoIcon src={Icon} alt="Logo" />
      <span className={css.logo_title}>
        Tracker <br /> of water
      </span>
    </Logo>
  </Link>
);

export default HeaderLogo;
