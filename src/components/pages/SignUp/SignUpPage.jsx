import React from 'react';

import AuthForm from '../../auth/AuthForm.jsx';
import css from './SignUpPage.module.css'

import { useNavigate } from 'react-router-dom';

const SignUpPage = ({ redirectTo }) => {
  const navigate = useNavigate();

  const handleFormSubmit = async body => {
    console.log('first', body);
    navigate(redirectTo);
  };

  return (
    <section className={css.container}>
      <div className={css.img_container}>
        <div className={css.form_container}>
          <AuthForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
