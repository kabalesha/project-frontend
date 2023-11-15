import React from 'react';
import icon from './outline.png';
import css from './authNav.module.css';
import { useDispatch } from 'react-redux';
import { thunkSignIn } from '../../../redux/auth/thunkUser';

const AuthNav = () => {
  const dispath = useDispatch();
  const handleSignIn = () => {
    dispath(
      thunkSignIn({
        email: 'alex@gmail.com',
        password: '123456',
      })
    );
  };
  return (
    <>
      <button type="button" className={css.signIn_btn}>
        <span className={css.signInText} onClick={handleSignIn}>
          Sign in
        </span>

        <img className={css.user_icon} src={icon} alt="User icon"></img>
      </button>
    </>
  );
};

export default AuthNav;
