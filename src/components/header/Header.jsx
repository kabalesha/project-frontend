import Logo from './logo/logo.jsx';
import React from 'react';
import css from './header.module.css';
import AuthNav from './AuthNav/AuthNav.jsx';
import mainCss from './../../css/main.css';
import UserNav from './UserNav/UserNav.jsx';

const Header = () => {
  return (
    <>
      <header className={css.headerContainer}>
        <Logo />
        <AuthNav />
        <UserNav />
      </header>
    </>
  );
};

export default Header;
