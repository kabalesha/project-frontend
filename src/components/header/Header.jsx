import Logo from './logo/logo.jsx';
import React from 'react';
import css from './header.module.css';
import AuthNav from './AuthNav/AuthNav.jsx';
import mainCss from './../../css/main.css';
import UserNav from './UserNav/UserNav.jsx';

import HeaderLogo from './logo/headerLogo/headerLogo.jsx';
import UserLogo from './UserLogo/UserLogo.jsx';
import UserAuth from './UserAuth/UserAuth.jsx';
import { HeaderContainer, Navigation, Wrapper } from './Header.styled.jsx';

const Header = ({ isAuthenticated }) => (
  <HeaderContainer>
    <Wrapper>
      <Navigation>
        <HeaderLogo isAuthenticated={isAuthenticated} />
        {isAuthenticated ? <UserLogo /> : <UserAuth />}
      </Navigation>
    </Wrapper>
  </HeaderContainer>
);

export default Header;
