import css from './UserLogoutModal.module.css';
import icon from './../../../icons/icons.svg';
import React from 'react';
import { useDispatch } from 'react-redux';
import { thunkLogOut } from '../../../redux/auth/thunkUser';

const UserLogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(thunkLogOut())
      .then(() => {
        dispatch({ type: 'CLEAR_USER_DATA' });
        localStorage.removeItem('token');
        onClose();
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <>
      <div className={css.backdrop}>
        <div className={css.modal_wrapper}>
          <button type="button" className={css.modal_close_btn}>
            <svg width="24px" height="24px">
              <use href={icon + '#close'}></use>
            </svg>
          </button>
          <h1 className={css.modal_title}>Log out</h1>
          <h2 className={css.modal_subtitle}>Do you really want to leave?</h2>
          <div className={css.modal_buttons}>
            <button
              onClick={onClose}
              type="button"
              className={css.modal_cancel_btn}
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              type="submit"
              className={css.modal_logout_btn}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogoutModal;
