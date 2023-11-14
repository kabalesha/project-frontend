import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import css from "./header.module.css"
import logoPNG from '../../icons/Logo.png'

const Header = () => {
  const navigate = useNavigate(); 

  const handleLogoClick = () => {
    navigate('/MainPage');
  };

  return (
    <div>
      <header className={css.headerContainer}>
        <button className={css.logo_btn} type='button' onClick={handleLogoClick}>
          <img className={css.logo} src={logoPNG} alt="Logo" />
        </button>

        <button type='button' className={css.signIn_btn}>
          <span className={css.signInText}>Sign in</span>
          <svg className={css.round_icon} width="28" height="28" >
            <use href="../../icons/icons.svg#user-icon"></use>
          </svg>
        </button>
      </header>
    </div>
  );
};

export default Header;
