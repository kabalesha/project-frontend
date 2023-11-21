import React from 'react';
import icon from './outline.png';
import css from './authNav.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { thunkSignIn } from '../../../redux/auth/thunkUser';

const AuthNav = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const handleSignIn = () => {
    dispath(thunkSignIn());
  };
  const handleClick = () => {
    navigate('/signin');
  };
  return (
    <>
      <button type="button" onClick={handleClick} className={css.signIn_btn}>
        <span className={css.signInText} onClick={handleSignIn}>
          Sign in
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <g clip-path="url(#clip0_139_678)">
            <circle cx="14" cy="14" r="13.5" stroke="#2F2F2F" />
            <path
              d="M17.5005 8.2564C17.5005 9.20846 17.1317 10.1215 16.4752 10.7947C15.8187 11.4679 14.9284 11.8461 14 11.8461C13.0716 11.8461 12.1813 11.4679 11.5248 10.7947C10.8683 10.1215 10.4995 9.20846 10.4995 8.2564C10.4995 7.30434 10.8683 6.39127 11.5248 5.71807C12.1813 5.04486 13.0716 4.66666 14 4.66666C14.9284 4.66666 15.8187 5.04486 16.4752 5.71807C17.1317 6.39127 17.5005 7.30434 17.5005 8.2564ZM7 21.7711C7.03 19.8875 7.78069 18.0915 9.09018 16.7703C10.3997 15.4492 12.163 14.7088 14 14.7088C15.837 14.7088 17.6003 15.4492 18.9098 16.7703C20.2193 18.0915 20.97 19.8875 21 21.7711C18.8039 22.8037 16.4159 23.3367 14 23.3333C11.5021 23.3333 9.13108 22.7743 7 21.7711Z"
              stroke="#2F2F2F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_139_678">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </>
  );
};

export default AuthNav;
