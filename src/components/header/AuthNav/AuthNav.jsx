import React from 'react';
import icon from './outline.png';
import css from './authNav.module.css';
import { useNavigate } from 'react-router-dom';

const AuthNav = () =>
{
  const navigates = useNavigate()
  const handleClick = () => {
    navigates('/signin')
  }

  return (
    <>
      <button type="button" className={css.signIn_btn}>
        <span className={css.signInText}>Sign in</span>

        <img className={css.user_icon} src={icon} alt="User icon"></img>
      </button>
    </>
  );
};

export default AuthNav;
